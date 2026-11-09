import crypto from "crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export const ADMIN_COOKIE_NAME = "admin_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours
export const ADMIN_COOKIE_MAX_AGE_SECONDS = SESSION_DURATION_MS / 1000;

/**
 * Crée le premier compte admin à partir de ADMIN_EMAIL/ADMIN_PASSWORD si la
 * table AdminUser est vide. Permet un déploiement sans étape de seed manuelle ;
 * les identifiants ne sont ensuite plus lus que depuis la base (le mot de
 * passe est hashé, jamais stocké en clair).
 */
async function ensureBootstrapAdmin(): Promise<void> {
  const existingCount = await prisma.adminUser.count();
  if (existingCount > 0) return;

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    console.error(
      "Aucun compte admin en base et ADMIN_EMAIL/ADMIN_PASSWORD absents : connexion admin impossible."
    );
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.adminUser.create({ data: { email: email.toLowerCase(), passwordHash } });
}

export async function verifyAdminCredentials(email: string, password: string): Promise<string | null> {
  await ensureBootstrapAdmin();

  const user = await prisma.adminUser.findUnique({ where: { email: email.toLowerCase() } });
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.passwordHash);
  return valid ? user.id : null;
}

export async function createAdminSession(userId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  await prisma.adminSession.create({ data: { token, userId, expiresAt } });
  return token;
}

async function resolveSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const session = await prisma.adminSession.findUnique({ where: { token } });
  if (!session) return false;

  if (session.expiresAt < new Date()) {
    await prisma.adminSession.delete({ where: { token } }).catch(() => {});
    return false;
  }

  return true;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return resolveSessionToken(store.get(ADMIN_COOKIE_NAME)?.value);
}

export function getSessionTokenFromRequest(req: Request): string | undefined {
  const cookieHeader = req.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`${ADMIN_COOKIE_NAME}=([^;]+)`));
  return match?.[1] ? decodeURIComponent(match[1]) : undefined;
}

export async function isAdminRequest(req: Request): Promise<boolean> {
  return resolveSessionToken(getSessionTokenFromRequest(req));
}

export async function deleteSessionToken(token: string | undefined): Promise<void> {
  if (!token) return;
  await prisma.adminSession.delete({ where: { token } }).catch(() => {});
}

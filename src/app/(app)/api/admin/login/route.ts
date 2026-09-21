import { NextResponse } from "next/server";
import {
  verifyAdminCredentials,
  createAdminSession,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_MAX_AGE_SECONDS,
} from "@/lib/adminAuth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ success: false, error: "Email et mot de passe requis." }, { status: 400 });
  }

  const userId = await verifyAdminCredentials(email, password);
  if (!userId) {
    return NextResponse.json({ success: false, error: "Identifiants incorrects." }, { status: 401 });
  }

  const token = await createAdminSession(userId);

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE_SECONDS,
  });
  return response;
}

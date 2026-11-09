import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { listGalleryConfigs, upsertGalleryConfig } from "@/lib/galleryPricingRepo";

const CODE_REGEX = /^[A-Z]{3}\d{8}$/;

export async function GET(req: Request) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
  const configs = await listGalleryConfigs();
  return NextResponse.json(configs);
}

export async function POST(req: Request) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const code = typeof body.code === "string" ? body.code.trim().toUpperCase() : "";
  if (!CODE_REGEX.test(code)) {
    return NextResponse.json(
      { error: "Le code doit être au format 3 lettres majuscules + 8 chiffres (ex. ABC12345678)." },
      { status: 400 }
    );
  }

  const formuleLabel = typeof body.formuleLabel === "string" ? body.formuleLabel.trim() : "";
  if (!formuleLabel) {
    return NextResponse.json({ error: "Le nom de la formule est requis." }, { status: 400 });
  }

  const includedPhotos = Number(body.includedPhotos);
  const basePrice = Number(body.basePrice);
  const extraPhotoPrice = Number(body.extraPhotoPrice);
  if (!Number.isFinite(includedPhotos) || includedPhotos < 0) {
    return NextResponse.json({ error: "Nombre de photos incluses invalide." }, { status: 400 });
  }
  if (!Number.isFinite(basePrice) || basePrice < 0) {
    return NextResponse.json({ error: "Prix de base invalide." }, { status: 400 });
  }
  if (!Number.isFinite(extraPhotoPrice) || extraPhotoPrice < 0) {
    return NextResponse.json({ error: "Prix par photo supplémentaire invalide." }, { status: 400 });
  }

  const rawOptions = Array.isArray(body.options) ? body.options : [];
  type OptionInput = { label: string; price: number };
  const options: OptionInput[] = rawOptions
    .map((opt: unknown) => {
      if (typeof opt !== "object" || opt === null) return null;
      const o = opt as Record<string, unknown>;
      const label = typeof o.label === "string" ? o.label.trim() : "";
      const price = Number(o.price);
      if (!label || !Number.isFinite(price) || price < 0) return null;
      return { label, price };
    })
    .filter((opt: OptionInput | null): opt is OptionInput => opt !== null);

  const serviceId = typeof body.serviceId === "string" && body.serviceId ? body.serviceId : undefined;

  const saved = await upsertGalleryConfig({
    code,
    serviceId,
    formuleLabel,
    includedPhotos,
    basePrice,
    extraPhotoPrice,
    options,
  });

  return NextResponse.json(saved);
}

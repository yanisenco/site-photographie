import { NextResponse } from "next/server";
import { getGalleryConfig } from "@/lib/galleryPricingRepo";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = (url.searchParams.get("code") || "").trim().toUpperCase();
  if (!code) {
    return NextResponse.json(null);
  }
  const config = await getGalleryConfig(code);
  return NextResponse.json(config);
}

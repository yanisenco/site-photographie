import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { deleteGalleryConfig } from "@/lib/galleryPricingRepo";

export async function DELETE(req: Request, { params }: { params: Promise<{ code: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
  const { code } = await params;
  await deleteGalleryConfig(code.toUpperCase());
  return NextResponse.json({ success: true });
}

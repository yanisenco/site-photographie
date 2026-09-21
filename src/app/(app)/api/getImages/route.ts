import { NextResponse } from "next/server";
import { fetchCloudinaryImages } from "@/utils/cloudinaryImages";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const folder = url.searchParams.get("folder") || "";
  const images = await fetchCloudinaryImages(folder);
  return NextResponse.json(images);
}

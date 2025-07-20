import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Config Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

type CloudinaryResource = {
  secure_url: string;
  public_id: string;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const folder = url.searchParams.get("folder") || "";

  try {
    if (!folder) return NextResponse.json([]);

    // Utilisation de la Search API pour tout type de folder (fixe ou dynamique)
    const searchQuery = `folder:"${folder}"`;

    const result = await cloudinary.search
      .expression(searchQuery)
      .max_results(500)
      .sort_by('created_at', 'desc')
      .execute();



    const images = result.resources.map((resource: CloudinaryResource) => ({
      src: resource.secure_url,
      alt: resource.public_id.replace(/_/g, " ").replace(/\//g, " ").trim(),
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erreur lors de la récupération des images (Search API) :", error);
    return NextResponse.json({ error: "Impossible de récupérer les images" }, { status: 500 });
  }
}

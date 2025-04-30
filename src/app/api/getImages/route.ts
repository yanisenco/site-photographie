import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configuration de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Fonction GET pour récupérer les images d'un dossier
export async function GET(req: Request) {
  const url = new URL(req.url);
  const folder = url.searchParams.get("folder") || "";

  try {
    const { resources } = await cloudinary.api.resources({
      type: "upload",
      prefix: folder,
      max_results: 500,
    });

    // Créer un tableau d'objets { src, alt }
    const images = resources.map((resource: { secure_url: string; public_id: string }) => ({
      src: resource.secure_url,
      alt: resource.public_id.replace(/_/g, " ").replace(/\//g, " ").trim(), // Génère un texte alternatif basique
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);
    return NextResponse.json({ error: "Impossible de récupérer les images" }, { status: 500 });
  }
}
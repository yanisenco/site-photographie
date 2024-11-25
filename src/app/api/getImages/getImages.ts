// pages/api/getImages.js
import { v2 as cloudinary } from "cloudinary";

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ message: "API fonctionne correctement" });
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await cloudinary.api.resources({
      resource_type: "image",
      type: "get",
      prefix: "/folders/focusetlumiere/studio", // Le dossier spécifique
    });

    return res.status(200).json({ images: result.resources });
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}

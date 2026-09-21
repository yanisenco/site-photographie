import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

interface CloudinaryResource {
  secure_url: string;
  public_id: string;
}

export interface CloudinaryImage {
  src: string;
  alt: string;
}

/**
 * Server-only Cloudinary lookup, shared by the /api/getImages route (used by
 * client components) and by server components, which call it directly to
 * avoid an unnecessary self HTTP round-trip during SSR/SSG.
 */
export async function fetchCloudinaryImages(folder: string): Promise<CloudinaryImage[]> {
  if (!folder) return [];

  try {
    const result = await cloudinary.search
      .expression(`folder:"${folder}"`)
      .max_results(500)
      .sort_by("created_at", "desc")
      .execute();

    return result.resources.map((resource: CloudinaryResource) => ({
      src: resource.secure_url,
      alt: resource.public_id.replace(/_/g, " ").replace(/\//g, " ").trim(),
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des images (Search API) :", error);
    return [];
  }
}

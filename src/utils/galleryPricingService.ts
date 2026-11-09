import type { GalleryPricingConfig } from "@/types/galleryPricing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");

export const fetchGalleryPricing = async (code: string): Promise<GalleryPricingConfig | null> => {
  if (!BASE_URL) return null;

  try {
    const res = await fetch(`${BASE_URL}/api/gallery-pricing?code=${encodeURIComponent(code)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération du tarif de la galerie :", error);
    return null;
  }
};

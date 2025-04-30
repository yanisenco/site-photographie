const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchImages = async (folder: string): Promise<[]> => {
  if (!BASE_URL) {
    throw new Error("L'URL de base (NEXT_PUBLIC_BASE_URL) n'est pas définie.");
  }

  try {
    const res = await fetch(`${BASE_URL}/api/getImages?folder=${folder}`, {
      next: { revalidate: 60 }, // Optionnel : Revalidation pour SSG
    });

    if (!res.ok) {
      throw new Error(`Erreur HTTP : ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);
    return []; // Retourne un tableau vide si une erreur se produit
  }
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchComments = async (): Promise<[]> => {
  if (!BASE_URL) {
    throw new Error("L'URL de base (NEXT_PUBLIC_BASE_URL) n'est pas définie.");
  }

  try {
    const res = await fetch(`${BASE_URL}/api/getComments`, {
      next: { revalidate: 60 }, // Optionnel : Revalidation pour SSG
    });

    if (!res.ok) {
      throw new Error(`Erreur HTTP : ${res.statusText}`);
    }
    const reviews = await res.json();
    return reviews.result.reviews;
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires :", error);
    return []; // Retourne un tableau vide si une erreur se produit
  }
};

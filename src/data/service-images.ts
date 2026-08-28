import type { StaticImageData } from "next/image";
import photoStudio from "@/images/photo-studio.webp";
import photoExterieur from "@/images/photo-exterieur.webp";
import photoCompetition from "@/images/photo-competition.webp";
import photoCompetition2 from "@/images/photo-competition2.jpg";

// NOTE: en attendant des photos dédiées par catégorie (notamment pour
// "pro-evenements"), on réutilise les visuels réels déjà disponibles dans le
// projet plutôt que des photos d'illustration génériques.
export const SERVICE_IMAGES: Record<string, { src: StaticImageData; alt: string }> = {
  animaux: { src: photoExterieur, alt: "Séance photo animalière en extérieur" },
  portraits: { src: photoStudio, alt: "Portrait en studio" },
  "pro-evenements": { src: photoCompetition, alt: "Reportage professionnel et événementiel" },
  "sport-animalier": { src: photoCompetition2, alt: "Photographie sportive animalière" },
};

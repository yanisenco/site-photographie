import type { StaticImageData } from "next/image";
import photoAnimauxCard from "@/images/services/animaux.webp";
import photoPortraitCard from "@/images/services/portrait.webp";
import photoProCard from "@/images/services/pro.webp";
import photoSportiveCard from "@/images/services/sportive.webp";
import photoAnimauxHero from "@/images/services/service-animaux.webp";
import photoPortraitHero from "@/images/services/service-portrait.webp";
import photoProHero from "@/images/services/service-pro.webp";
import photoSportiveHero from "@/images/services/service-sportive.webp";

interface ServiceImage {
  src: StaticImageData;
  alt: string;
}

interface ServiceImageSet {
  /** Image utilisée sur la carte de la page /services */
  card: ServiceImage;
  /** Image utilisée en haut de la page /service/[id] */
  hero: ServiceImage;
}

// NOTE: "pro-evenements" n'a pas encore de deuxième photo dédiée — le hero
// réutilise provisoirement l'image de carte en attendant un visuel dédié.
export const SERVICE_IMAGES: Record<string, ServiceImageSet> = {
  animaux: {
    card: { src: photoAnimauxCard, alt: "Séance photo animalière" },
    hero: { src: photoAnimauxHero, alt: "Séance photo animalière en extérieur" },
  },
  portraits: {
    card: { src: photoPortraitCard, alt: "Portrait" },
    hero: { src: photoPortraitHero, alt: "Portrait en studio" },
  },
  "pro-evenements": {
    card: { src: photoProCard, alt: "Reportage professionnel et événementiel" },
    hero: { src: photoProHero, alt: "Reportage professionnel et événementiel" },
  },
  "sport-animalier": {
    card: { src: photoSportiveCard, alt: "Photographie sportive animalière" },
    hero: { src: photoSportiveHero, alt: "Photographie sportive animalière" },
  },
};

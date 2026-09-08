// Dossiers Cloudinary réels (racine du compte, sans préfixe) tels
// qu'organisés actuellement : "studio", "exterieur", "sportive".
// On les fait correspondre du mieux possible à la nouvelle segmentation de
// services. "pro-evenements" n'a pas encore de dossier dédié.
export const CLOUDINARY_FOLDERS: Record<string, string | null> = {
  animaux: "exterieur",
  portraits: "studio",
  "pro-evenements": null,
  "sport-animalier": "sportive",
};

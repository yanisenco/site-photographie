import { buildMetadata } from "@/lib/seo";
import VosPhotosClient from "./VosPhotosClient";

export const metadata = buildMetadata({
  title: "Accédez à vos photos — Focus & Lumière",
  description:
    "Retrouvez vos photos de séance ou d'événement grâce à votre code d'accès personnel, sélectionnez et téléchargez-les en haute résolution.",
  path: "/vos-photos",
});

export default function YourPhotos() {
  return <VosPhotosClient />;
}

import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PortfolioGallery, { PortfolioImage } from "@/components/Gallery/PortfolioGallery";
import { SERVICES } from "@/data/services";
import { CLOUDINARY_FOLDERS } from "@/data/cloudinary-folders";
import { fetchImages } from "@/utils/imagesService";

export const metadata = {
  title: "Portfolio — Focus & Lumière, photographes à Saint-Nazaire",
  description:
    "Découvrez nos réalisations : animaux de compagnie, portraits, professionnels & événements, photographie sportive animalière.",
};

export default async function PortfolioPage() {
  const perCategory = await Promise.all(
    SERVICES.map(async (svc) => {
      const folder = CLOUDINARY_FOLDERS[svc.id];
      const images = folder ? await fetchImages(folder) : [];
      return images.map((img: { src: string; alt: string }): PortfolioImage => ({
        ...img,
        category: svc.id,
      }));
    })
  );

  const images = perCategory.flat();
  const categoryLabels: Record<string, string> = {
    animaux: "Animaux",
    portraits: "Portraits",
    "pro-evenements": "Pro & Événements",
    "sport-animalier": "Sport",
  };
  const categories = SERVICES.map((svc) => ({ label: categoryLabels[svc.id] ?? svc.title, value: svc.id }));

  return (
    <PageTemplate>
      <div className="pt-4 pb-12">
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">Nos travaux</p>
        <h1 className="font-serif text-4xl lg:text-5xl leading-none mb-6">Portfolio</h1>
        <div className="h-px w-20 bg-orange" />
      </div>

      <div className="pb-24">
        <PortfolioGallery images={images} categories={categories} />
      </div>
    </PageTemplate>
  );
}

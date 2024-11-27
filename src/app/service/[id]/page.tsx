import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { fetchImages } from "@/utils/imagesService";

interface ServiceParams {
  params: Promise<{ id: string }>;
}
export async function generateStaticParams() {
  return [
    { id: "portrait-studio" },
    { id: "portrait-exterieur" },
    { id: "photo-sportive" },
  ];
}
export default async function Service({ params }: ServiceParams) {
  const id = (await params).id;

  const Content = [
    {
      id: "portrait-studio",
      title: "Portrait studio",
      description:
        "Découvrez nos séances photo de studio à domicile conçues pour capturer la personnalité et la beauté de chacun. Vous souhaitez un portrait individuel, un duo avec votre animal de compagnie, ou simplement des photos mettant en lumière votre fidèle compagnon, nous apportons tout le nécessaire pour vous offrir une expérience professionnelle et agréable.Lors de chaque séance photo de studio, nous prenons le temps de comprendre votre style et vos attentes. Nous vous guiderons dans les poses et expressions pour un résultat authentique et naturel. Grâce à notre matériel professionnel et nos connaissances en composition, pour que chaque photo révèle l’essence de nos modèles. Une séance photo de studio à domicile est idéale pour créer des souvenirs intemporels et pour immortaliser la complicité entre vous et votre animal de compagnie. Pour un cadeau ou pour vous-même, nous sommes là pour vous offrir des portraits de qualité dont vous ne serez pas déçu.",
    },
    {
      id: "portrait-exterieur",
      title: "Portrait en extérieur",
      description:
        "Vivez une expérience unique avec une prestation de photo portrait en extérieur, spécialement pensée pour capturer la beauté naturelle de chacun dans des décors authentiques. Pour un portrait individuel, dévoiler la complicité entre vous et votre animal de compagnie, ou un shooting exclusif pour votre fidèle ami à quatre pattes. Nous sélectionnons ensemble des lieux qui mettent en valeur la personnalité de chaque modèle. Pendant cette séance photo en plein air, nous tirons parti de la lumière naturelle et de l’environnement pour créer des images vivantes et pleines d’émotions. Nous prenons le temps de vous guider dans les poses, tout en laissant place à la spontanéité pour des photos authentiques. Offrant ainsi des compositions variées.",
    },
    {
      id: "photo-sportive",
      title: "Photo sportive",
      description:
        "Immortalisez vos exploits sportifs avec nos shootings conçus pour capter l’énergie, la technique et l’émotion qui vous animent. Nous nous adaptons à votre discipline pour offrir des photos dynamiques et percutantes pour tout type de sport et de niveau. Nous pourrons saisir chaque mouvement clé d'une action intense. Grâce à notre équipement professionnel et notre expertise en photographie sportive, nous garantissons des images de haute qualité qui révèlent votre passion et votre détermination. Une séance photo sportive est parfaite pour les athlètes voulant suivre leur progression. Elle convient aussi aux équipes qui souhaitent garder des souvenirs de leurs événements. C'est également une belle façon de capturer des moments de plaisir dans l’effort.",
    },
  ];

  const title =
    Content.find((title) => title.id === id)?.title || "Default Title";
  const description =
    Content.find((description) => description.id === id)?.description ||
    "Default Description";
  const images = await fetchImages(`focusetlumiere/${id.split("-")[1]}`);

  return (
    <PageTemplate>
      <SectionTitle idSection="portrait-studio" title={title} />
      <p className="mb-10">{description}</p>
      {images ? <Gallery images={images} /> : null}
    </PageTemplate>
  );
}

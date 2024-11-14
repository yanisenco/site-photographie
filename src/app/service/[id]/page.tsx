import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

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
      images: [
        {
          src: "https://i.ibb.co/FhVb8hj/209-A5504-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/dWR6pqD/209-A5536-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/28QStRw/209-A5704-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/hMWZSmp/2-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/GPHfk6S/209-A4612-min.webp",
          alt: "",
        },

        {
          src: "https://i.ibb.co/my3BZ63/4-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/bgBNcqS/209-A4546-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/YhPQV4d/3-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/M68CFMf/1-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/ZS3tQgN/209-A4508-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/LPdQkj2/209-A4533-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/gFDV27s/209-A5440-min.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/746dfzq/209-A5731-min.webp",
          alt: "",
        },
      ],
    },
    {
      id: "portrait-exterieur",
      title: "Portrait en extérieur",
      description:
        "Vivez une expérience unique avec une prestation de photo portrait en extérieur, spécialement pensée pour capturer la beauté naturelle de chacun dans des décors authentiques. Pour un portrait individuel, dévoiler la complicité entre vous et votre animal de compagnie, ou un shooting exclusif pour votre fidèle ami à quatre pattes. Nous sélectionnons ensemble des lieux qui mettent en valeur la personnalité de chaque modèle. Pendant cette séance photo en plein air, nous tirons parti de la lumière naturelle et de l’environnement pour créer des images vivantes et pleines d’émotions. Nous prenons le temps de vous guider dans les poses, tout en laissant place à la spontanéité pour des photos authentiques. Offrant ainsi des compositions variées.",
      images: [
        {
          src: "https://i.ibb.co/FwpYwdw/Triskell.webp",
          alt: "",
        },

        {
          src: "https://i.ibb.co/HnLmt3q/209A5165.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/9YH8MHV/photo-1.webp",
          alt: "",
        },
      ],
    },
    {
      id: "photo-sportive",
      title: "Photo sportive",
      description:
        "Immortalisez vos exploits sportifs avec nos shootings conçus pour capter l’énergie, la technique et l’émotion qui vous animent. Nous nous adaptons à votre discipline pour offrir des photos dynamiques et percutantes pour tout type de sport et de niveau. Nous pourrons saisir chaque mouvement clé d'une action intense. Grâce à notre équipement professionnel et notre expertise en photographie sportive, nous garantissons des images de haute qualité qui révèlent votre passion et votre détermination. Une séance photo sportive est parfaite pour les athlètes voulant suivre leur progression. Elle convient aussi aux équipes qui souhaitent garder des souvenirs de leurs événements. C'est également une belle façon de capturer des moments de plaisir dans l’effort.",
      images: [
        {
          src: "https://i.ibb.co/nmyx8C1/papa-face.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/q7x5gn9/d-rapage.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/dKMqm3L/Gentiane.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/J3MKmGM/209A3120.jpg",
          alt: "",
        },
        {
          src: "https://i.ibb.co/wsFFcVT/209-A3264-11zon.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/C13BCGP/209A0365.jpg",
          alt: "",
        },
        {
          src: "https://i.ibb.co/xgL31PY/papa-dos.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/j4qZ9gq/209-A0354-11zon.webp",
          alt: "",
        },
      ],
    },
  ];

  const title =
    Content.find((title) => title.id === id)?.title || "Default Title";
  const description =
    Content.find((description) => description.id === id)?.description ||
    "Default Description";
  const images = Content.find((images) => images.id === id)?.images || [];
  return (
    <PageTemplate>
      <SectionTitle idSection="portrait-studio" title={title} />
      <p className="mb-10">{description}</p>
      <Gallery images={images} />
    </PageTemplate>
  );
}

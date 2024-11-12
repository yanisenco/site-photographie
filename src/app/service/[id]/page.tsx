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
    { id: "portrait-sportif" },
  ];
}
export default async function Service({ params }: ServiceParams) {
  const id = (await params).id;

  const Content = [
    {
      id: "portrait-studio",
      title: "Portrait studio",
      description:
        "Nous proposons des services de photographie en studio pour capturer des portraits uniques de votre animal, de vous-même, ou en duo avec votre compagnon à quatre pattes. Que ce soit pour capturer la personnalité d’un individu, la beauté de votre animal, ou des moments de complicité, nos séances sont conçues pour créer des images authentiques et mémorables.",
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
      ],
    },
    {
      id: "portrait-exterieur",
      title: "Portrait en extérieur",
      description:
        "Nos séances de photos portrait en extérieur offrent un cadre naturel et authentique pour des portraits uniques. Des photos individuelles, ou avec vos animaux, nous capturons chaque moment en jouant avec la lumière naturelle et le décor environnant. Parcs, plages, forêts ou sites urbains : chaque lieu ajoute un style unique à vos portraits, reflétant votre personnalité.",
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
      id: "portrait-sportif",
      title: "Portrait sportif",
      description:
        "Nos photos d’action et de sport saisissent l’énergie et la force de chaque instant, que ce soit lors d’événements sportifs, d’entraînements ou de séances personnalisées, en extérieur ou en intérieur. Nous mettons en lumière chaque mouvement avec précision, capturant la puissance et la passion des athlètes. Des sports individuels aux compétitions d’équipe, nous réalisons des images dynamiques qui reflètent la détermination et l’engagement de chaque performance.",
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
          src: "https://i.ibb.co/ZXRcTHY/face.webp",
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

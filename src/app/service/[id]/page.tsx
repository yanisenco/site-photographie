import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

interface ServiceParams {
  id: string;
}
export async function generateStaticParams() {
  return [
    { id: "portrait-studio" },
    { id: "portrait-exterieur" },
    { id: "portrait-sportif" },
  ];
}
export default async function Service({ params }: { params: ServiceParams }) {
  const { id } = await params;

  const Content = [
    {
      id: "portrait-studio",
      title: "Portrait studio",
      description:
        "Nous proposons des services de photographie en studio pour capturer des portraits uniques de votre animal, de vous-même, ou en duo avec votre compagnon à quatre pattes. Que ce soit pour capturer la personnalité d’un individu, la beauté de votre animal, ou des moments de complicité, nos séances sont conçues pour créer des images authentiques et mémorables.",
      images: [
        {
          src: "https://i.ibb.co/wrHY2ch/1.webp",
          alt: "",
        },

        {
          src: "https://i.ibb.co/4dmYwbR/5.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/vhthSLm/4.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/LSz23xP/8.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/L66bvSS/2.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/b6K1pDh/7.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/HhLp96G/3.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/X8JyP0s/6.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/kqgzCL6/12.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/vjzdKPN/13.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/bzmmgt4/10.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/b5VNvs1/9.webp",
          alt: "",
        },
        {
          src: "https://i.ibb.co/Vg4XZN1/11.webp",
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

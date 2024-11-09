import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

interface ServiceParams {
  id: string;
}

export default function Service({ params }: { params: ServiceParams }) {
  const { id } = params;

  const images = [
    {
      src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "",
    },
  ];
  const Titles = [
    {
      id: "portrait-studio",
      title: "Portrait studio",
    },
    {
      id: "portrait-exterieur",
      title: "Portrait en extérieur",
    },
    {
      id: "portrait-sportif",
      title: "Portrait sportif",
    },
  ];
  const Descriptions = [
    {
      id: "portrait-studio",
      description:
        "Nous proposons des services de photographie en studio pour capturer des portraits uniques de votre animal, de vous-même, ou en duo avec votre compagnon à quatre pattes. Que ce soit pour capturer la personnalité d’un individu, la beauté de votre animal, ou des moments de complicité, nos séances sont conçues pour créer des images authentiques et mémorables.",
    },
    {
      id: "portrait-exterieur",
      description:
        "Nos séances de photos portrait en extérieur offrent un cadre naturel et authentique pour des portraits uniques. Des photos individuelles, ou avec vos animaux, nous capturons chaque moment en jouant avec la lumière naturelle et le décor environnant. Parcs, plages, forêts ou sites urbains : chaque lieu ajoute un style unique à vos portraits, reflétant votre personnalité.",
    },
    {
      id: "portrait-sportif",
      description:
        "Nos photos d’action et de sport saisissent l’énergie et la force de chaque instant, que ce soit lors d’événements sportifs, d’entraînements ou de séances personnalisées, en extérieur ou en intérieur. Nous mettons en lumière chaque mouvement avec précision, capturant la puissance et la passion des athlètes. Des sports individuels aux compétitions d’équipe, nous réalisons des images dynamiques qui reflètent la détermination et l’engagement de chaque performance.",
    },
  ];

  const title =
    Titles.find((title) => title.id === id)?.title || "Default Title";
  const description =
    Descriptions.find((description) => description.id === id)?.description ||
    "Default Description";

  return (
    <PageTemplate>
      <div className="mt-20">
        <SectionTitle idSection="portrait-studio" title={title} />
      </div>

      <p className="mb-10">{description}</p>
      <Gallery images={images} />
    </PageTemplate>
  );
}

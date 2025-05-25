import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";
import FAQ from "@/components/Faq/Faq";
import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { fetchImages } from "@/utils/imagesService";
import { getGhostMeta } from "@/utils/metadatasService";

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
export async function generateMetadata({ params }: ServiceParams) {
  const meta = await getGhostMeta((await params).id);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical_url,
    },
  };
}

export default async function Service({ params }: ServiceParams) {
  const id = (await params).id;
  const images = await fetchImages(`focusetlumiere/${id.split("-")[1]}`);

  return (
    <PageTemplate>
      <DynamicPageContent />
      {images ? <Gallery images={images} /> : null}
      <FAQ tag={`FAQ-${id}`}/>
    </PageTemplate>
  );
}

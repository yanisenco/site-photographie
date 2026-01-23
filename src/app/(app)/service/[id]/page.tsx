import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";
import FAQ from "@/components/Faq/Faq";
import Gallery from "@/components/Gallery/Gallery";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { getPosts } from "@/lib/getPosts";
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
  const images = await fetchImages(`focusetlumiere/${id.split("-")[1]}`);
  const posts = await getPosts()
  const mappedPosts = posts.map(post => ({
    ...post,
    cover: post.cover === null ? undefined : post.cover,
  }));

  return (
    <PageTemplate>
      <DynamicPageContent content={mappedPosts} />
      {images ? <Gallery images={images} id={id}/> : null}
      <FAQ tag={`FAQ-${id}`}/>
    </PageTemplate>
  );
}

import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { getGhostMeta } from "@/utils/metadatasService";

export async function generateMetadata() {
  const meta = await getGhostMeta("a-propos");
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

export default function APropos() {

  return (
    <PageTemplate>
      <DynamicPageContent/>
    </PageTemplate>
  );
}

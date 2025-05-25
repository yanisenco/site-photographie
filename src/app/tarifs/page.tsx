import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PricingTab from "@/components/PricingTab/PricingTab";
import { getGhostMeta } from "@/utils/metadatasService";

export async function generateStaticParams() {
  return [{ slug: "tarifs" }];
}

export async function generateMetadata() {
  const meta = await getGhostMeta("tarifs");
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

export default function Pricing() {
  return (
    <PageTemplate>
      <DynamicPageContent/>      
      <PricingTab />
    </PageTemplate>
  );
}

import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PricingTab from "@/components/PricingTab/PricingTab";

export async function generateStaticParams() {
  return [{ slug: "tarifs" }];
}

export default function Pricing() {
  return (
    <PageTemplate>
      <DynamicPageContent/>      
      <PricingTab />
    </PageTemplate>
  );
}

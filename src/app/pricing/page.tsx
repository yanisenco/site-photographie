import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PricingTab from "@/components/PricingTab/PricingTab";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Pricing() {
  return (
    <PageTemplate>
      <SectionTitle idSection={"pricing"} title={"Tarifs"} />
      <p className="mb-4">
        Vous trouverez les différentes formules que nous proposons. Pour des
        demandes spécifiques n&apos;hésitez pas à nous contacter afin que nous
        puissions parler de votre projet ensemble. Ce qui est important pour
        nous est de vous offrir un service de qualité et de répondre à vos
        attentes. C&apos;est pour cela que nous vous proposons des formules
        adaptées à vos besoins et à votre budget.
      </p>
      <PricingTab />
    </PageTemplate>
  );
}

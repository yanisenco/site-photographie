import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PricingTab from "@/components/PricingTab/PricingTab";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export async function generateStaticParams() {
  return [{ slug: "pricing" }];
}

export default function Pricing() {
  return (
    <PageTemplate>
      <SectionTitle idSection={"pricing"} title={"Tarifs"} />
      <p className="mb-4">
        Vous trouverez ici notre grille tarifaire couvrant trois services
        principaux : portrait en studio à domicile, portrait en extérieur dans
        le lieu de votre choix et photographie sportive. Nous proposons
        également des séances photo sur-mesure, combinant plusieurs services.
        Nous réaliserons un devis pour ces demandes personnalisées en fonction
        de vos envies. À noter : les frais de déplacement sont à la charge du
        demandeur. Contactez-nous pour programmer votre séance photo et capturer
        vos meilleurs souvenirs !
      </p>
      <PricingTab />
    </PageTemplate>
  );
}

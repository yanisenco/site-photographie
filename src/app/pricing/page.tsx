import PageTemplate from "@/components/PageTemplate/PageTemplate";
import PricingTab from "@/components/PricingTab/PricingTab";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ slug: "pricing" }];
}

export default function Pricing() {
  return (
    <PageTemplate>
      <SectionTitle idSection={"pricing"} title={"Tarifs"} />
      <p className="mb-4">
        Vous trouverez ici notre grille tarifaire couvrant trois services
        principaux :{" "}
        <Link href={"/service/portrait-studio"}>
          portrait en studio à domicile,
        </Link>{" "}
        <Link href={"/service/portrait-exterieur"}>
          portrait en extérieur dans le lieu de votre choix
        </Link>{" "}
        <Link href={"/service/photo-sportive"}>et photographie sportive.</Link>{" "}
        Nous proposons également des séances photo sur-mesure, combinant
        plusieurs services.{" "}
        <Link href={"/#contact"}>
          Nous réaliserons un devis pour ces demandes personnalisées en fonction
          de vos envies.
        </Link>{" "}
        À noter : les frais de déplacement sont à la charge du demandeur.
        Contactez-nous pour programmer votre séance photo et capturer vos
        meilleurs souvenirs !
      </p>
      <PricingTab />
    </PageTemplate>
  );
}

import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageLink from "../components/PageLink/PageLink";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WelcomeInsert from "../components/WelcomeInsert/WelcomeInsert";
import photo1 from "@/image/masterpiece.webp";
import photo2 from "@/image/photo 1.webp";
import photo3 from "@/image/kitesurf.webp";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
// import Section from "@/components/Section/Section";
// import CommentCarrousel from "../components/CommentCarrousel/CommentCarrousel";

export default function Home() {
  return (
    <div>
      <WelcomeInsert />
      <PageTemplate>
        <main id={"homepage"}>
          <p className="mt-6">
            Bienvenue sur le site de notre duo de photographes professionnels,
            basé en Loire-Atlantique. Passionnés par l&apos;art de la
            photographie, nous proposons des services sur-mesure adaptés à vos
            besoins afin de vous proposer des clichés de vos animaux domestique,
            des portraits, ou des photos sportives. Notre expertise s&apos;étend
            dans l&apos;ensemble de la région des Pays de la Loire. Nous sommes
            disponibles les week-ends et jours fériés, pour des séances photo de
            studio à domicile ou en extérieur. Immortalisez dès maintenant un
            moment spécial, offrez une photo unique à un proche, ou révélez la
            complicité avec vos animaux. Nous mettons notre savoir-faire à votre
            service pour capturer des instants authentiques et mémorables.
            Créons ensemble des images qui vous ressemblent, dans une ambiance
            conviviale et professionnelle. Contactez-nous pour réserver votre
            séance photo !
          </p>
          <SectionTitle idSection={"services"} title={"Services"} />
          <p>
            Nous proposons trois styles de shooting différents que vous pouvez
            explorer. Aussi, nous vous proposons des shootings sur-mesure afin
            de répondre à toutes vos envies et créer des souvenirs uniques.{" "}
            <br />
            Ce que nous vous proposons :
          </p>
          <ul className="unna text-lg m-2 mb-4">
            <li className="px-2">
              &#8226; Shooting à domicile ou dans le lieu de votre choix
            </li>
            <li className="px-2">
              &#8226; Dans un cadre chaleureux et confortable pour vous et votre
              animal
            </li>
            <li className="px-2">
              &#8226; Matériel professionnel pour des images hautes définitions
            </li>
            <li className="px-2">
              &#8226; Accessoires et fonds variés pour personnaliser votre
              séance photo
            </li>
            <li className="px-2">
              &#8226; Conseils personnalisés pour capturer des moments
              inoubliables
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <PageLink
              photo={photo1}
              title={"Portrait studio"}
              color={"bg-[#1e3d59]"}
              link={"/service/portrait-studio"}
            />
            <PageLink
              photo={photo2}
              title={"Portrait extérieur"}
              color={"bg-[#ff6e40]"}
              link={"/service/portrait-exterieur"}
            />
            <PageLink
              photo={photo3}
              title={"Photo sportive"}
              color={"bg-[#ffc13b]"}
              link={"/service/photo-sportive"}
            />
          </div>
          <SectionTitle
            idSection={"a-propos-de-nous"}
            title={"À propos de nous"}
          />
          <AboutUsSection />

          {/* <Section>
            <SectionTitle idSection={"temoignages"} title={"Témoignages"} />
            <CommentCarrousel />
          </Section> */}
          <ContactBlock />
        </main>
      </PageTemplate>
    </div>
  );
}

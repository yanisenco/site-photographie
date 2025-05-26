import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageLink from "../components/PageLink/PageLink";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WelcomeInsert from "../components/WelcomeInsert/WelcomeInsert";
import photo1 from "@/images/photo-studio.webp";
import photo2 from "@/images/photo-exterieur.webp";
import photo3 from "@/images/photo-competition.webp";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import Link from "next/link";
import CommentCarrousel from "../components/CommentCarrousel/CommentCarrousel";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <WelcomeInsert />
      <Header />
      <main id={"accueil"}>
        <div className="w-11/12 sm:w-9/12 m-auto">
          <p className="mt-6">
            Situés à Saint-Nazaire, nous intervenons dans toute la
            Loire-Atlantique et la région des Pays de la Loire, notamment à La
            Baule, Guérande, Pornichet, ou encore Nantes. Nous sommes
            disponibles les week-ends et les jours fériés pour des séances photo
            en studio, à domicile ou en extérieur, dans des lieux emblématiques
            ou proches de la nature. Notre expertise inclut
            <Link
              href={"/service/portrait-studio"}
              rel="canonical"
              title="redirection-page-photo-studio"
            >
              la photographie de portrait,
            </Link>{" "}
            idéale pour capturer des moments uniques de partage. Nous sommes
            également spécialisés dans{" "}
            <Link
              href={"/service/portrait-exterieur"}
              rel="canonical"
              title="redirection-page-photo-exterieur"
            >
              les photos animalières,
            </Link>{" "}
            mettant en lumière la complicité entre vous et vos animaux de
            compagnie. Enfin, notre passion pour{" "}
            <Link
              href={"/service/photo-sportive"}
              rel="canonical"
              title="redirection-page-photos-sportives"
            >
              le sport
            </Link>{" "}
            nous permet de photographier vos exploits ou vos événements sportifs
            avec précision et créativité.Que vous souhaitiez{" "}
            <Link
              href={"/tarifs"}
              rel="canonical"
              title="redirection-page-tarifs"
            >
              offrir une photo personnalisée
            </Link>{" "}
            à un proche, immortaliser un moment spécial, ou créer des images
            authentiques qui racontent votre histoire, nous mettons notre
            savoir-faire de photographes professionnels à votre service. Dans
            une ambiance à la fois conviviale et professionnelle, nous vous
            accompagnons pour transformer chaque instant en œuvre d’art
            intemporelle. Faites appel à notre duo de photographes à
            Saint-Nazaire pour des clichés qui vous ressemblent !
            <Link
              href={"/#contact"}
              rel="canonical"
              title="redirection-section-contact"
            >
              {" "}
              Contactez-nous dès aujourd’hui pour réserver votre séance photo et
              donner vie à vos souvenirs.
            </Link>{" "}
          </p>
          <SectionTitle
            idSection={"service"}
            title={"Services sur-mesure en fonction de vos envies"}
            level={2}
          />
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
      <div className="relative overflow-hidden md:py-16">
        <svg
          className="absolute left-0 top-0 -z-10 h-[200vh] w-[200vw]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // Utilise une couleur différente selon le mode dark/light
            fill="#ffc13b"
            className="dark:fill-purple"
            d="M85.6,-142.2C107,-131,122.4,-106.2,131.6,-81.4C140.6,-56.6,143.2,-31.8,146.6,-4.6C150.2,22.8,154.6,50.6,145.4,74.6C136.2,98.6,113.4,118.8,88.6,132.8C64,146.8,38,154.8,8.6,154.6C-21,154.4,-42.2,145.8,-66.2,134.2C-90.2,122.4,-117,107.6,-131,84.6C-145,61.4,-146.4,30.8,-140.6,2.4C-134.6,-26,-121.4,-51.8,-106.2,-75C-91.2,-98.4,-74,-119,-51.4,-130.6C-28.6,-142.2,-0.4,-144.6,27.4,-144.6C55,-144.4,82.4,-141.2,85.6,-142.2Z"
            transform="translate(100 100)"
          />
        </svg>
          <SectionTitle
            idSection={"a-propos-de-nous"}
            title={"Notre Duo de Photographes : Une Passion et des Regards Complémentaires"}
            level={2}
            size="l"
          />
          <AboutUsSection />
          </div>
        </div>
        <CommentCarrousel />    
        <div className="bg-purple text-[#f5f0e1]">
          <div className="w-11/12 sm:w-9/12 m-auto">
            <SectionTitle
              idSection={"contact"}
              title={"Prenez contact avec nous"}
              level={2}
            />
            <ContactBlock />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

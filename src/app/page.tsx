import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageLink from "../components/PageLink/PageLink";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WelcomeInsert from "../components/WelcomeInsert/WelcomeInsert";
import photo1 from "@/images/photo-face-chat.webp";
import photo2 from "@/images/photo-cheval-blanc-ambiance-feerique.webp";
import photo3 from "@/images/kitesurfeur.webp";
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
          Situés à Saint-Nazaire, nous intervenons dans toute la Loire-Atlantique et la région des Pays de la Loire, notamment à La Baule, Guérande, Pornichet, ou encore Nantes. Nous sommes disponibles les week-ends et les jours fériés pour des séances photo en studio, à domicile ou en extérieur, 
          dans des lieux emblématiques ou proches de la nature. Notre expertise inclut la photographie de portrait, idéale pour capturer
          des moments uniques de partage. Nous sommes également spécialisés dans les photos animalières, mettant en lumière la 
          complicité entre vous et vos animaux de compagnie. Enfin, notre passion pour le sport nous permet de 
          photographier vos exploits ou vos événements sportifs avec précision et créativité.Que vous souhaitiez offrir une photo
          personnalisée à un proche, immortaliser un moment spécial, ou créer des images authentiques qui racontent votre histoire,
          nous mettons notre savoir-faire de photographes professionnels à votre service. Dans une ambiance à la fois conviviale 
          et professionnelle, nous vous accompagnons pour transformer chaque instant en œuvre d’art intemporelle. Faites appel à 
          notre duo de photographes à Saint-Nazaire pour des clichés qui vous ressemblent !Contactez-nous dès aujourd’hui pour 
          réserver votre séance photo et donner vie à vos souvenirs.
          </p>
          <SectionTitle idSection={"services"} title={"Services"} level={2}/>
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
            level={3}
          />
          <AboutUsSection />

          {/* <Section>
            <SectionTitle idSection={"temoignages"} title={"Témoignages"} />
            <CommentCarrousel />
          </Section> */}
          <SectionTitle
            idSection={"contact"}
            title={"Prenez contact avec nous"}
            level={6}
          />
          <ContactBlock />
        </main>
      </PageTemplate>
    </div>
  );
}

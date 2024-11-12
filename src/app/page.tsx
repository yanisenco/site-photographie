import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageLink from "../components/PageLink/PageLink";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WelcomeInsert from "../components/WelcomeInsert/WelcomeInsert";
import photo1 from "@/image/masterpiece.webp";
import photo2 from "@/image/photo 1.webp";
import photo3 from "@/image/velo.webp";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
// import Section from "@/components/Section/Section";
// import CommentCarrousel from "../components/CommentCarrousel/CommentCarrousel";

export default function Home() {
  return (
    <div>
      <WelcomeInsert />
      <PageTemplate>
        <main>
          <SectionTitle idSection={"services"} title={"Services"} />
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
              title={"Photo sportif"}
              color={"bg-[#ffc13b]"}
              link={"/service/portrait-sportif"}
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

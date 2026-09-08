import Image from "next/image";
import WelcomeInsert from "../../components/WelcomeInsert/WelcomeInsert";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Link from "next/link";
import CommentCarrousel from "../../components/CommentCarrousel/CommentCarrousel";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import InstaCloud from "@/components/InstaCloud/InstaCloud";
import PageLink from "@/components/PageLink/PageLink";
import photoStudio from "@/images/accueil/photo-studio.webp";
import photoExterieur from "@/images/accueil/photo-exterieur.webp";
import photoCompetition from "@/images/accueil/photo-sport.webp";
import photoAnimauxLarge from "@/images/accueil/notre-travail/1.webp";
import photoPortraitWork from "@/images/accueil/notre-travail/2.webp";
import photoPortraitWork2 from "@/images/accueil/notre-travail/3.webp";
import photoProWork from "@/images/accueil/notre-travail/4.webp";
import photoSportiveWork from "@/images/accueil/notre-travail/5.webp";

export default function Home() {
  return (
    <>
      <Header transparent />
      <WelcomeInsert />
      <main id="accueil">
        {/* Services teaser */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-orange" />
                <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">
                  Ce que nous proposons
                </p>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">
                Chaque instant mérite
                <br />
                <span className="text-orange">d&apos;être immortalisé</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                Situés à Saint-Nazaire, nous intervenons dans toute la
                Loire-Atlantique — La Baule, Guérande, Pornichet, Nantes —
                pour des séances en studio, à domicile ou en extérieur. Que ce
                soit pour un{" "}
                <Link
                  href="/service/animaux"
                  rel="canonical"
                  title="Photographie animalière"
                  className="underline decoration-orange/40 hover:text-orange"
                >
                  shooting animalier
                </Link>
                , un{" "}
                <Link
                  href="/service/portraits"
                  rel="canonical"
                  title="Portraits individuels et familles"
                  className="underline decoration-orange/40 hover:text-orange"
                >
                  portrait individuel ou familial
                </Link>
                , une prestation{" "}
                <Link
                  href="/service/pro-evenements"
                  rel="canonical"
                  title="Professionnels et événements"
                  className="underline decoration-orange/40 hover:text-orange"
                >
                  professionnelle
                </Link>{" "}
                ou une{" "}
                <Link
                  href="/service/sport-animalier"
                  rel="canonical"
                  title="Photographie sportive animalière"
                  className="underline decoration-orange/40 hover:text-orange"
                >
                  compétition sportive
                </Link>
                , nous adaptons chaque séance à votre histoire.
              </p>
              <Link
                href="/services"
                rel="canonical"
                title="Découvrir nos prestations et nos tarifs"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-orange text-custom-white text-sm font-medium hover:bg-[#e85a30] transition-colors"
              >
                Découvrir nos prestations et nos tarifs
              </Link>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
              <PageLink
                photo={photoExterieur}
                title="Animaux"
                link="/service/animaux"
                className="row-span-2"
              />
              <div className="row-span-2 grid grid-rows-2 gap-3 h-full">
                <PageLink photo={photoStudio} title="Portraits" link="/service/portraits" />
                <PageLink
                  photo={photoCompetition}
                  title="Sport"
                  link="/service/sport-animalier"
                />
              </div>
            </div>
          </div>
        </section>

        <AboutUsSection />

        {/* Notre travail */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-orange" />
            <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">Notre travail</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight max-w-lg">
              Des images qui
              <br />
              <span className="text-orange">parlent d&apos;elles-mêmes</span>
            </h2>
            <p className="text-foreground/50 max-w-sm leading-relaxed text-sm md:text-base">
              Animaux, portraits, événements — les séances sont une histoire
              racontée. Voici quelques-unes des images qui nous ont marqués.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 h-[520px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden bg-blue-dark group">
              <Image
                src={photoAnimauxLarge}
                alt="Portrait animalier"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue/20 group-hover:bg-blue/0 transition-colors duration-500" />
            </div>
            <div className="relative overflow-hidden bg-blue-dark group">
              <Image
                src={photoPortraitWork}
                alt="Portrait"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue/20 group-hover:bg-blue/0 transition-colors duration-500" />
            </div>
            <div className="relative overflow-hidden bg-blue-dark group">
              <Image
                src={photoPortraitWork2}
                alt="Portrait en studio"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue/20 group-hover:bg-blue/0 transition-colors duration-500" />
            </div>
            <div className="relative overflow-hidden bg-blue-dark group">
              <Image
                src={photoProWork}
                alt="Reportage professionnel"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue/20 group-hover:bg-blue/0 transition-colors duration-500" />
            </div>
            <div className="relative overflow-hidden bg-blue-dark group">
              <Image
                src={photoSportiveWork}
                alt="Photographie sportive animalière"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue/20 group-hover:bg-blue/0 transition-colors duration-500" />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/portfolio"
              rel="canonical"
              title="Voir tout le portfolio"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-foreground/20 text-foreground/70 text-sm font-medium hover:border-orange hover:text-foreground transition-colors group"
            >
              Voir tout le portfolio
            </Link>
          </div>
        </section>

        {/* Instagram
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px w-10 bg-orange" />
            <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">
              @focusetlumiere
            </p>
            <div className="h-px w-10 bg-orange" />
          </div>
          <InstaCloud />
        </section> */}

        {/* Témoignages */}
        <section className="py-4">
          <div className="max-w-7xl mx-auto mt-3 px-6 lg:px-12 text-center mb-4">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px w-10 bg-orange" />
              <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">
                avis clients
              </p>
              <div className="h-px w-10 bg-orange" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              Ils nous ont fait confiance
            </h2>
          </div>
          <CommentCarrousel />
        </section>

        {/* CTA */}
        <section className="bg-orange">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-custom-white mb-1">
                Prêt à capturer vos instants ?
              </h2>
              <p className="text-custom-white/75 text-sm">
                Réservez une séance et créons quelque chose d&apos;inoubliable
                ensemble.
              </p>
            </div>
            <Link
              href="/contact"
              rel="canonical"
              title="Nous contacter"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-custom-white text-blue font-medium hover:bg-yellow transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

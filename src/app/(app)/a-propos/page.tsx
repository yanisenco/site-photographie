import Image from "next/image";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import photoHero from "@/images/a-propos/trompette.webp";
import photoJaleo from "@/images/a-propos/jaleo.webp";
import photoGina from "@/images/a-propos/gina.webp";
import photoDuo from "@/images/a-propos/duo.webp";
import photoIana from "@/images/a-propos/iana.webp";
import photoYanis from "@/images/a-propos/yanis.webp";


export const metadata = {
  title: "À propos — Focus & Lumière, photographes à Saint-Nazaire",
  description:
    "Yanis et Iana, duo de photographes à Saint-Nazaire, spécialisés dans la photographie animalière, les portraits et les événements.",
};

const VALUES = [
  {
    number: "01",
    title: "Écoute",
    desc: "Nous commençons toujours par vous écouter. Vos attentes, vos peurs, vos envies. Une bonne séance commence bien avant l'objectif.",
  },
  {
    number: "02",
    title: "Patience",
    desc: "Avec les animaux comme avec les familles, nous laissons le moment venir. Nous n'imposons pas, nous accompagnons.",
  },
  {
    number: "03",
    title: "Authenticité",
    desc: "Pas de sourires forcés ni de poses rigides. Nous cherchons ce qui est vrai — et c'est toujours plus beau.",
  },
];

const TEAM = [
  {
    image: photoYanis,
    alt: "Photographie en studio",
    name: "Yanis",
    role: "Portrait & photographie artistique",
    bio: "Passionné par la recherche de l'image unique, Yanis travaille le portrait avec une exigence constante d'originalité — dans le cadrage, la lumière, et la retouche. Il aime le studio, maîtriser chaque paramètre pour créer une image qui lui ressemble.",
    focus: ["Portrait artistique", "Photographie de paysage", "Studio & lumière artificielle"],
  },
  {
    image: photoIana,
    alt: "Photographie animalière en extérieur",
    name: "Iana",
    role: "Photographie animalière & extérieur",
    bio: "Passionnée par les animaux depuis toujours, Iana a affiné son regard en photographiant la faune sauvage. Cette patience et cette écoute du vivant, elle les met au service des séances en extérieur.",
    focus: ["Animaux de compagnie", "Photo spontanée en extérieur", "Lumière naturelle"],
  },
];

export default function APropos() {
  return (
    <PageTemplate>
      <div className="pt-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        <div>
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">
            Notre histoire
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-none mb-6">
            À propos de nous
          </h1>
          <div className="h-px w-20 bg-orange mb-8" />
          <p className="text-foreground/65 leading-relaxed mb-5">
            Nous sommes Yanis et Iana, un couple passionné de photographie. La
            photo est entrée dans nos vies comme une passion personnelle
            avant de devenir une véritable aventure à deux. Dès notre
            rencontre, nous avons partagé cette envie de créer, d&apos;observer
            et de capturer les instants qui méritent d&apos;être conservés.
          </p>
          <p className="text-foreground/65 leading-relaxed">
            Notre amour pour les animaux a naturellement pris une place
            importante dans notre pratique, jusqu&apos;à devenir l&apos;une de
            nos grandes spécialités. C&apos;est de cette passion commune
            qu&apos;est née Focus &amp; Lumière, à Saint-Nazaire. Aujourd&apos;hui,
            nous formons un duo qui met son regard et sa sensibilité au
            service de vos animaux, de vos proches et de vos projets.
          </p>
        </div>
        <div className="relative">
          <div className="relative w-full h-[440px] bg-blue-dark">
            <Image src={photoHero} alt="Séance photo en extérieur" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border border-yellow/25 -z-10" aria-hidden />
        </div>
      </div>

      {/* Valeurs */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/[0.07]">
          {VALUES.map((v) => (
            <div key={v.number} className="bg-blue-dark text-custom-white p-8 lg:p-12">
              <p className="font-serif text-5xl text-custom-white/10 mb-5 leading-none">{v.number}</p>
              <h3 className="font-serif text-xl text-yellow mb-3">{v.title}</h3>
              <p className="text-custom-white/55 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Histoire narrative */}
      <section className="py-16">
        <div className="mb-16 text-center">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-px w-10 bg-orange" />
            <p className="text-yellow text-[10px] tracking-[0.3em] uppercase">Notre histoire</p>
            <div className="h-px w-10 bg-orange" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
            Deux regards, une seule vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative w-full h-[380px] bg-blue-dark">
            <Image src={photoJaleo} alt="Nos débuts en photographie animalière" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-orange text-[10px] tracking-[0.25em] uppercase mb-4">01</p>
            <h3 className="font-serif text-2xl lg:text-3xl mb-6 leading-tight">
              Une rencontre née d&apos;une passion commune
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              Notre histoire commence par une rencontre, mais aussi par une
              passion que nous avions déjà en commun : la photographie. Peu à
              peu, nous avons découvert que nos sensibilités, bien que
              différentes, se complétaient parfaitement.
            </p>
          </div>
        </div>

        <div className="bg-blue-dark text-custom-white py-16 -mx-6 lg:-mx-12 px-6 lg:px-12 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange text-[10px] tracking-[0.25em] uppercase mb-4">02</p>
              <h3 className="font-serif text-2xl lg:text-3xl mb-6 leading-tight">
                Leurs débuts : chacun sa voie
              </h3>
              <p className="text-custom-white/60 leading-relaxed">
                Iana a commencé par photographier les animaux sauvages, une
                pratique qui lui a appris à observer et à saisir des instants
                imprévisibles. Yanis, de son côté, s&apos;est tourné vers le
                portrait artistique et la photographie en studio, en
                travaillant la lumière et la mise en scène. Deux parcours
                différents mais complémentaires.
              </p>
            </div>
            <div className="relative w-full h-[380px] bg-blue">
              <Image src={photoGina} alt="Nos débuts en photographie de studio" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[380px] bg-blue-dark">
            <Image src={photoDuo} alt="La création de Focus et Lumière" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-orange text-[10px] tracking-[0.25em] uppercase mb-4">03</p>
            <h3 className="font-serif text-2xl lg:text-3xl mb-6 leading-tight">
              La naissance de Focus &amp; Lumière
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              Au fil de nos projets communs, l&apos;idée de faire de cette
              passion une véritable aventure professionnelle s&apos;est
              naturellement imposée. Si la photographie d&apos;animaux de
              compagnie reste au cœur de notre identité, nous proposons
              également des portraits, ainsi que des prestations pour les
              professionnels, les associations et les événements — depuis
              Saint-Nazaire, en Loire-Atlantique.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-blue-dark text-custom-white -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-3 text-center">
            Le duo
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-center mb-16 leading-tight">
            Derrière les objectifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {TEAM.map((person) => (
              <div key={person.name} className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                <div className="relative w-full h-80 bg-blue">
                  <Image src={person.image} alt={person.alt} fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-1">{person.name}</h3>
                  <p className="text-orange text-[10px] tracking-[0.2em] uppercase mb-5">{person.role}</p>
                  <p className="text-custom-white/55 text-sm leading-relaxed mb-6">{person.bio}</p>
                  <ul className="space-y-1.5">
                    {person.focus.map((f) => (
                      <li key={f} className="text-yellow text-[10px] tracking-[0.2em] uppercase">
                        — {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl mb-4">Vous souhaitez travailler avec nous ?</h2>
        <p className="text-foreground/50 mb-8 leading-relaxed">
          Écrivez-nous, nous répondons sous 24h. Aucune question n&apos;est
          trop simple — nous sommes là pour vous guider.
        </p>
        <Link
          href="/contact"
          rel="canonical"
          title="Nous contacter"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-custom-white font-medium hover:bg-[#e85a30] transition-colors"
        >
          Nous contacter
        </Link>
      </section>
    </PageTemplate>
  );
}

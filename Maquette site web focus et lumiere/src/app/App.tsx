import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MapPin, Menu, X, ArrowRight, Star, Heart, Check, Lock, Images, ChevronRight } from "lucide-react";
import logoImg from "../imports/logo_focus___lumi_re_serr_.jpg";
import heroImg from "../imports/16_9.jpg";
import masterpieceImg from "../imports/masterpiece.jpg";
import portraitImg from "../imports/209A8228-Edit.jpg";
import sportImg from "../imports/209A9275-Edit.jpg";
import patienceImg from "../imports/209A7807.jpg";

type Page = "home" | "services" | "service-animals" | "service-portraits" | "service-pro" | "service-sport" | "about" | "portfolio" | "contact" | "gallery";
type PortfolioFilter = "all" | "animals" | "portraits" | "families";

function imgUrl(id: string, w = 800, h = 600) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;
}

const IMGS = {
  hero:         imgUrl("1594592237655-9f7e51330b93", 1400, 900),
  catTuxedo:    imgUrl("1498100152307-ce63fd6c5424", 800, 1000),
  dogFluffy:    imgUrl("1629740067905-bd3f515aa739", 800, 1000),
  dogTable:     imgUrl("1724367281416-cf18867ad712", 800, 600),
  catBlack:     imgUrl("1678571867068-8fe5df8959fb", 800, 1000),
  dogBox:       imgUrl("1724367236214-e4f50691c27c", 800, 1000),
  dogSmall:     imgUrl("1648543074463-9462c82de97f", 800, 600),
  dogTricolor:  imgUrl("1596490634801-c536934af56e", 800, 600),
  family:       imgUrl("1760633549227-901e0c3cf9d3", 800, 600),
  pregnancy:    imgUrl("1779978507365-061a8c36d3af", 800, 1000),
  photoW:       imgUrl("1542992933-ce75d0187ec1", 600, 700),
  photoM:       imgUrl("1621024994278-e409544f4085", 600, 700),
};

// ─── NAV ────────────────────────────────────────────────────────────────────

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(p: Page) {
    setPage(p);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const links: { label: string; page: Page }[] = [
    { label: "Accueil", page: "home" },
    { label: "Services", page: "services" },
    { label: "À propos", page: "about" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Contact", page: "contact" },
    { label: "Mes photos", page: "gallery" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1e3d59]/96 backdrop-blur-sm border-b border-[rgba(245,240,225,0.1)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <img
            src={logoImg}
            alt="Focus & Lumière logo"
            className="w-12 h-12 object-contain"
          />
          <span
            className="text-xl leading-none text-[#f5f0e1] tracking-wide"
            style={{ fontFamily: "'Limelight', cursive" }}
          >
            Focus & Lumière
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.page === "gallery" ? (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                className={`flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase px-3 py-1.5 border transition-colors duration-200 ${
                  page === "gallery"
                    ? "border-[#ffc13b] text-[#ffc13b]"
                    : "border-[rgba(245,240,225,0.2)] text-[#f5f0e1]/55 hover:text-[#f5f0e1] hover:border-[rgba(245,240,225,0.4)]"
                }`}
              >
                <Lock className="w-3 h-3" />
                {l.label}
              </button>
            ) : (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                className={`text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                  page === l.page || (l.page === "services" && page.startsWith("service-"))
                    ? "text-[#ffc13b]"
                    : "text-[#f5f0e1]/55 hover:text-[#f5f0e1]"
                }`}
              >
                {l.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff6e40] text-[#f5f0e1] text-sm font-medium hover:bg-[#e85a30] transition-colors"
          >
            Réserver <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#f5f0e1] p-1"
            aria-label={open ? "Fermer" : "Menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#162e45] border-t border-[rgba(245,240,225,0.1)]">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`w-full text-left px-8 py-4 text-xs tracking-[0.2em] uppercase border-b border-[rgba(245,240,225,0.06)] flex items-center gap-2 ${
                page === l.page ? "text-[#ffc13b]" : "text-[#f5f0e1]/60"
              }`}
            >
              {l.page === "gallery" && <Lock className="w-3 h-3" />}
              {l.label}
            </button>
          ))}
          <div className="p-6">
            <button
              onClick={() => go("contact")}
              className="w-full py-3 bg-[#ff6e40] text-[#f5f0e1] text-sm font-medium tracking-wide"
            >
              Réserver une séance
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HOME PAGE ──────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  function go(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#1e3d59]">
        <img
          src={heroImg}
          alt="Border Collie dans un champ de fleurs orangées"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "22% 45%" }}
        />
        <div
          className="absolute inset-0 m-[0px]"
          style={{
            background:
              "linear-gradient(to right, #1e3d59 38%, rgba(30,61,89,0.75) 55%, rgba(30,61,89,0.1) 75%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-36 pt-40 w-full">
          <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-7">Photographes — Saint-nazaire & Loire-atlantique</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-none tracking-tight text-[#f5f0e1] mb-7 max-w-2xl">Deux regards,<br /><span className="italic text-[#ffc13b]">une passion</span></h1>
          <p className="text-[#f5f0e1]/65 text-lg leading-relaxed max-w-md mb-10">Nous sommes un duo de photographe passionné, spécialisé dans la photographie animalière et les portraits. En studio ou en extérieur, nous capturons avec naturel les liens qui vous unissent à vos compagnons, vos proches et les moments qui comptent.</p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => go("services")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#ff6e40] text-[#f5f0e1] font-medium hover:bg-[#e85a30] transition-colors"
            >
              Nos services <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => go("portfolio")}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(245,240,225,0.28)] text-[#f5f0e1]/75 hover:border-[#ffc13b] hover:text-[#ffc13b] transition-colors"
            >
              Voir le portfolio
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="border-t border-[rgba(245,240,225,0.12)] grid grid-cols-3 divide-x divide-[rgba(245,240,225,0.12)]">
              {[
                { n: "500+", label: "Animaux photographiés" },
                { n: "8 ans", label: "D'expérience" },
                { n: "98%", label: "Clients satisfaits" },
              ].map((s) => (
                null
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-[#ff6e40]" />
              <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase">Ce que nous proposons</p>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#f5f0e1] leading-tight mb-6">
              Chaque instant mérite
              <br />
              <span className="text-[#ff6e40]">d'être immortalisé</span>
            </h2>
            <p className="text-[#f5f0e1]/55 leading-relaxed mb-6">Animaux de compagnie, portraits de famille, reportages professionnels, compétitions sportives - nous adaptons chaque séance à votre histoire et à vos envies avec la même exigence. Le but est de créer des images qui racontent une vérité, une émotion, un instant.</p>
            <p className="text-[#f5f0e1]/40 leading-relaxed mb-10 text-sm">
              Basés à Saint-Nazaire, nous intervenons en Loire-Atlantique et ses alentours. Chaque prestation est préparée en amont pour s'adapter à vos besoins et à votre environnement.
            </p>
            <button
              onClick={() => go("services")}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#ff6e40] text-[#f5f0e1] text-sm font-medium hover:bg-[#e85a30] transition-colors"
            >
              Découvrir nos prestations <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden bg-[#1a3450] aspect-[3/4]">
              <img src={masterpieceImg} alt="Animaux de compagnie" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1e3d59]/80 to-transparent p-4">
                <p className="text-[#f5f0e1] text-xs tracking-[0.15em] uppercase">Animaux</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative overflow-hidden bg-[#1a3450]">
                <img src={portraitImg} alt="Portrait mère et enfant" className="w-full h-full object-cover object-center" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1e3d59]/80 to-transparent p-3">
                  <p className="text-[#f5f0e1] text-xs tracking-[0.15em] uppercase">Portraits</p>
                </div>
              </div>
              <div className="relative overflow-hidden bg-[#1a3450]">
                <img src={sportImg} alt="Sport animalier équestre" className="w-full h-full object-cover object-center" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1e3d59]/80 to-transparent p-3">
                  <p className="text-[#f5f0e1] text-xs tracking-[0.15em] uppercase">Sport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#162e45] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div
              className="absolute -top-5 -left-5 w-3/5 h-3/5 border border-[rgba(245,240,225,0.07)]"
              aria-hidden
            />
            <img
              src={patienceImg}
              alt="Séance photo chien"
              className="w-full h-[420px] object-cover relative z-10"
            />
            <div
              className="absolute -bottom-5 -right-5 w-3/5 h-3/5 border border-[rgba(255,110,64,0.18)]"
              aria-hidden
            />
          </div>
          <div>
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-5">
              Notre approche
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#f5f0e1] mb-6 leading-tight">
              La patience est notre
              <br />
              <span className="italic text-[#ff6e40]">premier objectif</span>
            </h2>
            <p className="text-[#f5f0e1]/65 leading-relaxed mb-5">Chaque animal a son caractère, chaque famille ses histoires,            ses expressions et sa manière d'être. Nous prenons le temps de vous connaître, de mettre votre compagnon à l'aise, pour des images qui vous ressemblent vraiment.</p>
            <p className="text-[#f5f0e1]/65 leading-relaxed mb-10">En duo,            nous portons <span className="">deux regards complémentaires sur chaque séance.</span> Pendant que l'un peut se concentrer sur le sujet, son attitude ou ses expressions, l'autre peut observer la scène dans son ensemble, anticiper un mouvement ou saisir un instant différent. Cette double perspective nous permet de multiplier les possibilités et de raconter votre histoire sous plusieurs angles.</p>
            <button
              onClick={() => go("about")}
              className="inline-flex items-center gap-2 text-[#ffc13b] text-sm font-medium hover:text-[#ff6e40] transition-colors group"
            >
              En savoir plus sur nous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-[#ff6e40]" />
          <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase">Notre travail</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#f5f0e1] leading-tight max-w-lg">
            Des images qui<br />
            <span className="text-[#ff6e40]">parlent d'elles-mêmes</span>
          </h2>
          <p className="text-[#f5f0e1]/50 max-w-sm leading-relaxed text-sm md:text-base">Animaux, portraits, événements — les séances sont une histoire racontée. Voici quelques-unes des images qui nous ont marqués.</p>
        </div>

        {/* Mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 h-[520px]">
          <div className="col-span-2 row-span-2 overflow-hidden bg-[#1a3450] relative group">
            <img src={IMGS.dogFluffy} alt="Portrait chien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1e3d59]/20 group-hover:bg-[#1e3d59]/0 transition-colors duration-500" />
          </div>
          <div className="overflow-hidden bg-[#1a3450] relative group">
            <img src={IMGS.catTuxedo} alt="Chat tuxedo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1e3d59]/20 group-hover:bg-[#1e3d59]/0 transition-colors duration-500" />
          </div>
          <div className="overflow-hidden bg-[#1a3450] relative group">
            <img src={IMGS.photoW} alt="Portrait femme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1e3d59]/20 group-hover:bg-[#1e3d59]/0 transition-colors duration-500" />
          </div>
          <div className="overflow-hidden bg-[#1a3450] relative group">
            <img src={IMGS.dogBox} alt="Chien en action" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1e3d59]/20 group-hover:bg-[#1e3d59]/0 transition-colors duration-500" />
          </div>
          <div className="overflow-hidden bg-[#1a3450] relative group">
            <img src={IMGS.family} alt="Portrait famille" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1e3d59]/20 group-hover:bg-[#1e3d59]/0 transition-colors duration-500" />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => go("portfolio")}
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-[rgba(245,240,225,0.2)] text-[#f5f0e1]/70 text-sm font-medium hover:border-[#ff6e40] hover:text-[#f5f0e1] transition-colors group"
          >
            Voir tout le portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#ffc13b] text-[#ffc13b]" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl lg:text-3xl text-[#f5f0e1] italic leading-relaxed mb-8">
            "Ils ont su capturer la personnalité folle de notre labrador — et la
            douceur de nos enfants — dans une série de photos qui nous émeut
            encore aujourd'hui."
          </blockquote>
          <p className="text-[#f5f0e1]/40 text-[11px] tracking-[0.25em] uppercase">
            Sophie & Thomas — Paris 12e
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#ff6e40]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-[#f5f0e1] mb-1">
              Prêt à capturer vos instants ?
            </h2>
            <p className="text-[#f5f0e1]/70 text-sm">
              Réservez une séance et créons quelque chose d'inoubliable ensemble.
            </p>
          </div>
          <button
            onClick={() => go("contact")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#f5f0e1] text-[#1e3d59] font-medium hover:bg-[#ffc13b] transition-colors"
          >
            Nous contacter <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

// ─── SERVICES PAGE ──────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "01",
    tag: "Spécialité",
    title: "Animaux de compagnie",
    img: IMGS.dogFluffy,
    imgAlt: "Portrait de chien en studio",
    desc: "Chaque animal a une personnalité qui lui est propre. Nos séances sont pensées pour mettre votre compagnon à l'aise et révéler ce qui le rend unique — en studio, à domicile ou en pleine nature.",
    includes: [
      "Préparation et mise en confiance de l'animal",
      "Photos retouchées haute résolution",
      "Galerie privée en ligne partageable",
      "Conseils de mise en scène inclus",
    ],
    steps: [
      { n: "01", title: "Échange préalable", desc: "On discute ensemble du caractère de votre animal, du lieu idéal et du style souhaité pour préparer la séance au mieux." },
      { n: "02", title: "Mise en confiance", desc: "Arrivés sur place, on prend le temps de laisser votre compagnon explorer et s'habituer à nous avant de sortir l'appareil." },
      { n: "03", title: "La séance", desc: "On shoot au rythme de votre animal — pauses, jeux, friandises. Aucune pose forcée : on capture ce qui est vrai." },
      { n: "04", title: "Pré-sélection en ligne", desc: "Sous 48h, une pré-sélection de vos meilleures photos est mise en ligne dans la rubrique « Mes photos ». Vous choisissez celles que vous souhaitez garder." },
      { n: "05", title: "Livraison retouchée HD", desc: "Les photos choisies sont retouchées individuellement (lumière, couleurs, détails) et livrées en haute définition, prêtes pour l'impression ou les réseaux." },
    ],
    subcategories: [
      {
        title: "Séance compagnon",
        desc: "Une séance photo dédiée à votre animal, en studio à domicile ou en extérieur.",
        plans: [
          { name: "Essentiel", duration: "1h", photos: "15 photos", price: "99 €" },
          { name: "Signature", duration: "2h", photos: "30 photos", price: "149 €", popular: true },
          { name: "Premium", duration: "3h", photos: "50 photos + album", price: "249 €" },
        ],
      },
      {
        title: "Séance duo",
        desc: "Votre animal et vous, pour immortaliser votre complicité.",
        plans: [
          { name: "Essentiel", duration: "1h", photos: "20 photos", price: "119 €" },
          { name: "Signature", duration: "2h", photos: "35 photos", price: "179 €", popular: true },
          { name: "Premium", duration: "3h", photos: "55 photos + album", price: "279 €" },
        ],
      },
      {
        title: "Séance famille",
        desc: "Toute la famille réunie, avec ou sans vos animaux.",
        plans: [
          { name: "Essentiel", duration: "1h30", photos: "25 photos", price: "149 €" },
          { name: "Signature", duration: "2h30", photos: "45 photos", price: "229 €", popular: true },
          { name: "Premium", duration: "3h30", photos: "65 photos + album", price: "349 €" },
        ],
      },
    ],
    cardNote: "Frais de déplacement non inclus dans le tarif.",
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Personne ou animal supplémentaire", detail: "+15 € par personne ou animal en plus" },
      { label: "Photo supplémentaire", detail: "+20 € par photo au-delà du forfait" },
    ],
  },
  {
    id: "02",
    tag: "Portrait",
    title: "Portraits individuels & familles",
    img: IMGS.family,
    imgAlt: "Portrait de famille au coucher de soleil",
    desc: "Du portrait solo à la grande famille réunie, nous adaptons la séance à votre histoire. Lumière naturelle, ambiance décontractée, poses guidées avec douceur — pour des images qui vous ressemblent vraiment.",
    includes: [
      "Consultation style & intention avant la séance",
      "Session en studio, à domicile ou en extérieur",
      "Direction naturelle des poses",
      "Photos retouchées haute résolution",
      "Galerie privée partageable",
      "Option tirages encadrés disponible",
    ],
    steps: [
      { n: "01", title: "Consultation", desc: "On échange sur vos envies : ambiance, tenues, lieu, moments à immortaliser. C'est aussi l'occasion de répondre à toutes vos questions." },
      { n: "02", title: "La séance", desc: "Dans une ambiance détendue, on guide les poses avec naturel. Pas de mise en scène rigide — on cherche avant tout l'authenticité." },
      { n: "03", title: "Pré-sélection en ligne", desc: "Sous 48h, une pré-sélection de vos meilleures photos est disponible dans la rubrique « Mes photos ». Vous choisissez librement celles que vous souhaitez conserver." },
      { n: "04", title: "Retouche sur mesure", desc: "Chaque photo choisie est retouchée individuellement — lumière, couleurs, grain — pour un rendu soigné et cohérent." },
      { n: "05", title: "Livraison HD", desc: "Vos photos finales sont livrées en haute définition via votre galerie privée, téléchargeables à tout moment. Option tirages disponible sur demande." },
    ],
    subcategories: [
      {
        title: "Portrait individuel",
        desc: "Portrait en studio, à domicile ou en extérieur — un moment rien que pour vous.",
        plans: [
          { name: "Essentiel", duration: "45 min", photos: "10 photos", price: "79 €" },
          { name: "Signature", duration: "1h30", photos: "25 photos", price: "129 €", popular: true },
          { name: "Premium", duration: "2h30", photos: "40 photos + 5 tirages", price: "199 €" },
        ],
      },
      {
        title: "Portrait en famille",
        desc: "Famille, couple, grossesse, famille avec animaux — toutes les compositions sont les bienvenues.",
        plans: [
          { name: "Essentiel", duration: "1h", photos: "20 photos", price: "149 €" },
          { name: "Signature", duration: "2h", photos: "40 photos + galerie", price: "249 €", popular: true },
          { name: "Premium", duration: "3h", photos: "65 photos + album", price: "369 €" },
        ],
      },
    ],
    cardNote: "Frais de déplacement non inclus dans le tarif.",
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Photo supplémentaire", detail: "+20 € par photo au-delà du forfait" },
    ],
  },
  {
    id: "03",
    tag: "Pro & Événement",
    title: "Professionnels & Événements",
    img: IMGS.dogTricolor,
    imgAlt: "Reportage professionnel et événement",
    desc: "Que vous soyez une entreprise souhaitant valoriser votre image ou un organisateur d'événement, nous intervenons avec discrétion et professionnalisme pour documenter vos moments avec naturel. Mariages non couverts.",
    includes: [
      "Brief préalable pour cadrer vos besoins",
      "Reportage discret et naturel",
      "Photos retouchées HD livrées en numérique",
      "Déplacement offert dans Saint-Nazaire",
      "Remise de la galerie sous 7 jours",
    ],
    steps: [
      { n: "01", title: "Brief préalable", desc: "On échange sur vos objectifs, le programme de l'événement ou les besoins de votre entreprise pour préparer une intervention sur mesure." },
      { n: "02", title: "Présence sur place", desc: "On intervient discrètement, sans perturber le déroulé. Pour les entreprises, cela signifie s'intégrer dans vos locaux ou en plein cœur de votre activité — shooting des équipes en situation, mise en valeur des espaces de travail, capture des gestes métier. Notre approche documentaire privilégie les moments naturels et authentiques plutôt que les poses figées." },
      { n: "03", title: "Sélection des photos", desc: "En Formule Reportage, toutes les images réussies sont conservées — pas de tri imposé, vous repartez avec l'intégralité du reportage. En Formule Shooting, les prises de vue sont préparées et personnalisées en amont, puis vous sélectionnez vous-même vos photos préférées parmi les images réalisées." },
      { n: "04", title: "Retouche", desc: "Chaque photo retenue est retouchée individuellement : exposition, couleurs, netteté, cohérence de l'ensemble. En Formule Shooting, seules les photos que vous avez choisies sont retouchées, en haute définition." },
      { n: "05", title: "Livraison sous 7 jours", desc: "Votre galerie complète est mise en ligne en haute résolution dans les 7 jours suivant l'événement, prête pour vos usages print ou web." },
    ],
    subcategories: [
      {
        title: "Pour l'entreprise",
        desc: "Valorisez votre image professionnelle avec des visuels authentiques et soignés.",
        items: [
          "Photos de locaux",
          "Photos d'équipe",
          "Portraits professionnels",
          "Photos de produits & prestations",
          "Photos pour réseaux sociaux & site internet",
          "Mise en valeur d'un commerce ou d'un savoir-faire",
        ],
      },
      {
        title: "Associations & Événements privés",
        desc: "Captez l'ambiance et les émotions de vos moments forts, grandes ou petites occasions.",
        items: [
          "Spectacles",
          "Compétitions",
          "Événements associatifs",
          "Anniversaires",
          "Galas & soirées",
          "Événements familiaux",
        ],
      },
    ],
    pricingTables: [
      {
        title: "Formule Reportage",
        desc: "Galerie complète de toutes les photos réussies, retouchées et livrées en HD au format numérique.",
        rows: [
          { duration: "1h", photos: null, price: "150 €" },
          { duration: "2h", photos: null, price: "270 €" },
          { duration: "3h", photos: null, price: "360 €" },
          { duration: "4h", photos: null, price: "450 €" },
          { duration: "6h", photos: null, price: "600 €" },
        ],
        note: "Frais de déplacement non inclus · Déplacement offert dans Saint-Nazaire, sinon 0,40 cts/km supplémentaire",
      },
      {
        title: "Formule Shooting",
        desc: "Shooting préparé et personnalisé. Sélectionnez vos photos préférées parmi les images réalisées, retouchées et livrées en HD.",
        rows: [
          { duration: "45 min", photos: "3 photos", price: "70 €" },
          { duration: "1h", photos: "5 photos", price: "100 €" },
          { duration: "1h30", photos: "10 photos", price: "180 €" },
          { duration: "2h", photos: "15 photos", price: "280 €" },
          { duration: "2h30", photos: "20 photos", price: "380 €" },
        ],
        note: "Frais de déplacement non inclus · Déplacement offert dans Saint-Nazaire, sinon 0,40 cts/km · +20 € la photo supplémentaire",
      },
    ],
    options: [
      { label: "Déplacement", detail: "Offert dans Saint-Nazaire · 0,40 cts/km au-delà" },
      { label: "Photo supplémentaire (Formule Shooting)", detail: "+20 € par photo au-delà du nombre inclus dans la formule" },
    ],
  },
  {
    id: "04",
    tag: "Sport animalier",
    title: "Photographie sportive animalière",
    img: IMGS.dogSmall,
    imgAlt: "Chien en action lors d'une compétition",
    desc: "Ce service s'adresse aux responsables de centres équestres et de clubs canins. Nous venons sur place le jour d'une compétition ou d'un événement — agility, flyball, canicross, dressage, jumping — et photographions l'ensemble des participants. Les photos sont ensuite proposées à la vente en ligne via une galerie privée sécurisée, accessible par code. En contrepartie de l'accueil sur votre site, nous offrons un lot de photos à la structure.",
    includes: [
      "Présence complète sur l'événement (journée entière)",
      "Tous les participants photographiés individuellement",
      "Photos d'action nettes, retouchées HD",
      "Galerie privée en ligne accessible par code sous 5 jours",
      "Vente directe aux participants sans intermédiaire",
      "Lot de photos haute résolution offert à la structure",
    ],
    steps: [
      { n: "01", title: "Prise de contact", desc: "On définit ensemble la date, le lieu, le programme de l'événement et le nombre attendu de participants pour organiser notre intervention." },
      { n: "02", title: "Présence le jour J", desc: "On arrive en avance pour s'installer et shooter chaque participant en action tout au long de l'événement — aucun passage ne passe inaperçu." },
      { n: "03", title: "Mise en ligne sous 5 jours", desc: "Les photos sont sélectionnées, retouchées et déposées dans des galeries privées individuelles, accessibles par code unique." },
      { n: "04", title: "Vente & remise à la structure", desc: "Les participants achètent leurs photos directement en ligne. La structure reçoit son lot de photos HD offertes en guise de remerciement." },
    ],
    plans: [],
    pricingTables: [
      {
        title: "Tarif photos — Participants",
        desc: "Les photos sont disponibles à l'achat en ligne dès la mise en ligne de la galerie privée, accessible par code personnel.",
        colLabels: ["Quantité achetée", "Photos offertes", "Prix total"],
        rows: [
          { duration: "1 photo", photos: "—", price: "15 €" },
          { duration: "2 photos", photos: "1 offerte", price: "30 €" },
          { duration: "4 photos", photos: "2 offertes", price: "60 €" },
          { duration: "6 photos", photos: "3 offertes", price: "90 €" },
          { duration: "Quantité libre — achetez autant que vous voulez", photos: "cumulable à l'infini", price: "15 € / unité" },
        ],
        note: "Pour chaque tranche de 2 photos achetées, 1 photo supplémentaire est offerte · Téléchargement HD inclus",
      },
      {
        title: "Lot offert — Structure",
        desc: "En contrepartie de l'accueil sur votre site, la structure reçoit gratuitement un lot de photos représentatives de l'événement, sans aucun frais.",
        colLabels: ["Ce qui est inclus", null, ""],
        rows: [
          { duration: "Photos d'ambiance générale", photos: null, price: "Offert" },
          { duration: "Portraits de quelques participants en action", photos: null, price: "Offert" },
          { duration: "Photos du décor et du lieu", photos: null, price: "Offert" },
          { duration: "Fichiers haute résolution libres d'utilisation", photos: null, price: "Offert" },
        ],
        note: "Lot remis après l'événement · Fichiers HD utilisables librement pour vos communications",
      },
    ],
  },
];

// ─── SERVICES OVERVIEW ──────────────────────────────────────────────────────

const SERVICE_CARDS: { page: Page; id: string; tag: string; title: string; img: string; imgAlt: string; shortDesc: string }[] = [
  {
    page: "service-animals",
    id: "01",
    tag: "Spécialité",
    title: "Animaux de compagnie",
    img: IMGS.dogFluffy,
    imgAlt: "Portrait de chien",
    shortDesc: "Séances dédiées à votre animal : compagnon seul, duo avec vous, ou toute la famille réunie.",
  },
  {
    page: "service-portraits",
    id: "02",
    tag: "Portrait",
    title: "Portraits individuels & familles",
    img: IMGS.family,
    imgAlt: "Portrait de famille",
    shortDesc: "Du portrait solo à la grande famille recomposée, des images qui vous ressemblent.",
  },
  {
    page: "service-pro",
    id: "03",
    tag: "Pro & Événement",
    title: "Professionnels & Événements",
    img: IMGS.dogTricolor,
    imgAlt: "Événement professionnel",
    shortDesc: "Portraits corporate, photos d'équipe, séminaires et célébrations privées.",
  },
  {
    page: "service-sport",
    id: "04",
    tag: "Sport animalier",
    title: "Photographie sportive animalière",
    img: IMGS.dogSmall,
    imgAlt: "Chien en compétition",
    shortDesc: "Agility, flyball, canicross — l'animal en plein effort, chaque performance immortalisée.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Comment se déroule une séance photo ?",
    a: "Chaque séance commence par un échange préalable pour cerner vos attentes, votre environnement et le caractère de votre animal ou les besoins de votre événement. Le jour J, nous prenons le temps de mettre tout le monde à l'aise avant de commencer à shooter. Pas de mise en scène forcée — nous privilégions les moments naturels.",
  },
  {
    q: "Où se déroulent les séances ?",
    a: "Nous intervenons à votre domicile, en extérieur (parcs, forêts, plages) ou dans votre structure. Nous sommes basés à Saint-Nazaire et couvrons la Loire-Atlantique et ses alentours. Pour les déplacements hors de Saint-Nazaire, des frais kilométriques peuvent s'appliquer (0,40 cts/km).",
  },
  {
    q: "Combien de temps après la séance recevons-nous les photos ?",
    a: "Les photos retouchées sont livrées sous 5 à 7 jours ouvrés après la séance, via une galerie en ligne privée et sécurisée. Vous pouvez y télécharger vos fichiers en haute résolution, prêts pour l'impression ou les réseaux sociaux.",
  },
  {
    q: "Les animaux nerveux ou difficiles sont-ils acceptés ?",
    a: "Absolument. Nous sommes habitués à travailler avec des animaux de tous tempéraments. Nous adaptons le rythme de la séance à votre compagnon — pauses, friandises, jeu — pour qu'il soit le plus détendu possible. La patience fait partie de notre méthode.",
  },
  {
    q: "Peut-on demander des retouches supplémentaires ?",
    a: "Les photos livrées sont déjà sélectionnées et retouchées (exposition, contraste, colorimétrie). Si vous souhaitez des ajustements spécifiques sur certaines images, cela est possible sur demande. Nous en discutons au cas par cas selon la nature des modifications.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons les virements bancaires, les chèques et les espèces. Un acompte de 30 % est demandé à la réservation pour confirmer la séance. Le solde est réglé le jour même ou à réception de la galerie.",
  },
  {
    q: "Comment réserver une séance ?",
    a: "Remplissez le formulaire de contact en précisant le type de prestation souhaité et vos disponibilités. Nous vous recontactons sous 48h pour convenir d'une date et d'un lieu. La réservation est confirmée à réception de l'acompte.",
  },
];

function ServicesPage({ setPage }: { setPage: (p: Page) => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function go(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="pt-40 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-4">Nos prestations</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#f5f0e1] leading-none mb-6">
          Services & Tarifs
        </h1>
        <div className="h-px w-20 bg-[#ff6e40] mb-6" />
        <p className="text-[#f5f0e1]/55 max-w-xl leading-relaxed">Choisissez la rubrique qui vous correspond, pour découvrir nos formules détaillées et nos tarifs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICE_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => go(card.page)}
              className="group relative overflow-hidden bg-[#162e45] text-left h-[420px] cursor-pointer focus:outline-none"
            >
              <img
                src={card.img}
                alt={card.imgAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #1e3d59 38%, rgba(30,61,89,0.15) 100%)" }}
              />
              <div className="absolute top-5 left-5">
                <span className="px-2.5 py-1 bg-[#63588f] text-[#f5f0e1] text-[10px] tracking-[0.2em] uppercase">
                  {card.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-[#f5f0e1]/40 text-[10px] tracking-[0.25em] uppercase mb-2 block">
                  {card.id}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl text-[#f5f0e1] mb-3 leading-tight">
                  {card.title}
                </h2>
                <p className="text-[#f5f0e1]/60 text-sm mb-5 leading-relaxed">{card.shortDesc}</p>
                <span className="inline-flex items-center gap-2 text-[#ffc13b] text-sm font-medium group-hover:gap-3 transition-all">
                  Voir les formules & tarifs <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#ff6e40]" />
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase">Questions fréquentes</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#f5f0e1] leading-tight lg:col-span-1">
              Vous avez des<br />questions ?
            </h2>
            <p className="text-[#f5f0e1]/45 leading-relaxed text-sm lg:col-span-2 lg:pt-2">
              Retrouvez les réponses aux questions les plus courantes. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter directement.
            </p>
          </div>

          <div className="divide-y divide-[rgba(245,240,225,0.07)]">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className={`text-sm font-medium transition-colors duration-200 ${openIdx === i ? "text-[#ffc13b]" : "text-[#f5f0e1]/80 group-hover:text-[#f5f0e1]"}`}>
                    {item.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-200 ${openIdx === i ? "border-[#ffc13b] text-[#ffc13b]" : "border-[rgba(245,240,225,0.2)] text-[#f5f0e1]/40 group-hover:border-[rgba(245,240,225,0.4)]"}`}>
                    <span className="text-base leading-none">{openIdx === i ? "−" : "+"}</span>
                  </span>
                </button>
                {openIdx === i && (
                  <p className="text-[#f5f0e1]/55 text-sm leading-relaxed pb-6 max-w-3xl">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(245,240,225,0.07)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#f5f0e1]/40 text-sm">Une autre question ? Nous sommes disponibles.</p>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 text-[#ff6e40] text-sm font-medium hover:text-[#ffc13b] transition-colors group"
            >
              Nous contacter <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── SERVICE DETAIL PAGE ─────────────────────────────────────────────────────

function ServiceDetailPage({
  svc,
  setPage,
}: {
  svc: typeof SERVICES[number];
  setPage: (p: Page) => void;
}) {
  function go(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 max-w-7xl mx-auto px-6 lg:px-12">
        <button
          onClick={() => go("services")}
          className="flex items-center gap-2 text-[#f5f0e1]/40 text-[10px] tracking-[0.2em] uppercase hover:text-[#ffc13b] transition-colors mb-10"
        >
          ← Tous les services
        </button>
        <span className="inline-block px-2.5 py-1 bg-[#63588f] text-[#f5f0e1] text-[10px] tracking-[0.2em] uppercase mb-5">
          Vos compagnons
        </span>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#f5f0e1] leading-none mb-6">
          {svc.title}
        </h1>
        <div className="h-px w-20 bg-[#ff6e40]" />
      </div>

      {"subcategories" in svc ? (
        /* ── Sous-catégories (Animaux de compagnie) ── */
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              <img
                src={svc.img}
                alt={svc.imgAlt}
                className="w-full h-[420px] object-cover bg-[#1a3450]"
              />
              <div>
                <p className="text-[#f5f0e1]/60 leading-relaxed mb-8">{svc.desc}</p>
                <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-3">
                  Inclus dans chaque formule
                </p>
                <ul className="space-y-2.5">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#f5f0e1]/60 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#ff6e40] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-px bg-[rgba(245,240,225,0.08)] mb-12" />
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-8 text-center">
              {"pricingTables" in svc ? "Nos domaines d'intervention" : "Choisissez votre séance"}
            </p>

            <div className={`grid grid-cols-1 gap-6 ${svc.subcategories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {svc.subcategories.map((sub) => (
                <div
                  key={sub.title}
                  className="bg-[#162e45] border border-[rgba(245,240,225,0.08)] p-6 flex flex-col"
                >
                  <h3 className="font-serif text-xl text-[#ffc13b] mb-2">{sub.title}</h3>
                  <p className="text-[#f5f0e1]/55 text-sm leading-relaxed mb-5 pb-5 border-b border-[rgba(245,240,225,0.08)]">
                    {sub.desc}
                  </p>
                  {"items" in sub ? (
                    <ul className="space-y-2 flex-grow">
                      {(sub as any).items.map((item: string) => (
                        <li key={item} className="flex items-start gap-2.5 text-[#f5f0e1]/70 text-sm">
                          <span className="text-[#ff6e40] mt-0.5 flex-shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-[#ffc13b] text-[9px] tracking-[0.2em] uppercase mb-3">
                        Formules & tarifs
                      </p>
                      <div className="space-y-2 flex-grow">
                        {(sub as any).plans.map((plan: any) => (
                          <div
                            key={plan.name}
                            className={`flex items-center justify-between px-3 py-2.5 border ${
                              plan.popular
                                ? "border-[#ff6e40] bg-[rgba(255,110,64,0.06)]"
                                : "border-[rgba(245,240,225,0.08)]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#f5f0e1] text-sm font-medium">{plan.name}</span>
                                {plan.popular && (
                                  <span className="text-[#ff6e40] text-[8px] tracking-widest uppercase">★</span>
                                )}
                              </div>
                              <p className="text-[#f5f0e1]/40 text-xs">{plan.duration} · {plan.photos}</p>
                            </div>
                            <span className="font-serif text-[#ffc13b] text-lg flex-shrink-0">{plan.price}</span>
                          </div>
                        ))}
                      </div>
                      {"cardNote" in svc && (
                        <p className="mt-4 pt-4 border-t border-[rgba(245,240,225,0.06)] text-[#f5f0e1]/30 text-[10px] leading-relaxed">
                          {(svc as any).cardNote}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {"pricingTables" in svc && (
              <div className="mt-16">
                <div className="h-px bg-[rgba(245,240,225,0.08)] mb-12" />
                <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-10 text-center">
                  Grille tarifaire
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {(svc as any).pricingTables.map((table: any) => (
                    <div key={table.title} className="bg-[#162e45] border border-[rgba(245,240,225,0.08)] overflow-hidden">
                      <div className="px-6 pt-6 pb-4 border-b border-[rgba(245,240,225,0.08)]">
                        <h3 className="font-serif text-xl text-[#ffc13b] mb-1">{table.title}</h3>
                        <p className="text-[#f5f0e1]/50 text-sm leading-relaxed">{table.desc}</p>
                      </div>
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[rgba(245,240,225,0.06)]">
                            <th className="text-left px-6 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[0] ?? "Durée"}</th>
                            {table.rows[0].photos !== null && (
                              <th className="text-left px-4 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[1] ?? "Photos"}</th>
                            )}
                            <th className="text-right px-6 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[2] ?? "Tarif"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row: any, i: number) => (
                            <tr
                              key={i}
                              className="border-b border-[rgba(245,240,225,0.05)] last:border-0 hover:bg-[rgba(245,240,225,0.02)] transition-colors"
                            >
                              <td className="px-6 py-3 text-[#f5f0e1]/80 text-sm">{row.duration}</td>
                              {row.photos !== null && (
                                <td className="px-4 py-3 text-[#f5f0e1]/55 text-sm">{row.photos}</td>
                              )}
                              <td className="px-6 py-3 text-right font-serif text-[#ffc13b]">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="px-6 py-4 text-[#f5f0e1]/35 text-xs leading-relaxed border-t border-[rgba(245,240,225,0.06)]">
                        {table.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {"options" in svc && (
              <div className="mt-10">
                <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-4">Options & précisions</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(svc as any).options.map((opt: any) => (
                    <div key={opt.label} className="border border-[rgba(245,240,225,0.08)] px-5 py-4">
                      <p className="text-[#f5f0e1]/50 text-[9px] tracking-[0.18em] uppercase mb-1.5">{opt.label}</p>
                      <p className="text-[#f5f0e1]/75 text-sm leading-relaxed">{opt.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        /* ── Layout standard ── */
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <img
                src={svc.img}
                alt={svc.imgAlt}
                className="w-full h-[480px] object-cover bg-[#1a3450]"
              />
              <div>
                <p className="text-[#f5f0e1]/60 leading-relaxed mb-8">{svc.desc}</p>
                <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-3">
                  Inclus dans chaque formule
                </p>
                <ul className="space-y-2.5 mb-10">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#f5f0e1]/60 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#ff6e40] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {svc.plans.length > 0 && (
                  <>
                    <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-4">
                      Formules & tarifs
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {svc.plans.map((plan) => (
                        <div
                          key={plan.name}
                          className={`p-4 border ${
                            plan.popular
                              ? "border-[#ff6e40] bg-[rgba(255,110,64,0.06)]"
                              : "border-[rgba(245,240,225,0.1)]"
                          }`}
                        >
                          {plan.popular && (
                            <p className="text-[#ff6e40] text-[9px] tracking-[0.2em] uppercase mb-2">
                              Populaire
                            </p>
                          )}
                          <p className="font-serif text-[#f5f0e1] font-medium mb-1">{plan.name}</p>
                          <p className="text-[#f5f0e1]/45 text-xs mb-0.5">{plan.duration}</p>
                          <p className="text-[#f5f0e1]/45 text-xs mb-3">{plan.photos}</p>
                          <p className="font-serif text-[#ffc13b] text-xl">{plan.price}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {"pricingTables" in svc && (
              <div className="mt-16">
                <div className="h-px bg-[rgba(245,240,225,0.08)] mb-12" />
                <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-10 text-center">
                  Grille tarifaire
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {(svc as any).pricingTables.map((table: any) => (
                    <div key={table.title} className="bg-[#162e45] border border-[rgba(245,240,225,0.08)] overflow-hidden">
                      <div className="px-6 pt-6 pb-4 border-b border-[rgba(245,240,225,0.08)]">
                        <h3 className="font-serif text-xl text-[#ffc13b] mb-1">{table.title}</h3>
                        <p className="text-[#f5f0e1]/50 text-sm leading-relaxed">{table.desc}</p>
                      </div>
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[rgba(245,240,225,0.06)]">
                            <th className="text-left px-6 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[0] ?? "Durée"}</th>
                            {table.rows[0].photos !== null && (
                              <th className="text-left px-4 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[1] ?? "Photos"}</th>
                            )}
                            <th className="text-right px-6 py-3 text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">{table.colLabels?.[2] ?? "Tarif"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row: any, i: number) => (
                            <tr key={i} className="border-b border-[rgba(245,240,225,0.05)] last:border-0 hover:bg-[rgba(245,240,225,0.02)] transition-colors">
                              <td className="px-6 py-3 text-[#f5f0e1]/80 text-sm">{row.duration}</td>
                              {row.photos !== null && (
                                <td className="px-4 py-3 text-[#f5f0e1]/55 text-sm">{row.photos}</td>
                              )}
                              <td className="px-6 py-3 text-right font-serif text-[#ffc13b]">{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="px-6 py-4 text-[#f5f0e1]/35 text-xs leading-relaxed border-t border-[rgba(245,240,225,0.06)]">
                        {table.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Comment se déroule la séance */}
      {"steps" in svc && (
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#ff6e40]" />
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase">Déroulement</p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#f5f0e1] mb-14 leading-tight">
            Comment se déroule la séance ?
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-0 ${(svc as any).steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            {(svc as any).steps.map((step: any, i: number, arr: any[]) => (
              <div key={step.n} className="relative flex flex-col">
                {/* connector line */}
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-[rgba(245,240,225,0.08)]" />
                )}
                <div className="relative z-10 flex flex-col items-start px-6 pb-10 lg:px-8">
                  <div className="w-12 h-12 border border-[rgba(245,240,225,0.15)] flex items-center justify-center mb-5">
                    <span className="font-serif text-[#ff6e40] text-sm">{step.n}</span>
                  </div>
                  <h3 className="text-[#f5f0e1] font-medium mb-2">{step.title}</h3>
                  <p className="text-[#f5f0e1]/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 bg-[#162e45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#f5f0e1]/40 text-sm mb-1">Une question ou un projet particulier ?</p>
            <h2 className="font-serif text-2xl text-[#f5f0e1]">
              Parlons-en, nous répondons sous 24h.
            </h2>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => go("services")}
              className="px-5 py-3 border border-[rgba(245,240,225,0.2)] text-[#f5f0e1]/70 text-sm hover:border-[#ffc13b] hover:text-[#ffc13b] transition-colors"
            >
              ← Autres services
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6e40] text-[#f5f0e1] font-medium hover:bg-[#e85a30] transition-colors text-sm"
            >
              Nous contacter <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


// ─── ABOUT PAGE ─────────────────────────────────────────────────────────────

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  function go(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="pt-40 pb-28 bg-[#162e45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-4">
              Notre histoire
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-[#f5f0e1] leading-none mb-6">
              À propos de nous
            </h1>
            <div className="h-px w-20 bg-[#ff6e40] mb-8" />
            <p className="text-[#f5f0e1]/65 leading-relaxed mb-5">Nous sommes Yanis et Iana, un couple passionné de photographie. La photo est entrée dans nos vies comme une passion personnelle avant de devenir une véritable aventure à deux. Dès notre rencontre, nous avons partagé cette envie de créer, d'observer et de capturer les instants qui méritent d'être conservés. Au fil des années, nous avons appris ensemble, expérimenté et développé chacun notre propre regard, en partageant de plus en plus de projets et de séances photo.</p>
            <p className="text-[#f5f0e1]/65 leading-relaxed">Notre amour pour les animaux a naturellement pris une place importante dans notre pratique, jusqu'à devenir l'une de nos grandes spécialités. C'est de cette passion commune, de notre complémentarité et de l'envie de proposer une photographie qui nous ressemble qu'est née Focus & Lumière. Aujourd'hui, nous formons un duo qui met son regard et sa sensibilité au service de vos animaux, de vos proches et de vos projets, avec l'envie de créer des souvenirs qui vous ressemblent.</p>
          </div>
          <div className="relative">
            <img
              src={IMGS.dogBox}
              alt="Mise en scène photographique"
              className="w-full h-[440px] object-cover bg-[#1a3450]"
            />
            <div
              className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border border-[rgba(255,193,59,0.25)]"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(245,240,225,0.07)]">
          {[
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
          ].map((v) => (
            <div key={v.number} className="bg-[#1e3d59] p-8 lg:p-12">
              <p className="font-serif text-5xl text-[rgba(245,240,225,0.05)] mb-5 leading-none">
                {v.number}
              </p>
              <h3 className="font-serif text-xl text-[#ffc13b] mb-3">{v.title}</h3>
              <p className="text-[#f5f0e1]/55 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Histoire narrative — en quinconce */}
      <section className="py-24">
        {/* Label centré */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="h-px w-10 bg-[#ff6e40]" />
            <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase">Notre histoire</p>
            <div className="h-px w-10 bg-[#ff6e40]" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#f5f0e1] leading-tight">
            Deux regards, une seule vision
          </h2>
        </div>

        {/* Bloc 1 — image gauche, texte droite */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src={IMGS.dogBox}
              alt="Notre passion de la photographie"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 w-1/2 h-1/2 border border-[rgba(255,110,64,0.2)]" aria-hidden />
          </div>
          <div>
            <p className="text-[#ff6e40] text-[10px] tracking-[0.25em] uppercase mb-4">01</p>
            <h3 className="font-serif text-3xl text-[#f5f0e1] mb-6 leading-tight">
              Une rencontre née<br />d'une passion commune
            </h3>
            <p className="text-[#f5f0e1]/60 leading-relaxed mb-5">Notre histoire commence par une rencontre, mais aussi par une passion que nous avions déjà en commun : la photographie. Dès nos premiers échanges, nous avons découvert cette envie partagée de créer, d'observer et de capturer les instants qui nous touchent. La photographie est rapidement devenue une activité que nous aimions pratiquer ensemble, entre découvertes, expérimentations et projets personnels. Au fil du temps, nous avons appris à développer notre regard, essayer de nouvelles approches et comprendre ce qui nous plaisait réellement dans cette pratique.</p>
            <p className="text-[#f5f0e1]/60 leading-relaxed">Cette passion commune nous a naturellement rapprochés et nous a donné envie d'aller toujours plus loin. Les séances réalisées ensemble se sont multipliées, tout comme les projets et les occasions de progresser. Peu à peu, nous avons découvert que nos sensibilités, bien que différentes, se complétaient parfaitement. C'est autour de cette passion commune et de notre amour grandissant pour les animaux que les premières bases de notre aventure à deux ont commencé à se construire.</p>
          </div>
        </div>

        {/* Bloc 2 — texte gauche, image droite */}
        <div className="bg-[#162e45] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#ff6e40] text-[10px] tracking-[0.25em] uppercase mb-4">02</p>
              <h3 className="font-serif text-3xl text-[#f5f0e1] mb-6 leading-tight">
                Leurs débuts :<br />chacun sa voie
              </h3>
              <p className="text-[#f5f0e1]/60 leading-relaxed mb-5">Avant de devenir un duo, nous avons chacun construit notre propre rapport à la photographie. Iana a commencé par photographier les animaux sauvages, une pratique qui lui a appris à observer, à patienter et surtout à saisir des instants imprévisibles. Photographier un animal dans son environnement demande de savoir anticiper ses mouvements tout en respectant son rythme et son comportement. Cette première expérience a naturellement nourri son intérêt pour la photographie animalière et son envie de mettre en valeur les personnalités propres à chaque animal.</p>
              <p className="text-[#f5f0e1]/60 leading-relaxed">De son côté, Yanis s'est d'abord tourné vers le portrait artistique et la photographie en studio. Il a développé son regard autour de la lumière, des compositions et de la mise en scène, en cherchant à créer des images travaillées qui révèlent la personnalité et l'univers de chaque sujet. Ces deux parcours, différents mais complémentaires, ont progressivement enrichi notre manière de travailler ensemble : l'observation et la spontanéité d'un côté, la maîtrise de la lumière et de la mise en scène de l'autre. C'est cette complémentarité qui fait aujourd'hui la richesse de notre duo.</p>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-1/2 h-1/2 border border-[rgba(245,240,225,0.08)]" aria-hidden />
              <img
                src={IMGS.catBlack}
                alt="Nos débuts en photographie"
                className="w-full h-[460px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Bloc 3 — image gauche, texte droite */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <div className="relative">
            <img
              src={IMGS.dogFluffy}
              alt="La création de Focus et Lumière"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 border border-[rgba(255,193,59,0.2)]" aria-hidden />
          </div>
          <div>
            <p className="text-[#ff6e40] text-[10px] tracking-[0.25em] uppercase mb-4">03</p>
            <h3 className="font-serif text-3xl text-[#f5f0e1] mb-6 leading-tight">La naissance de<br />Focus & Lumière</h3>
            <p className="text-[#f5f0e1]/60 leading-relaxed mb-5">Au fil de nos projets communs, l'idée de faire de cette passion une véritable aventure professionnelle s'est naturellement imposée. Nous avions envie de réunir nos deux univers, de mettre en commun nos compétences et surtout de proposer une photographie qui nous ressemble. C'est ainsi qu'est né Focus & Lumière, avec l'envie de créer des images sincères, naturelles et personnalisées, tout en accordant une place particulière aux animaux qui occupent une place importante dans notre quotidien et dans notre pratique photographique.</p>
            <p className="text-[#f5f0e1]/60 leading-relaxed">Depuis, notre activité a grandi et notre univers s'est enrichi. Si la photographie d'animaux de compagnie reste au cœur de notre identité, nous proposons également des portraits individuels ou en famille, ainsi que des prestations pour les professionnels, les associations et les événements. Aujourd'hui, nous continuons à faire évoluer Focus & Lumière avec la même envie qu'à nos débuts. Nous prenons le temps de comprendre chaque projet, nous nous adaptons à chaque personnalité et nous créons des images qui racontent véritablement une histoire.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#162e45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-3 text-center">
            Le duo
          </p>
          <h2 className="font-serif text-4xl text-[#f5f0e1] text-center mb-16 leading-tight">
            Derrière les objectifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                img: IMGS.photoM,
                name: "Yanis",
                role: "Portrait & photographie artistique",
                bio: "Passionné par la recherche de l'image unique, Yanis travaille le portrait avec une exigence constante d'originalité — dans le cadrage, la lumière, et la retouche. Il aime le studio, maîtriser chaque paramètre pour créer une image qui lui ressemble.",
                focus: ["Portrait artistique", "Photographie de paysage", "Studio & lumière artificielle"],
              },
              {
                img: IMGS.photoW,
                name: "Iana",
                role: "Photographie animalière & extérieur",
                bio: "Passionnée par les animaux depuis toujours, Iana a affiné son regard en photographiant la faune sauvage — renards, martins-pêcheurs, animaux de campagne. Cette patience et cette écoute du vivant, elle les met au service des séances en extérieur.",
                focus: ["Animaux de compagnie", "Photo spontanée en extérieur", "Lumière naturelle"],
              },
            ].map((person) => (
              <div
                key={person.name}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-80 object-cover bg-[#1a3450]"
                />
                <div>
                  <h3 className="font-serif text-2xl text-[#f5f0e1] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-[#ff6e40] text-[10px] tracking-[0.2em] uppercase mb-5">
                    {person.role}
                  </p>
                  <p className="text-[#f5f0e1]/55 text-sm leading-relaxed mb-6">
                    {person.bio}
                  </p>
                  <ul className="space-y-1.5">
                    {person.focus.map((f) => (
                      <li
                        key={f}
                        className="text-[#ffc13b] text-[10px] tracking-[0.2em] uppercase"
                      >
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
      <section className="py-20 text-center max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl text-[#f5f0e1] mb-4">
          Vous souhaitez travailler avec nous ?
        </h2>
        <p className="text-[#f5f0e1]/50 mb-8 leading-relaxed">
          Écrivez-nous, nous répondons sous 24h. Aucune question n'est trop
          simple — nous sommes là pour vous guider.
        </p>
        <button
          onClick={() => go("contact")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6e40] text-[#f5f0e1] font-medium hover:bg-[#e85a30] transition-colors"
        >
          Nous contacter <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </>
  );
}

// ─── PORTFOLIO PAGE ──────────────────────────────────────────────────────────

const PORTFOLIO_PHOTOS: {
  img: string;
  alt: string;
  cat: Exclude<PortfolioFilter, "all">;
  tall?: boolean;
}[] = [
  { img: IMGS.catBlack,    alt: "Chat noir fond sombre",           cat: "animals",   tall: true },
  { img: IMGS.dogFluffy,   alt: "Petit chien blanc portrait",      cat: "animals",   tall: true },
  { img: IMGS.dogTable,    alt: "Chien assis sur table noire",     cat: "animals" },
  { img: IMGS.dogBox,      alt: "Chien portrait contrasté",        cat: "animals",   tall: true },
  { img: IMGS.catTuxedo,   alt: "Chat tuxedo regard caméra",       cat: "animals" },
  { img: IMGS.dogSmall,    alt: "Petit chien blanc et brun",       cat: "animals" },
  { img: IMGS.dogTricolor, alt: "Chien tricolore en extérieur",    cat: "animals" },
  { img: IMGS.pregnancy,   alt: "Portrait grossesse lumière naturelle", cat: "portraits", tall: true },
  { img: IMGS.photoW,      alt: "Portrait femme studio",           cat: "portraits" },
  { img: IMGS.photoM,      alt: "Portrait homme extérieur",        cat: "portraits" },
  { img: IMGS.family,      alt: "Portrait famille coucher de soleil", cat: "families" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioFilter>("all");

  const visible =
    filter === "all"
      ? PORTFOLIO_PHOTOS
      : PORTFOLIO_PHOTOS.filter((p) => p.cat === filter);

  const tabs: { label: string; value: PortfolioFilter }[] = [
    { label: "Tous", value: "all" },
    { label: "Animaux", value: "animals" },
    { label: "Portraits", value: "portraits" },
    { label: "Familles", value: "families" },
  ];

  return (
    <>
      <div className="pt-40 pb-12 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-4">
          Nos travaux
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#f5f0e1] leading-none mb-6">
          Portfolio
        </h1>
        <div className="h-px w-20 bg-[#ff6e40]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={`px-5 py-2 text-xs tracking-[0.18em] uppercase transition-colors ${
                filter === t.value
                  ? "bg-[#ff6e40] text-[#f5f0e1]"
                  : "border border-[rgba(245,240,225,0.18)] text-[#f5f0e1]/55 hover:border-[#ffc13b] hover:text-[#ffc13b]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((p) => (
            <div
              key={`${p.img}-${p.alt}`}
              className="break-inside-avoid overflow-hidden group relative bg-[#162e45]"
            >
              <img
                src={p.img}
                alt={p.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  p.tall ? "h-[420px]" : "h-60"
                }`}
              />
              <div className="absolute inset-0 bg-[#1e3d59]/0 group-hover:bg-[#1e3d59]/45 transition-all duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                <p className="text-[#f5f0e1] text-xs tracking-wide">{p.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputCls =
    "w-full bg-[rgba(245,240,225,0.04)] border border-[rgba(245,240,225,0.13)] text-[#f5f0e1] px-4 py-3 text-sm focus:outline-none focus:border-[#ff6e40] transition-colors placeholder:text-[#f5f0e1]/25";

  return (
    <>
      <div className="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-4">
          Discutons
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#f5f0e1] leading-none mb-6">
          Contact
        </h1>
        <div className="h-px w-20 bg-[#ff6e40]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="py-20">
              <div className="w-16 h-px bg-[#ff6e40] mb-8" />
              <h2 className="font-serif text-3xl text-[#f5f0e1] mb-4">
                Message envoyé !
              </h2>
              <p className="text-[#f5f0e1]/55 leading-relaxed">
                Merci pour votre message. Nous vous répondrons dans les 24 heures
                ouvrées. En attendant, n'hésitez pas à nous suivre sur Instagram.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                    Nom complet *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Sophie Martin"
                  />
                </div>
                <div>
                  <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                    placeholder="sophie@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputCls}
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
                <div>
                  <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                    Type de séance
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputCls + " appearance-none cursor-pointer"}
                  >
                    <option value="">Choisir…</option>
                    <option value="animals">Animaux de compagnie</option>
                    <option value="individual">Portrait individuel</option>
                    <option value="family">Portrait de famille</option>
                    <option value="event">Événement privé</option>
                    <option value="custom">Formule sur mesure</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={inputCls + " [color-scheme:dark]"}
                />
              </div>
              <div>
                <label className="block text-[#f5f0e1]/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputCls + " resize-none"}
                  placeholder="Parlez-nous de votre projet, de vos animaux, de ce que vous souhaitez..."
                />
              </div>
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6e40] text-[#f5f0e1] font-medium hover:bg-[#e85a30] transition-colors"
                >
                  Envoyer le message <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[#f5f0e1]/30 text-xs">* Champs obligatoires</p>
              </div>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-10 pt-4">
          <div>
            <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-6">
              Nous trouver
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email",
                  value: "hello@lumiere-pattes.fr",
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  label: "Téléphone",
                  value: "+33 6 12 34 56 78",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: "Zone d'intervention",
                  value: "Paris & Île-de-France",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#ff6e40]">{c.icon}</div>
                  <div>
                    <p className="text-[#f5f0e1]/35 text-[10px] tracking-[0.2em] uppercase mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-[#f5f0e1] text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(245,240,225,0.1)] pt-10">
            <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-5">
              Disponibilités
            </p>
            <div className="space-y-2">
              {[
                ["Lundi — Vendredi", "9h00 – 19h00"],
                ["Samedi", "9h00 – 17h00"],
                ["Dimanche", "Sur demande"],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-[#f5f0e1]/60">{day}</span>
                  <span className="text-[#f5f0e1]/35">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[rgba(245,240,225,0.1)] pt-10">
            <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-4">
              Réseaux sociaux
            </p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", handle: "@lumiere.pattes" },
                { label: "Facebook", handle: "Lumière & Pattes" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-3.5 border border-[rgba(245,240,225,0.12)] flex-1 text-center hover:border-[rgba(255,193,59,0.35)] transition-colors cursor-pointer"
                >
                  <p className="text-[#f5f0e1]/35 text-[9px] tracking-[0.2em] uppercase">
                    {s.label}
                  </p>
                  <p className="text-[#ffc13b] text-xs mt-1">{s.handle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  function go(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navItems: { page: Page; label: string }[] = [
    { page: "home", label: "Accueil" },
    { page: "services", label: "Services & Tarifs" },
    { page: "about", label: "À propos" },
    { page: "portfolio", label: "Portfolio" },
    { page: "contact", label: "Contact" },
    { page: "gallery", label: "Accéder à vos photos" },
  ];

  return (
    <footer className="bg-[#162e45] border-t border-[rgba(245,240,225,0.07)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img
              src={logoImg}
              alt="Focus & Lumière logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-lg text-[#f5f0e1] tracking-wide"
              style={{ fontFamily: "'Limelight', cursive" }}
            >
              Focus & Lumière
            </span>
          </div>
          <p className="text-[#f5f0e1]/45 text-sm leading-relaxed">
            Duo de photographes basé à Saint-Nazaire, spécialisés dans les
            animaux de compagnie et les portraits authentiques.
          </p>
        </div>
        <div>
          <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-5">
            Navigation
          </p>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => go(item.page)}
                  className="text-[#f5f0e1]/45 hover:text-[#f5f0e1] text-sm transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-5">
            Contact
          </p>
          <div className="space-y-2 text-sm text-[#f5f0e1]/45">
            <p>hello@lumiere-pattes.fr</p>
            <p>+33 6 12 34 56 78</p>
            <p>Paris & Île-de-France</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(245,240,225,0.07)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#f5f0e1]/25 text-xs">© 2026 Focus & Lumière — Tous droits réservés</p>
          <p className="text-[#f5f0e1]/25 text-xs flex items-center gap-1.5">
            Fait avec{" "}
            <Heart className="w-3 h-3 text-[#ff6e40] fill-[#ff6e40]" /> pour
            vos compagnons
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── GALLERY PAGE ────────────────────────────────────────────────────────────

const DEMO_GALLERY_PHOTOS = [
  imgUrl("1558618666-fcd25c85cd64", 600, 500),
  imgUrl("1587300003388-59208cc962cb", 600, 500),
  imgUrl("1553284965-83fd1b20a8ba", 600, 500),
  imgUrl("1543466835-00a7907e9de1", 600, 500),
  imgUrl("1516934434234-1d21c7a0b3c8", 600, 500),
  imgUrl("1548802673-380d6fc96c58", 600, 500),
  imgUrl("1588943211346-0908a1fb0b01", 600, 500),
  imgUrl("1561037978-5d77e1d6e948", 600, 500),
  imgUrl("1534361960057-19f4efcdd0fd", 600, 500),
];

function GalleryPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [galleryCode, setGalleryCode] = useState("");

  const FORMAT_RE = /^[A-Z]{3}\d{8}$/;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = code.trim().toUpperCase();
    if (!FORMAT_RE.test(trimmed)) {
      setError("Format invalide. Le code doit contenir 3 lettres majuscules suivies de 8 chiffres (ex. : ABC12345678).");
      return;
    }
    setError("");
    setGalleryCode(trimmed);
    setUnlocked(true);
  }

  function handleReset() {
    setUnlocked(false);
    setCode("");
    setGalleryCode("");
    setError("");
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#162e45]">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#f5f0e1 0,#f5f0e1 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 border border-[rgba(245,240,225,0.15)] flex items-center justify-center">
              <Images className="w-6 h-6 text-[#ffc13b]" />
            </div>
          </div>
          <p className="text-[#ffc13b] text-[10px] tracking-[0.3em] uppercase mb-4">Galeries privées</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#f5f0e1] mb-6">Accédez à vos photos</h1>
          <p className="text-[#f5f0e1]/55 max-w-xl mx-auto leading-relaxed">
            Après chaque événement, chaque participant reçoit un code d'accès personnel pour retrouver et télécharger ses photos en haute résolution.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {!unlocked ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Explainer */}
              <div>
                <p className="text-[#ffc13b] text-[10px] tracking-[0.25em] uppercase mb-5">Comment ça marche</p>
                <div className="space-y-6">
                  {[
                    { n: "01", title: "Photographiés sur place", desc: "Lors de votre compétition ou événement, nous photographions chaque participant en action." },
                    { n: "02", title: "Galerie disponible sous 5 jours", desc: "Vos photos sont sélectionnées, retouchées et mises en ligne dans une galerie privée sécurisée." },
                    { n: "03", title: "Accès par code personnel", desc: "Vous recevez un code unique (ex. : ABC12345678) vous permettant d'accéder à votre galerie et de télécharger vos photos en HD." },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-5 items-start">
                      <span className="font-serif text-[#ff6e40]/60 text-2xl flex-shrink-0 leading-none mt-0.5">{step.n}</span>
                      <div>
                        <p className="text-[#f5f0e1] font-medium mb-1">{step.title}</p>
                        <p className="text-[#f5f0e1]/50 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-5 border border-[rgba(245,240,225,0.08)] bg-[#162e45]">
                  <p className="text-[#ffc13b] text-[9px] tracking-[0.2em] uppercase mb-2">Format du code</p>
                  <p className="text-[#f5f0e1]/60 text-sm">
                    Votre code est composé de <span className="text-[#f5f0e1]">3 lettres majuscules</span> suivies de <span className="text-[#f5f0e1]">8 chiffres</span>.
                  </p>
                  <p className="text-[#f5f0e1]/35 text-xs mt-1.5">Exemple : ABC12345678</p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:sticky lg:top-28">
                <div className="bg-[#162e45] border border-[rgba(245,240,225,0.08)] p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Lock className="w-4 h-4 text-[#ffc13b]" />
                    <p className="text-[#f5f0e1] font-medium">Entrez votre code d'accès</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[#f5f0e1]/50 text-xs tracking-[0.15em] uppercase mb-2">
                        Code personnel
                      </label>
                      <input
                        type="text"
                        value={code}
                        onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
                        placeholder="ABC12345678"
                        maxLength={11}
                        className="w-full bg-[rgba(245,240,225,0.05)] border border-[rgba(245,240,225,0.12)] px-4 py-3 text-[#f5f0e1] placeholder:text-[#f5f0e1]/20 font-mono text-lg tracking-wider focus:outline-none focus:border-[#ffc13b]/60 transition-colors"
                      />
                      {error && (
                        <p className="text-[#ff6e40] text-xs mt-2 leading-relaxed">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#ff6e40] text-[#f5f0e1] text-sm font-medium tracking-wide hover:bg-[#e85a30] transition-colors flex items-center justify-center gap-2"
                    >
                      Accéder à ma galerie <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[#f5f0e1]/25 text-xs mt-6 text-center leading-relaxed">
                    Votre code vous a été communiqué par email ou par l'organisateur de l'événement.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Gallery view */
            <div>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#ffc13b] text-[9px] tracking-[0.2em] uppercase">Galerie privée</span>
                    <span className="text-[#f5f0e1]/20 text-[9px]">·</span>
                    <span className="text-[#f5f0e1]/35 text-[9px] font-mono tracking-wider">{galleryCode}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-[#f5f0e1]">Vos photos</h2>
                  <p className="text-[#f5f0e1]/45 text-sm mt-1">{DEMO_GALLERY_PHOTOS.length} photos disponibles</p>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-[#f5f0e1]/40 hover:text-[#f5f0e1] text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  <Lock className="w-3 h-3" /> Changer de code
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-10">
                {DEMO_GALLERY_PHOTOS.map((src, i) => (
                  <div key={i} className="relative group aspect-[4/3] overflow-hidden bg-[#162e45]">
                    <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#1e3d59]/0 group-hover:bg-[#1e3d59]/50 transition-colors duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-4 py-2 border border-[#f5f0e1]/60 text-[#f5f0e1] text-xs tracking-[0.15em] uppercase">
                        Télécharger HD
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-[rgba(245,240,225,0.08)] pt-8">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ff6e40] text-[#f5f0e1] text-sm font-medium hover:bg-[#e85a30] transition-colors">
                  Télécharger toutes mes photos <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-[rgba(245,240,225,0.15)] text-[#f5f0e1]/55 text-sm hover:text-[#f5f0e1] hover:border-[rgba(245,240,225,0.3)] transition-colors"
                >
                  <Lock className="w-4 h-4" /> Accéder à une autre galerie
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav page={page} setPage={setPage} />
      <main>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "services" && <ServicesPage setPage={setPage} />}
        {page === "service-animals" && <ServiceDetailPage svc={SERVICES[0]} setPage={setPage} />}
        {page === "service-portraits" && <ServiceDetailPage svc={SERVICES[1]} setPage={setPage} />}
        {page === "service-pro" && <ServiceDetailPage svc={SERVICES[2]} setPage={setPage} />}
        {page === "service-sport" && <ServiceDetailPage svc={SERVICES[3]} setPage={setPage} />}
        {page === "about" && <AboutPage setPage={setPage} />}
        {page === "portfolio" && <PortfolioPage />}
        {page === "contact" && <ContactPage />}
        {page === "gallery" && <GalleryPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import photoAccueil from "@/images/photo-accueil.webp";

export default function WelcomeInsert() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
      <Image
        src={photoAccueil}
        alt="Séance photo Focus & Lumière à Saint-Nazaire"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #1e3d59 15%, rgba(30,61,89,0.72) 55%, rgba(30,61,89,0.18) 100%)",
        }}
      />

      <div
        ref={textRef}
        className="relative z-10 max-w-7xl mx-auto my-auto px-6 lg:px-12 pb-28 pt-40 w-full text-custom-white"
      >
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-6">
          Photographes — Saint-Nazaire &amp; Loire-Atlantique
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-2xl">
          Vos photos autour de Saint-Nazaire :<br />
          <span className="italic text-yellow">portrait, animalier &amp; sportif</span>
        </h1>
        <p className="text-custom-white/70 text-lg leading-relaxed max-w-md mb-10">
          Duo de photographes passionnés basé à Saint-Nazaire, en
          Loire-Atlantique. Nous capturons vos plus beaux moments — animaux de
          compagnie, portraits et événements sportifs — en studio comme en
          extérieur.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            rel="canonical"
            title="Découvrir nos services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange text-custom-white font-medium hover:bg-[#e85a30] transition-colors"
          >
            Nos services
          </Link>
          <Link
            href="/portfolio"
            rel="canonical"
            title="Voir le portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-custom-white/30 text-custom-white/85 hover:border-yellow hover:text-yellow transition-colors"
          >
            Voir le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

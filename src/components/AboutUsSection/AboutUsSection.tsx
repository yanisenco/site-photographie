"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import photoApproche from "@/images/accueil/photo-notre-approche.webp";

export default function AboutUsSection() {
  const paragraphsRef = useRef<HTMLElement[]>([]);
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    paragraphsRef.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-blue-dark text-custom-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

        <div className="order-2 xl:order-1 relative h-[420px]">
          <div className="absolute -top-5 -left-5 w-3/5 h-3/5 border border-custom-white/20 z-0" aria-hidden />
          <div className="relative w-full h-full z-10">
            <Image
              src={photoApproche}
              alt="Séance photo avec un chien en extérieur"
              fill
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-3/5 h-3/5 border border-orange/40 z-0" aria-hidden />
        </div>

        <div className="order-2 xl:order-1">
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-5">
            Notre approche
          </p>
          <h2 ref={addToRefs} className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
            La patience est notre
            <br />
            <span className="italic text-orange">premier objectif</span>
          </h2>
          <p ref={addToRefs} className="text-custom-white/65 leading-relaxed mb-5">
            Chaque animal a son caractère, chaque famille ses histoires, ses
            expressions et sa manière d&apos;être. Nous prenons le temps de vous
            connaître, de mettre votre compagnon à l&apos;aise, pour des images
            qui vous ressemblent vraiment.
          </p>
          <p ref={addToRefs} className="text-custom-white/65 leading-relaxed mb-10">
            En duo, nous portons deux regards complémentaires sur chaque
            séance. Pendant que l&apos;un peut se concentrer sur le sujet, son
            attitude ou ses expressions, l&apos;autre peut observer la scène
            dans son ensemble, anticiper un mouvement ou saisir un instant
            différent. Cette double perspective nous permet de multiplier les
            possibilités et de raconter votre histoire sous plusieurs angles.
          </p>
          <Link
            href="/a-propos"
            rel="canonical"
            title="En savoir plus sur nous"
            className="inline-flex items-center gap-2 text-yellow text-sm font-medium hover:text-orange transition-colors"
          >
            En savoir plus sur nous →
          </Link> 
        </div>
      </div>
    </section>
  );
}

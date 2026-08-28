"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import PreviewPhoto from "../PreviewPhoto/PreviewPhoto";

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
        <div className="order-2 xl:order-1">
          <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-5">
            Notre approche
          </p>
          <h2 ref={addToRefs} className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
            Deux regards, <span className="italic text-orange">une même passion</span>
          </h2>
          <p ref={addToRefs} className="text-custom-white/65 leading-relaxed mb-5">
            Chacun de nous a développé son propre style au fil des expériences
            — l&apos;un à l&apos;aise en{" "}
            <Link
              href="/service/portraits"
              rel="canonical"
              title="Portraits individuels & familles"
              className="underline decoration-orange/40 hover:text-orange"
            >
              studio
            </Link>
            , attentif aux émotions et aux détails, l&apos;autre plus spontané
            à saisir l&apos;instant naturel — notamment pour la{" "}
            <Link
              href="/service/animaux"
              rel="canonical"
              title="Photographie animalière"
              className="underline decoration-orange/40 hover:text-orange"
            >
              photographie animalière
            </Link>{" "}
            ou lors d&apos;
            <Link
              href="/service/sport-animalier"
              rel="canonical"
              title="Photographie sportive animalière"
              className="underline decoration-orange/40 hover:text-orange"
            >
              événements sportifs
            </Link>
            . C&apos;est en combinant ces deux regards que notre duo de
            photographes à Saint-Nazaire est né.
          </p>
          <p ref={addToRefs} className="text-custom-white/65 leading-relaxed mb-10">
            Notre mission : transformer vos moments spéciaux en images
            intemporelles, avec une approche à la fois conviviale et
            professionnelle — en studio, en extérieur ou lors de vos
            événements.
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
        <div className="order-1 xl:order-2">
          <PreviewPhoto />
        </div>
      </div>
    </section>
  );
}

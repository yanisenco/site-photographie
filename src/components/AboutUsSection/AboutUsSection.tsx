"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUsSection() {
  const textRef = useRef(null);

  useEffect(() => {
    // Enregistrement de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation en fondu lorsque l'élément entre dans la vue
    gsap.fromTo(
      textRef.current,
      { opacity: 0 }, // Opacité de départ
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Commence l'animation lorsque le haut de l'élément atteint 80% de la hauteur de la fenêtre
          toggleActions: "play none none reverse", // Joue l'animation à l'entrée, pas à la sortie
        },
      }
    );
  }, []);

  return (
    <p ref={textRef} className="text-center text-xl ">
      {" "}
      Guidé par une profonde passion pour les animaux et la photographie,
      j&apos;ai choisi de réunir ces deux intérêts et ainsi de commencer mon
      aventure en tant que photographe. Depuis plus d&apos;un an, je me consacre
      à capturer les moments précieux de la vie des animaux dans la nature et à
      immortaliser l&apos;énergie des événements sportifs. Rapidement, cette
      passion s&apos;est transformée en une véritable vocation.
      Aujourd&apos;hui, je suis ravi de mettre mon regard artistique et mes
      compétences au service de ceux qui souhaitent conserver des souvenirs
      inoubliables
    </p>
  );
}

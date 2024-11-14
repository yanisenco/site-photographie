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
    <p ref={textRef} className="text-center  ">
      {" "}
      Guidés par une profonde passion pour la photographie depuis plus de deux
      ans, nous avons chacun exploré l&apos;art de la photographie à notre
      manière, développant des styles et des compétences spécifiques. En
      travaillant sur des projets individuels, nous avons découvert la richesse
      que pouvait apporter un regard complémentaire. Ainsi, notre duo s&apos;est
      formé en unissant nos talents pour proposer des photos uniques et
      authentiques. Notre complémentarité est devenue la clé de notre identité
      en tant que duo de photographes : l’un de nous est spécialisé dans les
      photos en studio, capturant la personnalité et les émotions ; l’autre
      exerce la photographie en plein air, saisissant l&apos;authenticité et le
      naturel. Notre parcours a naturellement évolué vers la création de notre
      propre entreprise, pour partager notre passion de manière professionnelle
      avec nos clients.
    </p>
  );
}

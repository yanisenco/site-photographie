"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";

export default function AboutUsSection() {
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);
  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Enregistrement de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Appliquer l&apos;animation à chaque paragraphe
    paragraphsRef.current.forEach((paragraph, index) => {
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { opacity: 0 }, // Opacité de départ
          {
            opacity: 1,
            duration: 1,
            delay: index * 0.2, // Décalage pour un effet de cascade
            scrollTrigger: {
              trigger: paragraph,
              start: "top 80%", // L&apos;animation démarre lorsque le haut de l&apos;élément atteint 80% de la fenêtre
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <p ref={addToRefs} className="text-center">
        <strong>
          Une passion commune pour la photographie, deux regards complémentaires
        </strong>
        <br />
        Depuis plus de deux ans, nous cultivons une profonde passion pour la
        photographie, chacun explorant cet art à sa manière. À travers nos
        expériences individuelles, nous avons développé des styles distincts et
        des compétences spécifiques qui, une fois réunis, enrichissent notre
        vision et notre travail. C’est en travaillant sur des projets variés que
        nous avons découvert la puissance d’un regard complémentaire, et ainsi,
        notre duo de photographes professionnels à Saint-Nazaire est né. En
        combinant nos talents, nous proposons des photos uniques, authentiques
        et empreintes d&apos;émotion.
      </p>
      <SectionTitle
        title="Notre complémentarité, la clé de notre identité"
        level={4}
        idSection="notre-identité"
        size="s"
      />
      <div ref={addToRefs}>
        <ul className="px-[13px]">
          <li className="unna mb-2">
            <Link href="/service/portrait-studio" rel="canonical" title="redirection-page-photo-studio">
              &#8226; <strong>Photographie en studio</strong>: L’un de nous se
              spécialise dans la capture de la personnalité et des émotions en
              studio. Parfait pour des portraits intimes, des photos de famille
              ou des shootings professionnels.{" "}
            </Link>
          </li>
          <li className="unna mb-2">
            <Link href="/service/portrait-exterieur" rel="canonical" title="redirection-page-photo-exterieur">
              &#8226; <strong>Photographie en extérieur</strong>: L’autre
              excelle dans l’art de saisir l&apos;authenticité et le naturel en
              plein air, créant des clichés spontanés et vivants, idéaux pour
              des photos animalières, des séances lifestyle, ou encore des{" "}
            </Link>
            <Link href="/service/photo-sportive" rel="canonical" title="redirection-page-photos-sportives">événements sportifs.</Link>
          </li>
        </ul>
        <p>
          Ensemble, nous avons décidé de donner une nouvelle dimension à notre
          passion en créant notre entreprise de photographie à Saint-Nazaire, en
          Loire-Atlantique. Nous offrons désormais notre expertise et notre
          créativité pour accompagner nos clients dans la réalisation de leurs
          projets photo.
        </p>
      </div>

      <SectionTitle
        title="Une expérience sur-mesure pour chaque client"
        level={5}
        idSection="une-experience-sur-mesure"
        size="s"
      />
      <p ref={addToRefs}>
        Notre mission est de transformer vos moments spéciaux en œuvres
        d&apos;art intemporelles, grâce à une approche à la fois conviviale et
        professionnelle. Que ce soit en{" "}
        <Link href="/service/portrait-studio" rel="canonical" title="redirection-page-photo-studio">studio, </Link>
        <Link href="/service/portrait-exterieur" rel="canonical" title="redirection-page-photo-exterieur">en extérieur</Link> ou lors
        d’événements, nous mettons à votre disposition notre savoir-faire pour
        capturer des instants mémorables.
        <br />
        <br />
        <Link href="/#contact" rel="canonical" title="redirection-section-contact">
          Contactez notre duo de photographes à Saint-Nazaire dès aujourd’hui
          pour planifier une séance photo adaptée à vos besoins !
        </Link>
      </p>
    </>
  );
}

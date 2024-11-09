"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function WelcomeInsert() {
  const textRef = useRef(null);

  useEffect(() => {
    // Animation en fondu
    gsap.fromTo(
      textRef.current,
      { opacity: 0 }, // Opacité de départ
      { opacity: 1, duration: 2 } // Opacité finale et durée
    );
  }, []);

  return (
    <>
      <h1 className="m-auto mb-6 text-[40px] font-bold uppercase sm:text-[40px] lg:text-[45px] xl:text-[60px] ">
        Des clichés sur-mesure pour vous
      </h1>
      <Image
        src={"/2.jpg"}
        alt={""}
        className="m-auto rounded-t-full"
        width={450}
        height={750}
      />
      <p ref={textRef} className="text-center text-xl ">
        {" "}
        Bienvenue sur notre site de photographie ! Nous sommes un duo de
        photographes spécialisés en portraits animaliers, portraits humains, ou
        les deux ensemble, en studio ou en extérieur. Nous proposons aussi des
        services en photographie sportive. Notre mission : immortaliser chaque
        instant avec authenticité pour créer des souvenirs inoubliables.
        Ensemble, immortalisons vos moments les plus intenses et les plus
        tendres en œuvres d&apos;art intemporelles.
      </p>
    </>
  );
}

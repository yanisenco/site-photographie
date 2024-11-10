"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <section
      className="relative h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/83899b_a8befa199f524c9e9244ea836431b840~mv2.jpg/v1/fit/w_1440,h_735,q_90/83899b_a8befa199f524c9e9244ea836431b840~mv2.webp)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-11/12 sm:w-9/12 m-auto z-10 flex items-center justify-center h-full text-center text-white ">
        <div>
          <h1 className="mt-10 sm:mt-none text-6xl font-bold">
            Des clichés sur-mesure pour vous
          </h1>
          <p ref={textRef} className="mt-6 text-lg ">
            {" "}
            Bienvenue sur notre site de photographie ! Nous sommes un duo de
            photographes spécialisés en portraits animaliers, portraits humains,
            ou les deux ensemble, en studio ou en extérieur. Nous proposons
            aussi des services en photographie sportive. Notre mission :
            immortaliser chaque instant avec authenticité pour créer des
            souvenirs inoubliables. Ensemble, immortalisons vos moments les plus
            intenses et les plus tendres en œuvres d&apos;art intemporelles.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WelcomeInsert() {
  const textRef = useRef(null);

  const imageLoaded = useRef(false);

  useEffect(() => {
    if (imageLoaded.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, force3D: true },
        { opacity: 1, duration: 3, force3D: true }
      );
    }
  }, []);

  const handleImageLoad = () => {
    imageLoaded.current = true;
  };

  useEffect(() => {
    // Animation en fondu
    gsap.fromTo(
      textRef.current,
      { opacity: 0 }, // Opacité de départ
      { opacity: 1, duration: 3 } // Opacité finale et durée
    );
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center"
      onLoad={handleImageLoad}
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/83899b_a8befa199f524c9e9244ea836431b840~mv2.jpg/v1/fit/w_1440,h_735,q_90/83899b_a8befa199f524c9e9244ea836431b840~mv2.webp)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        ref={textRef}
        className="relative w-11/12 sm:w-9/12 z-10 text-center text-white"
      >
        <h1 className="text-6xl font-bold">Des clichés sur-mesure pour vous</h1>
        <p className="my-6 text-lg">
          Bienvenue sur notre site de photographie ! Nous sommes un duo de
          photographes spécialisés en portraits animaliers, portraits humains,
          ou les deux ensemble, en studio ou en extérieur. Nous proposons aussi
          des services en photographie sportive. Notre mission : immortaliser
          chaque instant avec authenticité pour créer des souvenirs
          inoubliables. Ensemble, immortalisons vos moments les plus intenses et
          les plus tendres en œuvres d&apos;art intemporelles.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 m-auto animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}

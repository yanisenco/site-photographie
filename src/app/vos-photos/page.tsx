"use client";
import { useState, useRef } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Gallery from "@/components/Gallery/Gallery";
import { fetchImages } from "@/utils/imagesService";

export default function YourPhotos() {
  const [images, setImages] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const getYourPhotos = async (id: string) => {
    setIsLoading(true);
    const result = await fetchImages(id);
    setIsLoading(false);
    setImages(result);
  };

  const handleInputChange = () => {
    const input = inputRef.current;
    const regex = /^[A-Z]{3}\d{8}$/;
    if (input) {
      setIsDisabled(!regex.test(input.value));
    }
  };

  return (
    <PageTemplate>
      <SectionTitle idSection={"vos-photos"} title={"Vos Photos"} />
      {images.length > 0 ? (
        <>
          <p className="mb-4">
            Voici le résultat de votre shooting, vous avez 1 semaine pour
            sélectionner et nous envoyer votre sélection pour que nous
            retouchions vos images favorites
          </p>
          <Gallery images={images} />
        </>
      ) : (
        <>
          <p className="mb-4">
            Pour accéder à vos photos, veuillez entrer le mot de passe. Il est
            composé des 3 premières lettres de votre nom de famille suivi de
            votre date de naissance (JOUR MOIS ANNEE). Exemple :
            &quot;ABC01012000&quot;
          </p>
          {/* {images.length === 0 && (
            <p className="text-red-500">Mot de passe incorrect</p>
          )} */}
          <div className="h-full flex">
            <input
              className="unna w-full rounded border border-stroke pl-3 mr-10"
              type="text"
              name="motdepasse"
              placeholder="Votre Mot de passe"
              onInput={handleInputChange}
              ref={inputRef}
            />
            <button
              className={`rounded border border-primary bg-[#1e3d59] p-3 text-white transition hover:bg-opacity-90 ${
                isDisabled && "cursor-not-allowed"
              }`}
              disabled={isDisabled}
              onClick={() => {
                if (inputRef.current?.value) {
                  getYourPhotos(inputRef.current.value);
                }
              }}
            >
              {isLoading ? "Chargement..." : "Valider"}
            </button>
          </div>
        </>
      )}
    </PageTemplate>
  );
}

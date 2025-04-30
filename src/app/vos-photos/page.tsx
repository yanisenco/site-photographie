"use client";
import { useState, useRef } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Gallery from "@/components/Gallery/Gallery";
import { fetchImages } from "@/utils/imagesService";
import FormBox from "@/components/FormBox/FormBox";

export default function YourPhotos() {
  const [images, setImages] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const getYourPhotos = async (event: React.FormEvent, id: string) => {
    event.preventDefault();
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
        <FormBox>
          <p className="mb-4">
            Pour accéder à vos photos, veuillez entrer le mot de passe. <br/>
            Il est
            composé des 3 premières lettres de votre nom de famille suivi de
            votre date de naissance (JOUR MOIS ANNEE). 
            <br/>Exemple : &quot;ABC01012000&quot;
          </p>
          <form className="h-full" onSubmit={(event) => {
                if (inputRef.current?.value) {
                  getYourPhotos(event, inputRef.current.value);
                }
              }}>
            <input
              className="unna w-full mb-3 rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
              type="text"
              name="motdepasse"
              placeholder="Votre Mot de passe"
              onInput={handleInputChange}
              ref={inputRef}
            />
            <button
              className={`w-full rounded border border-primary bg-[#1e3d59] p-3 text-white transition hover:bg-opacity-90 ${
                isDisabled && "bg-gray-200 hover:bg-opacity-100 cursor-not-allowed text-black"
              }`}
              disabled={isDisabled}
              onClick={(event) => {
                if (inputRef.current?.value) {
                  getYourPhotos(event, inputRef.current.value);
                }
              }}
            >
              {isLoading ? "Chargement..." : "Valider"}
            </button>
          </form>

        </FormBox>
        )}
    </PageTemplate>
  );
}

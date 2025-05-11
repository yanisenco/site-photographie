"use client";
import { useState, useRef, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GallerySelectionnableImages from "@/components/Gallery/GallerySelectionnableImages";
import { fetchImages } from "@/utils/imagesService";
import FormBox from "@/components/FormBox/FormBox";

export default function YourPhotos() {
  const [images, setImages] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passwordInStorage, setPasswordInStorage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getYourPhotos = async (event: React.FormEvent, id: string) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await fetchImages(id);
    if (result.length === 0) {
      alert("Aucune photo trouvée pour ce mot de passe.");
      setIsLoading(false);
    }else {
      setPasswordInStorage(id)
      localStorage.setItem("photo-password", JSON.stringify({ value: id, timestamp: Date.now() }))
    }
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("photo-password");
      if (stored) {
        try {
          const { value, timestamp } = JSON.parse(stored);
          const now = Date.now();
          if (now - timestamp < 30 * 24 * 60 * 60 * 1000) {
            setPasswordInStorage(value);
            getYourPhotos(new Event("submit") as unknown as React.FormEvent, value);
          } else {
            localStorage.removeItem("photo-password");
          }
        } catch (error) {
          console.error("Erreur parsing localStorage:", error);
          localStorage.removeItem("photo-password");
        }
      } else {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <PageTemplate>
      <SectionTitle idSection={"vos-photos"} title={"Vos Photos"} />
      {isLoading && passwordInStorage && (
        <div className="flex justify-center items-center h-full">Chargement...</div>
      )}
      {!passwordInStorage && !isLoading && (
        <FormBox>
          <p className="mb-4">
            Pour accéder à vos photos, veuillez entrer le mot de passe. <br />
            Exemple : &quot;ABC01012000&quot;
          </p>
          <form
            className="h-full"
            onSubmit={(event) => {
              if (inputRef.current?.value) {
                const value = inputRef.current.value;
                getYourPhotos(event, value);
              }
            }}
          >
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
              type="submit"
            >
              {isLoading ? "Chargement..." : "Valider"}
            </button>
          </form>
        </FormBox>
      )}
      {images.length > 0 && !isLoading && (
        <>
          <p className="mb-4">
            Voici le résultat de votre shooting, vous avez 1 semaine pour sélectionner et nous envoyer votre sélection.<br/> Vos photos seront ensuite retouchées et envoyées dans les 48h suivant le paiement.
          </p>
          <GallerySelectionnableImages images={images} />
        </>
      )}
    </PageTemplate>
  );
}

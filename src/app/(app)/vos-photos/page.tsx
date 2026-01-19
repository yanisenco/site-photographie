"use client";
import { useState, useRef, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GallerySelectionnableImages from "@/components/Gallery/GallerySelectionnableImages";
import { fetchImages } from "@/utils/imagesService";
import FormBox from "@/components/FormBox/FormBox";
// import FAQ from "@/components/Faq/Faq";
// import DynamicPageContent from "@/components/DynamicPageContent/DynamicPageContent";

export default function YourPhotos() {
  const [images, setImages] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [passwordInStorage, setPasswordInStorage] = useState<string | null>(null);
  const [savePassword, setSavePassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getYourPhotos = async (event: React.FormEvent, id: string, savePassword: boolean) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await fetchImages(id);
    if (result.length === 0) {
      alert("Aucune photo trouvée pour ce mot de passe.");
      setIsLoading(false);
    } else {
      setPasswordInStorage(id);
      console.log("isChecked value:", savePassword)
      console.log("Ok");
      setImages(result);
      // Enregistrer le mot de passe après avoir mis à jour le state
      if (savePassword) {
        console.log("Enregistrement du mot de passe pour 30 jours");
        localStorage.setItem("photo-password", JSON.stringify({ value: id, timestamp: Date.now() }));
      }
    }
    setIsLoading(false);
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
            getYourPhotos(new Event("submit") as unknown as React.FormEvent, value, savePassword);
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
      {isLoading && passwordInStorage && (
        <div className="flex justify-center items-center h-full">Chargement...</div>
      )}
      {!passwordInStorage && !isLoading && (
        <>
        {/* <DynamicPageContent/> */}
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
                  getYourPhotos(event, value, savePassword);
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
              <input 
                type="checkbox"
                className="mb-3"
                checked={savePassword}
                onChange={e => setSavePassword(e.target.checked)}
              />
              <label className="unna text-sm ml-3">
                Enregistrer le mot de passe pour 30 jours.
              </label>
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
          {/* <FAQ tag={`FAQ-vos-photos`}/> */}
        </>
      )}
      {images.length > 0 && !isLoading && (
        <>
          <button
            className="rounded border border-primary bg-[#1e3d59] p-3 text-white transition mt-4"
            onClick={() => {
              localStorage.removeItem("photo-password");
              setPasswordInStorage(null);
              setImages([]);
              setIsDisabled(true);
              setSavePassword(false);
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            Consulter une autre sélection
          </button>
        <SectionTitle title="Le résultat de votre shooting" level={1} idSection="vos-photos"/>
          <p className="mb-4">
            Voici le résultat de votre shooting, vous avez 1 semaine pour sélectionner et nous envoyer votre sélection.<br/> Vos photos seront ensuite retouchées et envoyées dans les 48h suivant le paiement.
          </p>
          <GallerySelectionnableImages images={images} />
        </>
      )}
    </PageTemplate>
  );
}

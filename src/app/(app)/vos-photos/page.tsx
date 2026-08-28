"use client";
import { useState, useRef, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import GallerySelectionnableImages from "@/components/Gallery/GallerySelectionnableImages";
import { fetchImages } from "@/utils/imagesService";
import { HiOutlineLockClosed } from "react-icons/hi";

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
      setImages(result);
      if (savePassword) {
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

  const handleReset = () => {
    localStorage.removeItem("photo-password");
    setPasswordInStorage(null);
    setImages([]);
    setIsDisabled(true);
    setSavePassword(false);
    if (inputRef.current) {
      inputRef.current.value = "";
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
        } catch {
          localStorage.removeItem("photo-password");
        }
      } else {
        setIsLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate>
      {/* En-tête */}
      <div className="pt-4 pb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 border border-foreground/15 flex items-center justify-center">
            <HiOutlineLockClosed className="w-6 h-6 text-yellow" />
          </div>
        </div>
        <p className="text-yellow text-[10px] tracking-[0.3em] uppercase mb-4">Galeries privées</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-6">Accédez à vos photos</h1>
        <p className="text-foreground/55 max-w-xl mx-auto leading-relaxed">
          Après chaque séance ou événement, vous recevez un code d&apos;accès
          personnel pour retrouver, sélectionner et télécharger vos photos en
          haute résolution.
        </p>
      </div>

      {isLoading && passwordInStorage && (
        <div className="flex justify-center items-center py-20 text-foreground/50">Chargement...</div>
      )}

      {!passwordInStorage && !isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-24">
          {/* Explication */}
          <div>
            <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-5">Comment ça marche</p>
            <div className="space-y-6">
              {[
                { n: "01", title: "Photographiés lors de votre séance", desc: "Le jour J, nous réalisons vos photos — animaux, portraits, événement." },
                { n: "02", title: "Galerie disponible sous 5 jours", desc: "Vos photos sont sélectionnées, retouchées et mises en ligne dans une galerie privée sécurisée." },
                { n: "03", title: "Accès par code personnel", desc: "Vous recevez un code unique (ex. : ABC12345678) vous permettant d'accéder à votre galerie, de choisir vos photos et de les télécharger en HD." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 items-start">
                  <span className="font-serif text-orange/60 text-2xl flex-shrink-0 leading-none mt-0.5">{step.n}</span>
                  <div>
                    <p className="font-medium mb-1">{step.title}</p>
                    <p className="text-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 border border-foreground/10 bg-blue-dark text-custom-white">
              <p className="text-yellow text-[9px] tracking-[0.2em] uppercase mb-2">Format du code</p>
              <p className="text-custom-white/70 text-sm">
                Votre code est composé de <span className="text-custom-white">3 lettres majuscules</span> suivies de{" "}
                <span className="text-custom-white">8 chiffres</span>.
              </p>
              <p className="text-custom-white/35 text-xs mt-1.5">Exemple : ABC12345678</p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-blue-dark text-custom-white border border-custom-white/10 p-8">
              <div className="flex items-center gap-3 mb-8">
                <HiOutlineLockClosed className="w-4 h-4 text-yellow" />
                <p className="font-medium">Entrez votre code d&apos;accès</p>
              </div>
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  if (inputRef.current?.value) {
                    getYourPhotos(event, inputRef.current.value, savePassword);
                  }
                }}
              >
                <div>
                  <label className="block text-custom-white/50 text-xs tracking-[0.15em] uppercase mb-2">
                    Code personnel
                  </label>
                  <input
                    ref={inputRef}
                    type="text"
                    name="motdepasse"
                    placeholder="ABC12345678"
                    maxLength={11}
                    onInput={handleInputChange}
                    className="w-full bg-custom-white/[0.05] border border-custom-white/12 px-4 py-3 placeholder:text-custom-white/20 font-mono text-lg tracking-wider focus:outline-none focus:border-yellow/60 transition-colors"
                  />
                </div>
                <label className="flex items-center gap-2 text-custom-white/60 text-xs">
                  <input
                    type="checkbox"
                    checked={savePassword}
                    onChange={(e) => setSavePassword(e.target.checked)}
                  />
                  Enregistrer le code pendant 30 jours sur cet appareil.
                </label>
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="w-full py-3.5 bg-orange text-custom-white text-sm font-medium tracking-wide hover:bg-[#e85a30] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Chargement..." : "Accéder à ma galerie"}
                </button>
              </form>
              <p className="text-custom-white/25 text-xs mt-6 text-center leading-relaxed">
                Votre code vous a été communiqué par email ou par l&apos;organisateur de l&apos;événement.
              </p>
            </div>
          </div>
        </div>
      )}

      {images.length > 0 && !isLoading && (
        <div className="pb-24">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-yellow text-[9px] tracking-[0.2em] uppercase">Galerie privée</span>
              <h2 className="font-serif text-2xl mt-1">Le résultat de votre séance</h2>
              <p className="text-foreground/45 text-sm mt-1">
                Vous avez 1 semaine pour sélectionner vos photos. Elles seront
                retouchées et envoyées dans les 48h suivant le paiement.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-foreground/40 hover:text-foreground text-xs tracking-[0.15em] uppercase transition-colors"
            >
              <HiOutlineLockClosed className="w-3 h-3" /> Changer de code
            </button>
          </div>
          <GallerySelectionnableImages images={images} />
        </div>
      )}
    </PageTemplate>
  );
}

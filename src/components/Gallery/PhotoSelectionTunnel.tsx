"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import GallerySelectionnableImages from "./GallerySelectionnableImages";
import CommandeEmail from "@/templates/CommandeEmail";
import { fetchEmail } from "@/utils/emailService";
import { computePriceBreakdown } from "@/types/galleryPricing";
import type { GalleryPricingConfig } from "@/types/galleryPricing";

interface PhotoSelectionTunnelProps {
  images: { src: string; alt: string }[];
  pricingConfig?: GalleryPricingConfig | null;
  /** Appelé à chaque changement d'étape (pas au premier rendu) pour permettre
   *  au parent de replacer le scroll où il le souhaite. Par défaut, remonte
   *  en haut de la fenêtre. */
  onStepChange?: () => void;
}

const STEPS = [
  { n: 1, label: "Sélection" },
  { n: 2, label: "Récapitulatif" },
  { n: 3, label: "Confirmation" },
] as const;

export default function PhotoSelectionTunnel({
  images,
  pricingConfig,
  onStepChange,
}: PhotoSelectionTunnelProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [status, setStatus] = useState({ isLoading: false, isSuccess: false, isError: false });
  const isFirstRender = useRef(true);

  const breakdown = useMemo(() => {
    if (!pricingConfig) return null;
    return computePriceBreakdown(pricingConfig, selectedImages.length, selectedOptionIds);
  }, [pricingConfig, selectedImages.length, selectedOptionIds]);

  const toggleOption = (id: string) => {
    setSelectedOptionIds((prev) =>
      prev.includes(id) ? prev.filter((optId) => optId !== id) : [...prev, id]
    );
  };

  // Replace le scroll à chaque changement d'étape (pas au premier rendu).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (onStepChange) {
      onStepChange();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step, onStepChange]);

  // Restaure la sélection sauvegardée (30 jours), comme avant.
  useEffect(() => {
    const stored = localStorage.getItem("photo-selection");
    if (stored) {
      try {
        const { selectedImages: saved, timestamp } = JSON.parse(stored);
        if (Date.now() - timestamp < 30 * 24 * 60 * 60 * 1000) {
          setSelectedImages(saved);
        } else {
          localStorage.removeItem("photo-selection");
        }
      } catch {
        localStorage.removeItem("photo-selection");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "photo-selection",
      JSON.stringify({ selectedImages, timestamp: Date.now() })
    );
  }, [selectedImages]);

  const handleToggle = (src: string, checked: boolean) => {
    setSelectedImages((prev) => (checked ? [...prev, src] : prev.filter((s) => s !== src)));
  };

  const handleRemove = (src: string) => {
    setSelectedImages((prev) => prev.filter((s) => s !== src));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    await fetchEmail(
      email,
      "Votre commande est confirmée !",
      <CommandeEmail selectedImages={selectedImages} priceBreakdown={breakdown} />,
      setStatus
    );
  };

  const count = selectedImages.length;
  const countLabel = `${count} photo${count > 1 ? "s" : ""} sélectionnée${count > 1 ? "s" : ""}`;

  return (
    <div>
      {/* Indicateur d'étapes */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
        {STEPS.map((s, i) => (
          <div key={s.n} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`w-8 h-8 flex-shrink-0 rounded-full border flex items-center justify-center text-sm font-medium transition-colors ${
                  step === s.n
                    ? "bg-orange border-orange text-custom-white"
                    : step > s.n
                    ? "border-orange text-orange"
                    : "border-foreground/20 text-foreground/40"
                }`}
              >
                {step > s.n ? "✓" : s.n}
              </span>
              <span
                className={`text-xs tracking-[0.15em] uppercase hidden sm:inline ${
                  step === s.n ? "text-foreground" : "text-foreground/40"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && <div className="w-8 sm:w-16 h-px bg-foreground/15" />}
          </div>
        ))}
      </div>

      {/* Étape 1 — Sélection */}
      {step === 1 && (
        <div>
          <GallerySelectionnableImages
            images={images}
            selectedImages={selectedImages}
            onToggle={handleToggle}
          />
          <div className="sticky bottom-0 z-20 mt-8 px-6 lg:px-12 py-4 bg-blue-dark/95 backdrop-blur-sm border-t border-custom-white/10 flex items-center justify-between gap-4">
            <div>
              <p className="text-custom-white text-sm">{countLabel}</p>
              {breakdown && count > 0 && (
                <p className="text-custom-white/60 text-xs mt-0.5">
                  Total actuel : <span className="text-custom-white font-medium">{breakdown.basePrice + breakdown.extraPhotosCost} €</span>
                  {breakdown.extraPhotosCount > 0 && (
                    <span> ({breakdown.includedPhotos} incluse{breakdown.includedPhotos > 1 ? "s" : ""} + {breakdown.extraPhotosCount} suppl.)</span>
                  )}
                </p>
              )}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={count === 0}
              className="px-6 py-3 bg-orange text-custom-white text-sm font-medium hover:bg-[#e85a30] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              Continuer →
            </button>
          </div>
        </div>
      )}

      {/* Étape 2 — Récapitulatif */}
      {step === 2 && (
        <div>
          <h2 className="font-serif text-2xl mb-2">Récapitulatif de votre sélection</h2>
          <p className="text-foreground/55 text-sm mb-8">
            {countLabel}. Vous pouvez encore en retirer avant de confirmer.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {selectedImages.map((src) => (
              <div key={src} className="relative group aspect-square bg-blue-dark overflow-hidden">
                <Image src={src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                <button
                  onClick={() => handleRemove(src)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-blue/80 text-custom-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Retirer cette photo de la sélection"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {breakdown && (
            <div className="max-w-md mb-10 border border-foreground/10 bg-foreground/[0.03] p-5 text-sm">
              <div className="flex justify-between">
                <span>{breakdown.formuleLabel}</span>
                <span>{breakdown.basePrice} €</span>
              </div>
              {breakdown.extraPhotosCount > 0 && (
                <div className="flex justify-between text-foreground/60 mt-1">
                  <span>
                    {breakdown.extraPhotosCount} photo{breakdown.extraPhotosCount > 1 ? "s" : ""} suppl. ×{" "}
                    {breakdown.extraPhotoPrice} €
                  </span>
                  <span>{breakdown.extraPhotosCost} €</span>
                </div>
              )}
              {pricingConfig && pricingConfig.options.length > 0 && (
                <div className="mt-3 pt-3 border-t border-foreground/10 space-y-2">
                  {pricingConfig.options.map((option) => (
                    <label key={option.id} className="flex items-center justify-between gap-2 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedOptionIds.includes(option.id)}
                          onChange={() => toggleOption(option.id)}
                        />
                        {option.label}
                      </span>
                      <span>+{option.price} €</span>
                    </label>
                  ))}
                </div>
              )}
              <div className="flex justify-between font-medium mt-3 pt-3 border-t border-foreground/10">
                <span>Total</span>
                <span>{breakdown.total} €</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-3 border border-foreground/20 text-foreground/70 text-sm hover:border-orange hover:text-orange transition-colors"
            >
              ← Modifier la sélection
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={count === 0}
              className="px-6 py-3 bg-orange text-custom-white text-sm font-medium hover:bg-[#e85a30] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Confirmer ma sélection →
            </button>
          </div>
        </div>
      )}

      {/* Étape 3 — Confirmation par email */}
      {step === 3 && (
        <div className="max-w-lg mx-auto text-center py-8">
          {status.isSuccess ? (
            <div>
              <div className="w-14 h-14 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-orange text-2xl">✓</span>
              </div>
              <h2 className="font-serif text-2xl mb-4">Sélection envoyée !</h2>
              <p className="text-foreground/55 text-sm leading-relaxed">
                Votre sélection a bien été prise en compte. Vous allez recevoir un
                email de confirmation — pensez à vérifier vos spams s&apos;il
                n&apos;arrive pas tout de suite.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl mb-2">Dernière étape</h2>
              <p className="text-foreground/55 text-sm mb-8">
                Entrez votre adresse email pour recevoir la confirmation de votre
                sélection ({countLabel}).
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vous@email.com"
                  className="w-full bg-foreground/[0.04] border border-foreground/[0.13] px-4 py-3 text-black text-sm text-center focus:outline-none focus:border-orange transition-colors placeholder:text-foreground/25"
                />
                {status.isError && (
                  <p className="text-orange text-xs">Une erreur est survenue, réessayez.</p>
                )}
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-3 border border-foreground/20 text-foreground/70 text-sm hover:border-orange hover:text-orange transition-colors"
                  >
                    ← Retour
                  </button>
                  <button
                    type="submit"
                    disabled={status.isLoading}
                    className="px-6 py-3 bg-orange text-custom-white text-sm font-medium hover:bg-[#e85a30] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.isLoading ? "Envoi en cours…" : "Confirmer"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

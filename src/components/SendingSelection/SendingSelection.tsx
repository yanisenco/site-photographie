"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";
import CommandeEmail from "@/templates/CommandeEmail";
import { fetchEmail } from "@/utils/emailService";
import { computePriceBreakdown } from "@/types/galleryPricing";
import type { GalleryPricingConfig } from "@/types/galleryPricing";

interface SelectedImages {
  selectedImages: string[];
  pricingConfig?: GalleryPricingConfig | null;
}

const SendingSelection = ({ selectedImages, pricingConfig }: SelectedImages) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const breakdown = useMemo(() => {
    if (!pricingConfig) return null;
    return computePriceBreakdown(pricingConfig, selectedImages.length, selectedOptionIds);
  }, [pricingConfig, selectedImages.length, selectedOptionIds]);

  const toggleOption = (id: string) => {
    setSelectedOptionIds((prev) =>
      prev.includes(id) ? prev.filter((optId) => optId !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    await fetchEmail(
      email,
      "Votre commande est confirmée !",
      <CommandeEmail selectedImages={selectedImages} priceBreakdown={breakdown} />,
      setStatus);
  };


  return (
    <div className="w-full flex flex-col items-end pr-4">
      {breakdown && selectedImages.length > 0 && (
        <p className="text-sm text-white/80 mb-2">
          Total actuel : <span className="font-semibold text-white">{breakdown.basePrice + breakdown.extraPhotosCost} €</span>
          {breakdown.extraPhotosCount > 0 && (
            <span className="text-white/50">
              {" "}({breakdown.includedPhotos} incluse{breakdown.includedPhotos > 1 ? "s" : ""} + {breakdown.extraPhotosCount} suppl.)
            </span>
          )}
        </p>
      )}
      <button
        className={`rounded border border-primary bg-[#1e3d59] p-3 text-white transition ${selectedImages.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90 "} mb-4`}
        disabled={selectedImages.length === 0}
        onClick={() => setIsOpenModal(true)}
      >
        Envoyer
      </button>

      {isOpenModal && 
        <Modal
          isOpenModal={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <h2>Récapitulatif de votre sélection :</h2>
            <p>{selectedImages.length} {selectedImages.length > 1 ? "Photos sélectionnées" : " Photo sélectionnée"} </p>
            <div className="flex flex-wrap gap-4 my-4 items-center justify-center max-h-[300px] overflow-y-auto">
              {selectedImages.map((src, index) => (
                <Image
                  src={src}
                  alt={`Selected image ${index + 1}`}
                  quality={70}
                  width={200}
                  height={200}
                  loading="lazy"
                  key={index}
                />
              ))}
            </div>

            {breakdown && (
              <div className="w-full max-w-xs mb-4 text-sm text-black bg-gray-100 rounded p-3">
                <div className="flex justify-between">
                  <span>{breakdown.formuleLabel}</span>
                  <span>{breakdown.basePrice} €</span>
                </div>
                {breakdown.extraPhotosCount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>
                      {breakdown.extraPhotosCount} photo{breakdown.extraPhotosCount > 1 ? "s" : ""} suppl. ×{" "}
                      {breakdown.extraPhotoPrice} €
                    </span>
                    <span>{breakdown.extraPhotosCost} €</span>
                  </div>
                )}
                {pricingConfig && pricingConfig.options.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-300 space-y-1">
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
                <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-gray-300">
                  <span>Total</span>
                  <span>{breakdown.total} €</span>
                </div>
              </div>
            )}

            <p className="text-sm md:text-base mb-4">Veuillez entrer votre adresse e-mail pour recevoir le récapitulatif de votre sélection.</p>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              className="mb-4 w-full max-w-xs p-2 border border-gray-300 rounded text-black"
              required
            />
            {status.isSuccess && <p className="text-green-500 text-sm md:text-base md:mb-3">Votre sélection a bien été prise en compte !<br/>(Il se peut que l’e-mail de confirmation arrive dans vos spams, pensez à bien vérifier.)</p>}
            <button
                className={`rounded border border-primary bg-[#1e3d59] p-3 text-white ${status.isLoading || status.isSuccess ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-90 "}`}
                disabled={status.isLoading || status.isSuccess}
                type="submit"
            >
                {status.isLoading && "Envoi en cours..." || status.isSuccess && "Sélection envoyée" || status.isError && "Erreur lors de l'envoi" || "Envoyer la sélection"}
            </button>           
          </form>
        </Modal>
      }
    </div>
  );
};

export default SendingSelection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";
import CommandeEmail from "@/templates/CommandeEmail";
import { fetchEmail } from "@/utils/emailService";

interface SelectedImages {
  selectedImages: string[];
}

const SendingSelection = ({ selectedImages }: SelectedImages ) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    await fetchEmail(
      email,
      "Votre commande est confirmée !",
      <CommandeEmail selectedImages={selectedImages} />,
      setStatus);
  };


  return (
    <div className="w-full flex flex-col items-end pr-4">
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

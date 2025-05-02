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
    await fetchEmail(
      "yanis1.encognere@gmail.com",
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
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2>Récapitulatif de votre séléction :</h2>
            <p>{selectedImages.length} Photos séléctionnées</p>
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
            {status.isSuccess && <p className="text-green-500">Votre sélection a bien été envoyée ! Le récapitulatif vous a également été envoyé par e-mail.<br/>(Il se peut que l’e-mail arrive dans les spams, pensez à bien vérifier.)</p>}
            <button
                className={`rounded border border-primary bg-[#1e3d59] p-3 text-white`}
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

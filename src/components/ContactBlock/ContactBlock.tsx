"use client";
import Link from "next/link";
import { useState } from "react";
import { fetchEmail } from "@/utils/emailService";
import ContactEmail from "@/templates/ContactEmail";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const inputCls =
  "w-full bg-foreground/[0.04] border border-foreground/[0.13] px-4 py-3 text-sm focus:outline-none focus:border-orange transition-colors placeholder:text-foreground/25";

const Contact = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      details: (form.elements.namedItem("details") as HTMLTextAreaElement)?.value || "",
    };
    await fetchEmail(
      "ianaletrillard3@gmail.com",
      "Demande de contact",
      <ContactEmail
        name={formData.name}
        email={formData.email}
        phone={formData.phone}
        details={formData.details}
      />,
      setStatus
    );
  };

  const buttonLabel =
    (status.isLoading && "Envoi en cours…") ||
    (status.isSuccess && "Message envoyé !") ||
    (status.isError && "Erreur d'envoi, réessayez") ||
    "Envoyer le message";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
      {/* Formulaire */}
      <div className="lg:col-span-3">
        {status.isSuccess ? (
          <div className="py-16">
            <div className="w-16 h-px bg-orange mb-8" />
            <h2 className="font-serif text-3xl mb-4">Message envoyé !</h2>
            <p className="text-foreground/55 leading-relaxed">
              Merci pour votre message. Nous vous répondrons dans les 24
              heures ouvrées. En attendant, n&apos;hésitez pas à nous suivre
              sur Instagram.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-foreground/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Nom complet
                </label>
                <input required type="text" name="name" className={inputCls} placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-foreground/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Email
                </label>
                <input required type="email" name="email" className={inputCls} placeholder="vous@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-foreground/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                Téléphone
              </label>
              <input type="tel" name="phone" className={inputCls} placeholder="+33 6 00 00 00 00" />
            </div>
            <div>
              <label className="block text-foreground/45 text-[10px] tracking-[0.2em] uppercase mb-2">
                Votre message
              </label>
              <textarea
                required
                rows={5}
                name="details"
                className={inputCls + " resize-none"}
                placeholder="Parlez-nous de votre projet, de vos animaux, de ce que vous souhaitez..."
              />
            </div>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <button
                type="submit"
                disabled={status.isLoading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-custom-white font-medium hover:bg-[#e85a30] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {buttonLabel}
              </button>
              <p className="text-foreground/30 text-xs">Réponse sous 24h ouvrées</p>
            </div>
          </form>
        )}
      </div>

      {/* Infos */}
      <div className="lg:col-span-2 space-y-10 pt-4">
        <div>
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-6">Nous trouver</p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-orange"><HiOutlineLocationMarker className="w-4 h-4" /></div>
              <div>
                <p className="text-foreground/35 text-[10px] tracking-[0.2em] uppercase mb-0.5">Adresse</p>
                <p className="text-sm">6 rue Georges Escoulan, 44600 Saint-Nazaire</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-orange"><HiOutlinePhone className="w-4 h-4" /></div>
              <div>
                <p className="text-foreground/35 text-[10px] tracking-[0.2em] uppercase mb-0.5">Téléphone</p>
                <a href="tel:+33781951503" className="text-sm hover:text-orange transition-colors">
                  07 81 95 15 03
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-0.5 text-orange"><HiOutlineMail className="w-4 h-4" /></div>
              <div>
                <p className="text-foreground/35 text-[10px] tracking-[0.2em] uppercase mb-0.5">Email</p>
                <a href="mailto:contact@focusetlumiere.fr" className="text-sm hover:text-orange transition-colors">
                  contact@focusetlumiere.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-10">
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-5">Disponibilités</p>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60">Tous les jours</span>
            <span className="text-foreground/35">9h00 – 20h00</span>
          </div>
          <p className="text-foreground/30 text-xs mt-2">Sur rendez-vous, en semaine comme le week-end.</p>
        </div>

        <div className="border-t border-foreground/10 pt-10">
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-4">Réseaux sociaux</p>
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/focusetlumiere/"
              target="_blank"
              rel="noopener"
              className="p-3.5 border border-foreground/12 flex-1 text-center hover:border-yellow/35 transition-colors"
            >
              <p className="text-foreground/35 text-[9px] tracking-[0.2em] uppercase">Instagram</p>
              <p className="text-yellow text-xs mt-1">@focusetlumiere</p>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61567770331945"
              target="_blank"
              rel="noopener"
              className="p-3.5 border border-foreground/12 flex-1 text-center hover:border-yellow/35 transition-colors"
            >
              <p className="text-foreground/35 text-[9px] tracking-[0.2em] uppercase">Facebook</p>
              <p className="text-yellow text-xs mt-1">Focus &amp; Lumière</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

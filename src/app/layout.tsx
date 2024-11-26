/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Focus & Lumière",
  description:
    "Focus & Lumière, duo de photographes professionnels à Saint-Nazaire. Découvrez nos services de photographie pour en savoir plus sur nous et notre travail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Focus & Lumière",
    url: "https://focusetlumiere.fr",
    logo: "https://focusetlumiere.fr/favicon.ico",
    sameAs: [
      "https://www.facebook.com/focusetlumiere",
      "https://www.instagram.com/focusetlumiere",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-7-81-95-15-03",
      contactType: "Customer Service",
      areaServed: "FR",
      availableLanguage: "French",
    },
  };

  return (
    <html lang="fr">
      <Head>
        <title>Focus & Lumière</title>
        <meta
          name="description"
          content="Focus & Lumière, duo de photographes professionnels à Saint-Nazaire. Découvrez nos services de photographie pour en savoir plus sur nous et notre travail."
        />
        <meta property="og:title" content="Focus et Lumière - Duo de Photographes à Saint-Nazaire"/>
        <meta property="og:description" content="Découvrez Focus et Lumière, votre duo de photographes professionnels à Saint-Nazaire, spécialisé en portraits humains, animaliers et photographie sportive. Capturez vos moments les plus précieux avec authenticité et créativité."/>
        <meta property="og:image" content="https://focusetlumiere.fr/photo-face-chat.webp"/>
        <meta property="og:url" content="https://focusetlumiere.fr"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Focus et Lumière"/>
        <meta property="og:locale" content="fr_FR"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}

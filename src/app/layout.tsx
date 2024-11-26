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
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/logoFocusEtLumiere.png" />
        <title>
          Focus & Lumière, photographes professionnels à Saint-Nazaire
        </title>
        <meta
          name="description"
          content="Focus & Lumière, duo de photographes professionnels à Saint-Nazaire. Découvrez nos services de photographie pour en savoir plus sur nous et notre travail."
        />
        <meta
          name="keywords"
          content="photographes Saint-Nazaire, photos animalières, photos sportives, portraits, photographie professionnelle, Loire-Atlantique"
        />
        <meta
          property="og:title"
          content="Focus et Lumière - Duo de Photographes à Saint-Nazaire"
        />
        <meta
          property="og:description"
          content="Découvrez Focus et Lumière, votre duo de photographes professionnels à Saint-Nazaire, spécialisé en portraits humains, animaliers et photographie sportive. Capturez vos moments les plus précieux avec authenticité et créativité."
        />
        <meta
          property="og:image"
          content="https://focusetlumiere.fr/photo-face-chat.webp"
        />
        <meta property="og:url" content="https://focusetlumiere.fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Focus & Lumière, photographes professionnels à Saint-Nazaire"
        />
        <meta property="og:locale" content="fr_FR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Photographer",
              name: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
              url: "https://focusetlumiere.fr",
              logo: "https://focusetlumiere.fr/logoFocusEtLumiere.png", // Assurez-vous de mettre le bon chemin pour votre logo
              image: "https://focusetlumiere.fr/photo-face-chat.webp", // Exemple d'image, mettez la vôtre
              description:
                "Focus et Lumière est un duo de photographes professionnels à Saint-Nazaire, spécialisé dans les portraits animaliers, humains, et la photographie sportive.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6 rue Georges Escoulan",
                addressLocality: "Saint-Nazaire",
                addressRegion: "Loire-Atlantique",
                postalCode: "44600",
                addressCountry: "FR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33 7 81 95 15 03",
                contactType: "customer service",
                areaServed: "FR",
                availableLanguage: "fr",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61567770331945",
                "https://www.instagram.com/FocusEtLumiere",
              ],
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}

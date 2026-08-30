import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const limelight = localFont({
  src: "../../../public/fonts/limelight-v19-latin-regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-limelight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
  description:
    "Focus & Lumière, duo de photographes professionnels à Saint-Nazaire. Découvrez nos services de photographie pour en savoir plus sur nous et notre travail.",
  keywords: [
    "photographes Saint-Nazaire",
    "photos animalières",
    "photos sportives",
    "portraits",
    "photographie professionnelle",
    "photographie",
    "photos",
    "photo",
    "Saint-Nazaire",
    "Saint-Brevin",
    "Nantes",
    "La Baule",
    "Pornichet",
    "brière",
    "Savenay",
    "Pornic",
    "Loire-Atlantique",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/flavicon.ico",
  },
  alternates: {
    canonical: "https://focusetlumiere.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://focusetlumiere.fr",
    title: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
    description:
      "Découvrez Focus et Lumière, votre duo de photographes professionnels à Saint-Nazaire, spécialisé en portraits humains, animaliers et photographie sportive.",
    siteName: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
    images: [
      {
        url: "https://focusetlumiere.fr/images/accueil/photo-studio.webp",
        width: 1200,
        height: 630,
        alt: "Photo professionnelle de Focus & Lumière",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
    description:
      "Photographes professionnels à Saint-Nazaire, spécialisés en portraits et photographie animalière.",
    images: ["https://focusetlumiere.fr/images/accueil/photo-studio.webp"],
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`dark ${dmSans.variable} ${limelight.variable}`}>
      <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Focus & Lumière" />
      <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Photographer",
              name: "Focus & Lumière, photographes professionnels à Saint-Nazaire",
              url: "https://focusetlumiere.fr",
              logo: "https://focusetlumiere.fr/logoFocusEtLumiere.png",
              image: "https://focusetlumiere.fr/images/accueil/photo-studio.webp",
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
                availableLanguage: ["fr"],
              },
              areaServed: {
                "@type": "Place",
                name: [
                  "Saint-Nazaire",
                  "Saint-Brevin",
                  "Nantes",
                  "La Baule",
                  "Pornichet",
                  "brière",
                  "Savenay",
                  "Pornic",
                  "Loire-Atlantique",
                ],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61567770331945",
                "https://www.instagram.com/FocusEtLumiere",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
            }),
          }}
        />
    </head>
    <body>{children}</body>
  </html>
);
}

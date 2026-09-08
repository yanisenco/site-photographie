import Link from "next/link";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services & Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/vos-photos", label: "Accéder à vos photos" },
];

export default function Footer() {
  return (
    <footer className="bg-custom-white dark:bg-blue-dark border-t border-blue/10 dark:border-custom-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-lg font-serif tracking-wide mb-4">Focus & Lumière</p>
          <p className="text-foreground/55 text-sm leading-relaxed">
            Duo de photographes basé à Saint-Nazaire, spécialisés dans les
            animaux de compagnie, les portraits et les événements.
          </p>
        </div>

        <div>
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-5">
            Navigation
          </p>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  rel="canonical"
                  className="text-foreground/55 hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-yellow text-[10px] tracking-[0.25em] uppercase mb-5">
            Contact
          </p>
          <div className="space-y-2 text-sm text-foreground/55 mb-6">
            <p>contact@focusetlumiere.fr</p>
            <p>07 81 95 15 03</p>
            <p>6 rue Georges Escoulan, 44600 Saint-Nazaire</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61567770331945"
              target="_blank"
              rel="noopener"
              title="Focus & Lumière sur Facebook"
              className="rounded-full p-2.5 border border-foreground/15 text-foreground/55 hover:border-yellow hover:text-yellow transition-colors"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4 block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.google.com/maps/place/Focus+%26+Lumi%C3%A8re/@47.2768234,-2.2391615,13z"
              target="_blank"
              rel="noopener"
              title="Focus & Lumière sur Google Maps"
              className="rounded-full p-2.5 border border-foreground/15 text-foreground/55 hover:border-yellow hover:text-yellow transition-colors"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4 block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/focusetlumiere/"
              target="_blank"
              rel="noopener"
              title="Focus & Lumière sur Instagram"
              className="rounded-full p-2.5 border border-foreground/15 text-foreground/55 hover:border-yellow hover:text-yellow transition-colors"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4 block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue/10 dark:border-custom-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-foreground/40 text-xs">
            © 2026 Focus & Lumière — Tous droits réservés.
          </p>
          <Link
            href="/mentions-legales"
            rel="canonical"
            className="text-foreground/40 text-xs hover:text-foreground transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

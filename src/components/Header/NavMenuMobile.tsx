"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLockClosedOutline } from "react-icons/io5";

interface NavMenuMobileProps {
  isOpen: boolean;
  closeDropdown: () => void;
}

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function NavMenuMobile({ isOpen, closeDropdown }: NavMenuMobileProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 bg-blue/90 backdrop-blur-sm ${
        isOpen ? "flex" : "hidden"
      } flex-col items-center justify-center gap-12 md:hidden`}
    >
      <ul className="flex flex-col gap-8 items-center">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              rel="canonical"
              onClick={closeDropdown}
              className={`text-2xl font-serif tracking-wide transition-colors ${
                pathname === l.href ? "text-yellow" : "text-custom-white/80 hover:text-custom-white"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/vos-photos"
            rel="canonical"
            onClick={closeDropdown}
            className={`flex items-center gap-2 text-2xl font-serif tracking-wide transition-colors ${
              pathname === "/vos-photos" ? "text-yellow" : "text-custom-white/80 hover:text-custom-white"
            }`}
          >
            <IoLockClosedOutline className="w-4 h-4" /> Mes photos
          </Link>
        </li>
      </ul>

      <Link
        href="/contact"
        onClick={closeDropdown}
        className="px-8 py-3 bg-orange text-custom-white text-sm font-medium tracking-wide"
      >
        Réserver une séance
      </Link>
    </div>
  );
}

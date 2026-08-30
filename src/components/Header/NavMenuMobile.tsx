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

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-custom-white dark:bg-blue-dark border-t border-blue/10 dark:border-custom-white/10">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          rel="canonical"
          onClick={closeDropdown}
          className={`block w-full text-left px-8 py-4 text-xs tracking-[0.2em] uppercase border-b border-foreground/[0.06] ${
            pathname === l.href ? "text-yellow" : "text-foreground/60"
          }`}
        >
          {l.label}
        </Link>
      ))}
      <Link
        href="/vos-photos"
        rel="canonical"
        onClick={closeDropdown}
        className={`flex items-center gap-2 w-full text-left px-8 py-4 text-xs tracking-[0.2em] uppercase border-b border-foreground/[0.06] ${
          pathname === "/vos-photos" ? "text-yellow" : "text-foreground/60"
        }`}
      >
        <IoLockClosedOutline className="w-3 h-3" /> Mes photos
      </Link>
      <div className="p-6">
        <Link
          href="/contact"
          onClick={closeDropdown}
          className="block w-full text-center py-3 bg-orange text-custom-white text-sm font-medium tracking-wide"
        >
          Réserver une séance
        </Link>
      </div>
    </div>
  );
}

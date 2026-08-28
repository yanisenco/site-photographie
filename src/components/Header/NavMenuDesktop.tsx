"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLockClosedOutline } from "react-icons/io5";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function NavMenuDesktop() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-8">
      {links.map((l) => {
        const active =
          pathname === l.href ||
          (l.href === "/services" && pathname?.startsWith("/service"));
        return (
          <li key={l.href}>
            <Link
              href={l.href}
              title={l.label}
              rel="canonical"
              className={`text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                active ? "text-yellow" : "text-foreground/55 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          href="/vos-photos"
          title="Mes photos"
          rel="canonical"
          className={`flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase px-3 py-1.5 border transition-colors duration-200 ${
            pathname === "/vos-photos"
              ? "border-yellow text-yellow"
              : "border-foreground/20 text-foreground/55 hover:text-foreground hover:border-foreground/40"
          }`}
        >
          <IoLockClosedOutline className="w-3.5 h-3.5" />
          Mes photos
        </Link>
      </li>
    </ul>
  );
}

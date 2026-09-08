"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import NavMenuMobile from "./NavMenuMobile";
import NavMenuDesktop from "./NavMenuDesktop";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparent);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const closeDropdown = () => setIsOpen(false);
  const solid = !transparent || scrolled || isOpen;

  return (
    <>
      <header
        id="site-header"
        className={`${transparent || isOpen ? "fixed" : "sticky"} inset-x-0 top-0 w-full z-50 transition-colors duration-300 ${
          solid
            ? "bg-blue/95 backdrop-blur-sm border-b border-custom-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Logo />

          <NavMenuDesktop />

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              title="Réserver une séance"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-custom-white text-sm font-medium hover:bg-[#e85a30] transition-colors"
            >
              Réserver
            </Link>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>

      <NavMenuMobile isOpen={isOpen} closeDropdown={closeDropdown} />
    </>
  );
}

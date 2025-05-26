"use client";
import { useState } from "react";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import NavMenuMobile from "./NavMenuMobile";
import NavMenuDesktop from "./NavMenuDesktop";
import LightModeToggle from "../LightModeToggle/LightModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  return (
    <nav
      id="site-header"
      className="sticky top-0 w-full z-50 bg-custom-white dark:bg-blue dark:text-custom-white shadow-lg shadow-[#ffc13b2b]"
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <Logo />

        <div className="md:block hidden">
          <LightModeToggle />
        </div>

        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavMenuMobile isOpen={isOpen} closeDropdown={closeDropdown} />
        <NavMenuDesktop />
      </div>
    </nav>
  );
}

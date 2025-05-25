"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "./LogoLightMode.svg";
import LogoDark from "./LogoDarkMode.svg";
import LightModeToggle from "../LightModeToggle/LightModeToggle";
import DropdownHeader from "./DropdownHeader";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown: () => void = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      id="site-header"
      className="sticky top-0 w-full z-50 bg-custom-white dark:bg-blue dark:text-custom-white shadow-lg shadow-[#ffc13b2b]"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/#homepage"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          rel="canonical"
          title="redirection-page-acceuil"
        >
          <div className="flex">
            <Image
              src={LogoLight}
              alt="Logo Focus et Lumière en version claire"
              width={64}
              height={64}
              className="block dark:hidden"
            />
            <Image
              src={LogoDark}
              alt="Logo Focus et Lumière en version sombre"
              width={64}
              height={64}
              className="hidden dark:block"
            />
          </div>

        </Link>
        <LightModeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue dark:text-custom-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              className={`origin-center transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1 -translate-x-1" : ""
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={`origin-center transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className={`origin-center transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1 -translate-x-1" : ""
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
  className={`${isOpen ? "flex" : "hidden"} flex-col items-center justify-center w-full md:block md:w-auto`}
  id="navbar-solid-bg"
>
  <ul className="flex flex-col font-medium mt-4 rounded-lg dark:text-custom-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl ">
            <DropdownHeader/>
            <li>
              <Link
                href="/tarifs"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange md:hover:dark:text-yellow hover:bg-[#ffc13b2b]"
                onClick={() => closeDropdown()}
                rel="canonical"
                title="redirection-page-tarifs"
              >
                Tarifs
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent md:border-0 md:hover:text-orange md:hover:dark:text-yellow hover:bg-[#ffc13b2b]"
                onClick={() => closeDropdown()}
                rel="canonical"
                title="redirection-section-contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#a-propos-de-nous"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-orange md:hover:dark:text-yellow hover:bg-[#ffc13b2b]"
                onClick={() => closeDropdown()}
                rel="canonical"
                title="redirection-section-a-propos-de-nous"
              >
                À propos de nous
              </Link>
            </li>
            <li>
              <Link
                href="/vos-photos"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-orange md:hover:dark:text-yellow hover:bg-[#ffc13b2b]"
                onClick={() => closeDropdown()}
                rel="canonical"
                title="redirection-section-a-propos-de-nous"
              >
                <span className="md:hidden block">Accédez à vos photos</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 md:block hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

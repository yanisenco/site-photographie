"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logoFocusEtLumiere.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref pour l'encart dropdown
  const buttonDropdownnRef = useRef(null); // Ref pour l'encart dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Fonction pour fermer la dropdown si l'on clique en dehors
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node) &&
        buttonDropdownnRef.current &&
        !(buttonDropdownnRef.current as HTMLElement).contains(
          event.target as Node
        ) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Fonction pour fermer la dropdown si l'on appuie sur Échap
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    // Ajouter les écouteurs d'événements
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    // Nettoyer les écouteurs lorsque le composant est démonté
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#f5f0e1] shadow-lg shadow-[#ffc13b2b]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/#homepage"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            className="h-10 w-10"
            alt="Logo Focus et Lumière"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Focus & Lumière
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#f5f0e2] focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1 -translate-x-1" : ""
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transformOrigin: "center" }} // Centrer la rotation
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transformOrigin: "center" }} // Centrer la rotation (même si invisibilité)
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className={`transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1 -translate-x-1" : ""
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transformOrigin: "center" }} // Centrer la rotation
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-[#f5f0e1] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl ">
            <li className="relative">
              <button
                onClick={() => toggleDropdown()}
                className="flex block py-2 px-3 md:p-0 rounded md:text-[#ff6e40] "
                ref={buttonDropdownnRef}
              >
                Services
                <svg
                  className={` ml-1  -mr-1 h-5 w-5 md:text-[#ff6e40] ${
                    isDropdownOpen ? "duration-100 rotate-180" : "duration-100 "
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 bg-[#f5f0e1] rounded-lg shadow-lg "
                  ref={dropdownRef}
                >
                  <li>
                    <Link
                      href="/service/portrait-studio"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
                      onClick={() => setIsOpen(false)}
                    >
                      Portrait studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/portrait-exterieur"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
                      onClick={() => setIsOpen(false)}
                    >
                      Portrait extérieur
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/portrait-sportif"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
                      onClick={() => setIsOpen(false)}
                    >
                      Portrait sportif
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] hover:bg-[#ffc13b2b]"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] hover:bg-[#ffc13b2b]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#a-propos-de-nous"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] hover:bg-[#ffc13b2b]"
                onClick={() => setIsOpen(false)}
              >
                À propos de nous
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

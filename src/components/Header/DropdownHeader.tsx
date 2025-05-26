"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function DropdownHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref pour l'encart dropdown

  const closeDropdown: () => void = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Fonction pour fermer la dropdown si l'on clique en dehors
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown()}
                className="relative flex block py-2 px-3 md:p-0 rounded md:text-orange md:dark:text-yellow z-30"
              >
                Services
                <svg
                  className={` ml-1  -mr-1 h-5 w-5 md:text-orange md:dark:text-yellow ${
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
                <div className="relative">
                <div className="fixed sm:hidden inset-0 z-20 backdrop-blur-sm bg-black/20" onClick={closeDropdown} />
                <ul className="absolute left-0 mt-2 bg-custom-white dark:bg-blue rounded-lg shadow-lg z-20">
                  <li>
                    <Link
                      href="/service/portrait-studio"
                      className="block px-4 py-2 hover:bg-[#ffc13b2b]"
                      onClick={closeDropdown}
                      rel="canonical"
                      title="Portrait studio"
                    >
                      Portrait studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/portrait-exterieur"
                      className="block px-4 py-2 hover:bg-[#ffc13b2b]"
                      onClick={closeDropdown}
                      rel="canonical"
                      title="Portrait extérieur"
                    >
                      Portrait extérieur
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/photo-sportive"
                      className="block px-4 py-2 hover:bg-[#ffc13b2b]"
                      onClick={closeDropdown}
                      rel="canonical"
                      title="Photos sportives"
                    >
                      Photo sportive
                    </Link>
                  </li>
                </ul>
              </div>
              )}
            </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logoFocusEtLumiere.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f5f0e1] shadow-lg shadow-[#ffc13b2b]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            className="h-8"
            alt="Flowbite Logo"
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#f5f0e2] focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-[#f5f0e1] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex block py-2 px-3 md:p-0 rounded  md:text-[#ff6e40] "
              >
                Services
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
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
                <ul className="absolute left-0 mt-2 bg-[#f5f0e1] rounded-lg shadow-lg ">
                  <li>
                    <Link
                      href="/service/portrait-studio"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
                    >
                      Portrait studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/portrait-exterieur"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
                    >
                      Portrait extérieur
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/portrait-sportif"
                      className="block px-4 py-2  hover:bg-[#ffc13b2b]"
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
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Tarifs
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#a-propos-de-nous"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff6e40] dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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

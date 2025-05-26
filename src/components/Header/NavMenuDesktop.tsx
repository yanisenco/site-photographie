import Link from "next/link";
import DropdownHeader from "./DropdownHeader";

export default function NavMenuDesktop() {
  return (
    <ul className="hidden md:flex flex-row items-center gap-8 font-bold text-lg">
      <DropdownHeader />
      <li>
        <Link href="/tarifs" className="hover:text-yellow" title="Tarifs">Tarifs</Link>
      </li>
      <li>
        <Link href="/#contact" className="hover:text-yellow" title="Contact">Contact</Link>
      </li>
      <li>
        <Link href="/a-propos" className="hover:text-yellow" title="À propos">À propos de nous</Link>
      </li>
      <li>
        <Link href="/vos-photos" className="hover:text-yellow flex" title="Vos photos"> Vos photos
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6 md:block hidden ml-1"
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
  );
}
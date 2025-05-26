import Link from "next/link";
import DropdownHeader from "./DropdownHeader";
import LightModeToggle from "../LightModeToggle/LightModeToggle";

interface NavMenuMobileProps {
  isOpen: boolean;
  closeDropdown: () => void;
}

export default function NavMenuMobile({ isOpen, closeDropdown }: NavMenuMobileProps) {
  return (
    <div
      className={`
        fixed inset-0 z-40 transition-all duration-300 
        bg-custom-white/95 dark:bg-blue/95
        ${isOpen ? "flex" : "hidden"}
        flex-col items-center justify-center
        md:static md:w-auto md:bg-transparent md:flex-row md:items-center
      `}
    >
      <ul className="flex flex-col gap-8 font-bold text-xl items-center md:flex-row md:gap-10 md:text-lg">
        <DropdownHeader />
        <li>
          <Link href="/tarifs"
            className="hover:text-yellow"
            title="redirection-page-tarifs"
            onClick={closeDropdown}>Tarifs</Link>
        </li>
        <li>
          <Link href="/#contact"
            className="hover:text-yellow"
            title="redirection-section-contact"
            onClick={closeDropdown}>Contact</Link>
        </li>
        <li>
          <Link href="/#a-propos-de-nous"
            className="hover:text-yellow"
            title="redirection-section-a-propos-de-nous"
            onClick={closeDropdown}>À propos de nous</Link>
        </li>
        <li>
          <Link href="/vos-photos"
            className="hover:text-yellow"
            title="redirection-section-a-propos-de-nous"
            onClick={closeDropdown}>
            <span className="md:hidden block">Accédez à vos photos</span>
            <svg /* ... */ className="size-6 md:block hidden" /* ... */ />
          </Link>
        </li>
      </ul>
      
      <div className="mt-10 md:hidden">
        <LightModeToggle />
      </div>
    </div>
  );
}

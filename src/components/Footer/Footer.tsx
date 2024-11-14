import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 shadow-inner shadow-[#ffc13b80]">
      <div className="p-4 md:flex md:items-center md:justify-between m-auto w-9/12">
        <span className="text-sm sm:text-center">
          © 2024 Focus et Lumière. Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <Link
              href="/private-policy"
              className="hover:underline me-4 md:me-6"
            >
              Mentions Légales
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

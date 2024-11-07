export default function Footer() {
  return (
    <footer className="rounded-lg shadow-inner shadow-[#ff6e40] m-auto w-9/12 my-6">
      <div className="mx-5 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024 Focus et Lumière. Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

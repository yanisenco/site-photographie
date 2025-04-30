import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow-inner shadow-[#ffc13b80]">
      <div className="p-4 md:flex md:items-center md:justify-between m-auto w-9/12">
        <span className="text-sm sm:text-center">
          © 2024 Focus et Lumière. Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <Link
              href="/mentions-legales"
              className="hover:underline me-4 md:me-6"
              rel="canonical"
              title="redirection-page-mention-legales"
            >
              Mentions Légales
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              className="hover:underline"
              rel="canonical"
              title="redirection-section-contact"
            >
              Contact
            </Link>
          </li>
          <li className="flex">
            <Link
              href="https://www.facebook.com/profile.php?id=61567770331945"
              target="_blank"
              rel="noopener"
              className=" ml-4 rounded-full p-2 shadow-md hover:shadow-inner"
              title="redirection-page-facebook-focus-et-lumiere-officielle"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.google.com/maps/place/Focus+%26+Lumi%C3%A8re/@47.2768234,-2.2391615,13z/data=!4m6!3m5!1s0x4805650c727b2f11:0x6eae1052bd1a2961!8m2!3d47.281767!4d-2.224451!16s%2Fg%2F11y8_q3v5b?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              className="ml-2 rounded-full p-2 shadow-md hover:shadow-inner"
              target="_blank"
              rel="noopener"
              title="redirection-fiche-google-maps-focus-et-lumiere"
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/focusetlumiere/"
              target="_blank"
              rel="noopener"
              className="ml-2 rounded-full p-2 shadow-md hover:shadow-inner"
              title="redirection-page-instagram-focus-et-lumiere-officielle"
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

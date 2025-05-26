import Image from "next/image";
import Link from "next/link";
import LogoLight from "./LogoLightMode.svg";
import LogoDark from "./LogoDarkMode.svg";

export default function Logo() {
  return (
    <Link
      href="/#accueil"
      className="flex items-center space-x-3 rtl:space-x-reverse z-50"
      rel="canonical"
      title="redirection-page-accueil Focus et Lumière"
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
  );
}

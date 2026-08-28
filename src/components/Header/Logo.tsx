import Image from "next/image";
import Link from "next/link";
import LogoDark from "./LogoDarkMode.svg";

export default function Logo() {
  return (
    <Link
      href="/#accueil"
      className="flex items-center space-x-3 rtl:space-x-reverse z-50"
      rel="canonical"
      title="redirection-page-accueil Focus et Lumière"
    >
      <Image
        src={LogoDark}
        alt="Logo Focus et Lumière"
        width={64}
        height={64}
        priority
      />
      <p className="text-lg sm:text-xl font-serif tracking-wide">Focus & Lumière</p>
    </Link>
  );
}

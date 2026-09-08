import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center px-6">
      <div>
        <p className="font-serif text-8xl text-orange mb-4">404</p>
        <p className="text-lg text-foreground/60 mb-8">
          Oups ! La page que vous cherchez n&apos;existe pas.
        </p>
        <Link
          href="/"
          rel="canonical"
          title="Retour à l'accueil"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange text-custom-white font-medium hover:bg-[#e85a30] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default Custom404;

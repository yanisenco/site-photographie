import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div className="p-8">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <p className="text-3xl my-4">Oups ! La page que vous cherchez n&apos;existe pas.</p>
        <Link href="/" className="text-3xl text-blue-500">
         Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
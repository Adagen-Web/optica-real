'use client';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] bg-off-white flex flex-col justify-center items-center text-center px-6 font-heebo">
      <h1 className="text-7xl font-bold text-orange mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
        Página não encontrada
      </h2>
      <p className="text-gray-medium max-w-md mb-8">
        A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
      </p>
      <Link
        href="/"
        className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;

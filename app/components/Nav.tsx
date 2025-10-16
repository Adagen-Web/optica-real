'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu quando a URL muda
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-off-white w-full text-gray-dark border-b border-gray-300">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="/" className="block">
          <img
            src="/logo-optica.png"
            alt="Óptica Real"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-black text-base font-heebo font-semibold tracking-wide">
          <Link href="/" className="hover:text-orange transition-colors">HOME</Link>
          <Link href="/sobre" className="hover:text-orange transition-colors">SOBRE</Link>
          <Link href="/marcas" className="hover:text-orange transition-colors">MARCAS</Link>
          <Link href="/contato" className="hover:text-orange transition-colors">CONTATO</Link>
        </nav>

        {/* Ícones sociais */}
        <div className="hidden md:flex gap-4 text-orange text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/5551985011913" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-orange"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-off-white text-black text-sm font-heebo font-semibold px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-orange">HOME</Link>
          <Link href="/sobre" className="block hover:text-orange">SOBRE</Link>
          <Link href="/marcas" className="block hover:text-orange">MARCAS</Link>
          <Link href="/contato" className="block hover:text-orange">CONTATO</Link>

          <div className="flex gap-4 mt-4 text-orange">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

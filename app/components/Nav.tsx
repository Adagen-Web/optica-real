'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu quando a URL muda
  useEffect(() => {
    setIsOpen(false);
    setIsProductsMobileOpen(false);
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
          
          {/* Dropdown Produtos */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center cursor-pointer gap-1 hover:text-orange transition-colors">
              PRODUTOS
              <FaChevronDown className={`text-xs transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProductsOpen && (
              <div className="absolute top-full left-0 pt-2 z-50 w-full">
                <div className="bg-white border border-gray-300 rounded shadow-lg py-2 min-w-[200px]">
                  <Link href="/marcas" className="block px-4 py-2 hover:bg-orange hover:text-white transition-colors">
                    Óculos de Sol
                  </Link>
                  <Link href="/marcas" className="block px-4 py-2 hover:bg-orange hover:text-white transition-colors">
                    Armações de Grau
                  </Link>
                  <Link href="/marcas" className="block px-4 py-2 hover:bg-orange hover:text-white transition-colors">
                    Joias
                  </Link>
                  <Link href="/marcas" className="block px-4 py-2 hover:bg-orange hover:text-white transition-colors">
                    Relógios
                  </Link>
                </div>
              </div>
            )}
          </div>

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
          
          {/* Dropdown Produtos Mobile */}
          <div>
            <button
              onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
              className="flex items-center cursor-pointer justify-between w-full hover:text-orange"
            >
              <span>PRODUTOS</span>
              <FaChevronDown className={`text-xs transition-transform ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProductsMobileOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/marcas" className="block hover:text-orange">Óculos de Sol</Link>
                <Link href="/marcas" className="block hover:text-orange">Armações de Grau</Link>
                <Link href="/marcas" className="block hover:text-orange">Joias</Link>
                <Link href="/marcas" className="block hover:text-orange">Relógios</Link>
              </div>
            )}
          </div>

          <Link href="/contato" className="block hover:text-orange">CONTATO</Link>

          <div className="flex gap-4 mt-4 text-orange">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/5551985011913" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

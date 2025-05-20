import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-off-white text-gray-dark">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
              src="/logo-optica.png"
              alt="Óptica Real"
              width={100}
              height={44}
            />
          </a>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-black text-sm font-heebo font-semibold tracking-wide">
          <Link href="/" className="hover:text-orange transition-colors">
            HOME
          </Link>
          <Link href="/sobre" className="hover:text-orange transition-colors">
            SOBRE
          </Link>
          <Link href="#marcas" className="hover:text-orange transition-colors">
            MARCAS
          </Link>
          <Link href="#contato" className="hover:text-orange transition-colors">
            CONTATO
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-orange text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

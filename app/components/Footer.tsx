import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white px-4 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* COLUNA 1: LOCALIZAÇÃO */}
        <div className="space-y-2">
          <p className="text-xl tracking-[2px] text-white font-heebo font-normal">LOCALIZAÇÃO</p>
          <p>Av. Barão do Rio Branco, 58<br />Centro, Torres | RS</p>

          <p className="pt-4 text-xl tracking-[2px] text-white font-heebo font-normal">E-MAIL</p>
          <p>realtorrers@gmail.com</p>

          <p className="pt-4 text-xl tracking-[2px] text-white font-heebo font-normal">FONES</p>
          <p>(51) 3664.6177<br />(51) 3626.1913</p>
        </div>

        {/* COLUNA 2: HORÁRIOS */}
        <div className="space-y-2">
          <p className="text-xl tracking-[2px] text-white font-heebo font-normal">HORÁRIOS DE ATENDIMENTO</p>

          <p>
            <strong>Segunda a sexta-feira</strong><br />
            Das 9:00 às 12:00<br />
            e das 13:30 às 18:30
          </p>

          <p className="pt-4">
            <strong>Sábados</strong><br />
            Das 9:00 às 12:00<br />
            e das 14:00 às 18:00
          </p>

          <p className="pt-4">
            <strong>Dezembro a fevereiro*</strong><br />
            Fechamento às 19:00
          </p>
        </div>

        {/* COLUNA 3: LOGO + REDES SOCIAIS */}
        <div className="flex flex-col items-center space-y-4 gap-4">
          {/* Logo */}
          <a href="/">
            <img
              src="./logo-optica-branco.png"
              alt="Óptica Real"
              className="w-[240px] object-contain"
            />
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition">
              <FaWhatsapp size={16} />
            </a>
            <a href="#" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition">
              <HiArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

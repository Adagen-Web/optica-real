'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SectionContato = () => {
  return (
    <section className="bg-[#f7f6f2] py-28 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-neutral-900">
        {/* Coluna: E-mail e redes sociais */}
        <div className="space-y-4">
          <div>
            <h4 className="tracking-[2.5px] uppercase text-xl font-light font-heebo">E-mail</h4>
            <p className="mt-1 text-base font-public-sans">contato@oticarealtorres.com.br</p>
          </div>
          <div>
            <h4 className="tracking-[2.5px] uppercase text-xl font-light font-heebo">Redes Sociais</h4>
            <p className="mt-1 text-base font-public-sans">/opticarealtorres</p>
          </div>
        </div>

        {/* Coluna: Localização */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <FaMapMarkerAlt size={24} />
          <h4 className="tracking-[2.5px] uppercase text-xl font-light font-heebo">Localização</h4>
          <p className="text-base leading-snug font-public-sans">
            Av. Barão do Rio Branco, 58<br />
            Centro, Torres | RS
          </p>
        </div>

        {/* Coluna: Telefones */}
        <div className="space-y-3 font-public-sans">
          <h4 className="tracking-[2.5px] uppercase text-xl font-light font-heebo">Telefones</h4>
          <p>51 | 3664.1677</p>
          <p>51 | 3626.1913</p>
          <p>51 | 99801.1913</p>
        </div>
      </div>
    </section>
  );
};

export default SectionContato;

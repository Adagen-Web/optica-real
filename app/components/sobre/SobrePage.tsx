import Image from 'next/image';

const SobrePage = () => {
  return (
    <main className="w-full">
      {/* Hero da logo */}
      <section className="relative w-full h-[65vh] border-b border-[#707070]">
        <Image
          src="/hero3.png" // substitua com caminho correto
          alt="Fachada Óptica Real"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end pb-16 justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold font-heebo tracking-[2px]">Sobre</h1>
        </div>
      </section>

      {/* Texto institucional */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-[#313131] font-public-sans space-y-6 text-xl leading-relaxed">
          <p>
            Fundada em 1953 na cidade de Torres foi pioneira do ramo.
          </p>
          <p>
            Em 1973 Fernando Nandi e Zenilda, sua esposa, vindos de Osório com filhos estabeleceram-se aqui e passaram a comandar a empresa. 
            Ele com a experiência na ourivesaria e formação em Técnico de Óptica pelo Senac em 1968. 
            Ela com a experiência em comércio desde a sua mocidade.
          </p>
          <p>
            Atualmente a Real é dirigida pela família, com três profissionais ópticos formados que oferecem o respaldo da parte técnica.
          </p>
          <p>
            Em 2013 um importante passo foi dado, com o intuito de oferecer um serviço mais qualificado e ágil, 
            de importar o laboratório óptico GOMES de tecnologia digital diretamente da Itália, berço do setor óptico mundial.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;

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
            Fundada em 1953, em Torres, a Relojoaria e Óptica Real passou a ser comandada por Fernando Nandi em 1973.
            Desde então, ele e seus filhos seguem à frente da empresa, preservando seu caráter familiar e o compromisso com a excelência.
          </p>
          <p>Atualmente, a Óptica conta com uma equipe de 8 colaboradores diretos, atuando com dedicação no segmento óptico,
            sob a supervisão de 3 técnicos ópticos especializados. A empresa também possui um laboratório próprio de lentes,
            o que garante mais controle e agilidade nos processos.</p>
          <p>
            Em 2013, deu um importante passo ao importar da Itália o Laboratório
            Gomes, passando a fabricar lentes digitais com tecnologia de ponta.
            Essa inovação trouxe ainda mais precisão na produção e rapidez nas entregas,
            elevando a experiência dos clientes a um novo patamar.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;

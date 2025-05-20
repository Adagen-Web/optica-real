import Image from 'next/image';

const SobrePage = () => {
  return (
    <main className="w-full">
      {/* Hero da logo */}
      <section className="relative w-full h-[380px] md:h-[480px] border-b border-[#707070]">
        <Image
          src="/hero3.png" // substitua com caminho correto
          alt="Fachada Óptica Real"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end pb-16 justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-heebo tracking-[2px]">Sobre</h1>
        </div>
      </section>

      {/* Texto institucional */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-[#313131] font-public-sans space-y-6 text-xl leading-relaxed">
          <p>
            Em Torres, a Relojoaria e Óptica Real foi fundada em 1953 e, em 1973, foi adquirida por Fernando Nandi,
            que, junto com seus filhos, continua à frente da direção da empresa.
            Trata-se de uma empresa familiar, com 8 colaboradores diretos, atuando no segmento de ótica, sob a
            supervisão de 3 técnicos ópticos e com um laboratório de lentes próprio.
          </p>
          <p>
            Em 2013, a empresa importou diretamente da Itália o Laboratório Gomes, que passou a fabricar lentes digitais
            próprias, com qualidade e alta tecnologia, garantindo precisão nos resultados e agilidade nas entregas aos
            clientes.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;

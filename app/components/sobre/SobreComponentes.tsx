const MissaoVisaoValores = () => {
  return (
    <section className="bg-off-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center relative">
        {/* Texto com sobreposição centralizada */}
        <div className="bg-white shadow-lg p-8 md:p-16 z-10 w-full items-center md:max-w-2xl relative md:-translate-y-8">
          <div className="space-y-14">
            {[
              {
                titulo: 'Missão',
                texto:
                  'Proporcionar saúde visual, beleza e estilo através dos óculos, joias e relógios de qualidade, com atendimento personalizado, valorizando a tradição de mais de 70 anos em Torres e o compromisso de satisfação do cliente.',
              },
              {
                titulo: 'Visão',
                texto:
                  'Ser referência de serviços e produtos de qualidade na região, unindo a tradição e inovação.',
              },
              {
                titulo: 'Valores',
                texto: 'Confiança e transparência, mais de 70 anos de historia; atendimento humanizado, cada cliente é muito importante para nós; qualidade e credibilidade, acompanhar as tendências sem perder a essência da marca Real; valorização da comunidade, orgulho de fazer parte da história de Torres e contribuir para o crescimento da cidade.',
              },
            ].map(({ titulo, texto }) => (
              <div key={titulo} className="flex flex-col md:flex-row gap-16 pl-12 pr-4 items-center">
                <h3 className="text-3xl text-[#313131] font-normal font-heebo w-24 shrink-0">{titulo}</h3>
                <p className="text-[#313131] font-public-sans text-base leading-relaxed text-center md:text-left">{texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem à direita, menor */}
        <div className="md:w-[40%] w-full md:ml-[-15px] z-99 mb-[-50px] flex justify-center">
          <img
            src="./social/logo-optica.png"
            alt="Colaboradora Real"
            className="w-full h-auto object-cover border border-[#0000001A]"
          />
        </div>
      </div>
    </section>
  );
};


const ChamadaJoalheria = () => {
  return (
    <section className="bg-[#BA9557] border-t border-[#707070] px-4 py-12 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-base md:text-lg leading-relaxed font-public-sans font-normal">
          Além de sua forte atuação no setor óptico, a Relojoaria e Óptica Real se destaca pela tradição
          em joalheria e relojoaria, já que a arte de fabricar joias faz parte do seu DNA.
        </p>
        <a href="https://wa.me/5551985011913" target="_blank" rel="noopener noreferrer" className="bg-white cursor-pointer text-gray-900 font-normal font-heebo text-sm px-6 py-3 rounded shadow hover:bg-gray-100">
          Entre em contato
        </a>
      </div>
    </section>
  );
};

export { MissaoVisaoValores, ChamadaJoalheria };

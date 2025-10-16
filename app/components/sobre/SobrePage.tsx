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
            <strong>Desde 1953, tradição e confiança em Torres-RS</strong>
          </p>
          <p>
            Fundada em <strong>1953</strong>, na cidade de <strong>Torres-RS</strong>, a <strong>Óptica Real</strong> foi pioneira no ramo de joias, óculos e relógios, tornando-se referência em qualidade e atendimento.
          </p>
          <p>
            Em <strong>1973</strong>, Fernando Nandi e Zenilda, sua esposa, vindos de Osório com os filhos, estabeleceram-se em Torres e passaram a comandar a empresa. Ele com experiência em ourivesaria e formação em Técnico de Óptica pelo Senac em 1968; ela com vivência no comércio desde a mocidade, sempre prezando pelo bom atendimento e pela relação próxima com os clientes.
          </p>
          <p>
            Atualmente, a <strong>Real</strong> é dirigida pela família, com <strong>três profissionais ópticos formados</strong>, que oferecem o respaldo técnico e a confiança de quem entende do assunto.
          </p>
          <p>
            Em <strong>2013</strong>, um importante passo foi dado com a importação do <strong>laboratório óptico GOMES</strong>, de tecnologia digital diretamente da <strong>Itália</strong>, berço do setor óptico mundial. Esse avanço garantiu um serviço ainda mais preciso, ágil e de alta qualidade, com <strong>laboratório próprio</strong> que assegura excelência em cada detalhe.
          </p>
          <p>
            Com <strong>ajustes gratuitos</strong>, <strong>garantia de autenticidade</strong> em joias e relógios e um compromisso inabalável com a satisfação do cliente, a Real consolida sua reputação construída ao longo de mais de <strong>70 anos de história</strong>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;

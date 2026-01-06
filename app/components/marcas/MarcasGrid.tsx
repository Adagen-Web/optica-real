'use client';

const marcas = [
  {
    image: "./oculos.png",
    title: "Óculos solares",
    textPosition: "right",
    description: "Trabalhamos com uma ampla linha de óculos solares e armações, marcas nacionais e importadas reconhecidas pela qualidade com a garantia e assistência no pós-venda."
  },
  {
    image: "./armacoes-lentes.png",
    title: "Armações de grau e Lentes",
    textPosition: "left",
    description: "Além de marca Exclusiva de multifocais fabricada em laboratórios de tecnologia digital de última geração, também trabalhamos com as marcas renomadas e mundialmente conhecidas como: Essilor Varilux, Zeiss, Hoya e Rodenstock. Possuímos laboratório de montagem com equipamentos de precisão para aferição das medidas e dioptrias prescritas."
  },
  {
    image: "./lentes.jpg",
    title: "Lentes de contato",
    textPosition: "left",
    description: "Trabalhamos com lentes de contato de alta performance das principais marcas do mercado, desenvolvidas para proporcionar conforto, nitidez e adaptação natural aos olhos. Contamos com suporte técnico especializado para a sua necessidade visual."
  },
  {
    image: "./joias.png",
    title: "Joias",
    textPosition: "left",
    description: "No seguimento da joalheria trabalhamos com joias material em ouro 18k ( Au 750) ouro 10k ( Au 416) e joias em Prata 925. Além das Joias autorais, pensadas por designer próprio, trabalhamos também com fabricantes selecionados com toda a garantia de procedência para o cliente sentir-se seguro na sua escolha. Consertos e assistência em joias."
  },
  {
    image: "./relojoaria.png",
    title: "Relógios",
    textPosition: "left",
    description: "Possuímos uma seleção de relógios masculinos e femininos de marcas conceituadas e design modernos e atuais para todos os estilos desde os clássicos, casuais ou esportivos. Assistência e conserto."
  }
];

const MarcasGrid = () => {
  // Separar as marcas para o layout específico
  const oculosSolares = marcas[0];
  const armacoesLentes = marcas[1];
  const lentesContato = marcas[2];
  const joalheria = marcas[3];
  const relogios = marcas[4];

  const renderMarca = (marca: any, className: string = "") => (
    <div
      className={`relative mt-4 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg ${className}`}
    >
      {/* Imagem de fundo */}
      <img
        src={marca.image}
        alt={marca.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/55 z-10" />
      
      {/* Conteúdo sobreposto */}
      <div className={`absolute inset-0 z-20 flex flex-col justify-end pb-8 px-6 md:px-12 text-white ${
        marca.textPosition === 'right' 
          ? 'items-end text-right' 
          : 'items-start text-left'
      }`}>
        <h3 className="text-3xl md:text-5xl font-bold font-heebo mb-3 max-w-xl">
          {marca.title}
        </h3>
        
        {marca.description && (
          <p className="text-sm md:text-base leading-relaxed font-normal font-public-sans mb-8 max-w-2xl opacity-90">
            {marca.description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col bg-off-white gap-4 mb-4">
      {/* Óculos Solares - Linha completa */}
      {renderMarca(oculosSolares, "w-full h-[500px] md:h-[600px]")}
      
      {/* Primeira linha de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderMarca(armacoesLentes, "w-full h-[700px] md:h-[900px]")}
        {renderMarca(lentesContato, "w-full h-[700px] md:h-[900px]")}
      </div>
      
      {/* Segunda linha de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderMarca(joalheria, "w-full h-[700px] md:h-[900px]")}
        {renderMarca(relogios, "w-full h-[700px] md:h-[900px]")}
      </div>
    </section>
  );
};


export default MarcasGrid;

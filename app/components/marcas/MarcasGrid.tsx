'use client';

const marcas = [
  {
    image: "./oculos.png",
    title: "Óculos solares",
    brands: [
      "Pucci", " Carrera", " Dolce Gabbana", " Emílio Pucci", " Grazi", " HB",
      " Mirmarflex (infantil)", " Mormaii", " Nano Vista (infantil)", " Polo Half Louren",
      " Prada", " Ray Ban", " Stepper", " Tom Ford", " Versace", "Vogue"
    ],
    layout: "vertical",
    textPosition: "right",
    description: "Trabalhamos com uma ampla linha de óculos solares das melhores marcas nacionais e importadas, reconhecidas pela qualidade, autenticidade e design moderno. Nossos modelos oferecem proteção, conforto e estilo, com opções para todos os gostos — dos clássicos aos contemporâneos — e contam com garantia e assistência no pós-venda."
  },
  {
    image: "./armacoes-lentes.png",
    title: "Armações de grau e Lentes",
    layout: "vertical",
    textPosition: "left",
    description: " Disponibilizamos uma variedade de armações de grau que aliam conforto, elegância e tecnologia. Nossas lentes são produzidas em laboratório próprio de tecnologia digital de última geração, garantindo precisão e qualidade óptica. Trabalhamos ainda com marcas reconhecidas mundialmente, como Essilor Varilux, Zeiss, Hoya e Rodenstock, assegurando durabilidade e alto desempenho visual."
  },
  {
    image: "./lentes.jpg",
    title: "Lentes de contato",
    layout: "vertical",
    textPosition: "left",
    description: "Oferecemos lentes de contato de alta performance das principais marcas do mercado, desenvolvidas para proporcionar conforto, nitidez e adaptação natural aos olhos. Contamos com suporte técnico especializado, ajudando cada cliente a escolher a lente mais adequada ao seu estilo de vida e necessidade visual."
  },
  {
    image: "./joias.png",
    title: "Joias",
    layout: "vertical",
    textPosition: "left",
    description: "Em nossa joalheria, você encontra peças em ouro 18k (Au 750), ouro 10k (Au 416) e prata 925, além de joias autorais exclusivas. Trabalhamos com fabricantes selecionados e garantimos procedência e autenticidade, oferecendo também consertos e assistência, preservando o brilho e o valor das suas peças."
  },
  {
    image: "./relojoaria.png",
    title: "Relógios",
    layout: "vertical",
    textPosition: "left",
    description: "Apresentamos uma seleção de relógios masculinos e femininos de marcas conceituadas, com design moderno e sofisticado, adequados a todos os estilos — clássico, casual ou esportivo. Oferecemos também assistência técnica e conserto, garantindo durabilidade e funcionamento impecável de cada peça."
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
      className={`relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg ${className}`}
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
          <p className="text-sm md:text-base leading-relaxed font-normal font-public-sans mb-4 max-w-2xl opacity-90">
            {marca.description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col bg-off-white gap-4">
      {/* Óculos Solares - Linha completa */}
      {renderMarca(oculosSolares, "w-full h-[500px] md:h-[600px]")}
      
      {/* Primeira linha de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderMarca(armacoesLentes, "w-full h-[500px] md:h-[600px]")}
        {renderMarca(lentesContato, "w-full h-[500px] md:h-[600px]")}
      </div>
      
      {/* Segunda linha de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderMarca(joalheria, "w-full h-[500px] md:h-[600px]")}
        {renderMarca(relogios, "w-full h-[500px] md:h-[600px]")}
      </div>
    </section>
  );
};


export default MarcasGrid;

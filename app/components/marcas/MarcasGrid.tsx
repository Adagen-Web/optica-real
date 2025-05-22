// components/MarcasGrid.tsx

const marcas = [
  {
    image: "./oculos.png",
    title: "Óculos solares e armações",
    brands: [
      "Armani", "Carrera", "Dolce Gabbana", "Emílio Pucci", "Grazi", "HB",
      "Mirmarflex (infantil)", "Mormaii", "Nano Vista (infantil)", "Polo Half Louren",
      "Prada", "Ray Ban", "Stepper", "Tom Ford", "Versace", "Vogue"
    ],
    layout: "vertical"
  },
  {
    image: "./lentes.jpg",
    title: "Lentes de contato",
    brands: ["Bausch Lomb", "Coopervision", "Johnson & Johnson"],
    layout: "horizontal"
  },
  {
    image: "./joalheria.jpeg",
    title: "Joalheria",
    brands: ["Bruner", "Guindani", "Ícaro", "Joias autorais"],
    layout: "horizontal"
  },
  {
    image: "./relogio.png",
    title: "Relojoaria",
    brands: ["Casio", "Guess", "Mondaine", "Orient", "Technos"],
    layout: "horizontal"
  }
];

const MarcasGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#f7f5f0]">
      {marcas.map((marca, idx) => (
        <div
          key={idx}
          className="flex flex-col transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg"
        >
          <div className="relative w-full h-[400px] overflow-hidden">
            <img
              src={marca.image}
              alt={marca.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
          </div>

          <div
            className={`bg-[#f7f5f0] text-black px-12 py-8 z-20 flex ${marca.layout === "horizontal"
                ? "flex-row items-center gap-6"
                : "flex-col items-start gap-4"
              }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold font-heebo">
              {marca.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed font-light font-public-sans">
              {marca.brands.join("; ")};
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MarcasGrid;

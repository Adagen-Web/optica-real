// components/MarcasHero.tsx
const MarcasHero = () => {
  return (
    <section className="relative w-full h-[65vh]">
      <img
        src="./hero-marcas.png"
        alt="Imagem de destaque marcas"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10 flex items-end pb-16 justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold font-heebo tracking-[2px]">Marcas</h1>
      </div>
    </section>
  );
};

export default MarcasHero;

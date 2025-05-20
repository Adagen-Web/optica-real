const SectionTitle = () => {
  return (
    <section className="bg-off-white py-16 text-center">
      {/* Botão topo */}
      <div className="mb-6">
        <button className="border-none cursor-pointer font-heebo bg-white px-4 py-3 text-sm hover:bg-black hover:text-white transition-colors">
          Conheça mais marcas
        </button>
      </div>

      {/* Título + linha */}
      <div className="inline-block">
        <h2 className="text-3xl md:text-5xl font-heebo font-medium text-black">
          O que oferecemos
        </h2>
        <div className="h-[2px] bg-orange mt-2 w-full" />
      </div>
    </section>
  );
};

export default SectionTitle;

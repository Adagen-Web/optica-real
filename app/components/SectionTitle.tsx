const SectionTitle = () => {
  return (
    <section className="bg-off-white py-12 border-t border-[#707070] text-center">
      {/* Botão topo */}
      <div className="mb-12">
        <button className="border border-black cursor-pointer font-heebo bg-white px-4 py-3 text-sm hover:bg-black hover:text-white transition-colors">
          Conheça mais marcas
        </button>
      </div>

      {/* Título + linha */}
      <div className="inline-block">
        <h2 className="text-3xl md:text-5xl font-heebo font-normal text-black">
          O que oferecemos
        </h2>
        <div className="h-[2px] bg-orange mt-2 w-full" />
      </div>
    </section>
  );
};

export default SectionTitle;

const SectionExperiencia = () => {
  return (
    <section className="relative w-full h-[430px] md:h-[660px]">
      <img
        src="/hero-2.png"
        alt="Homem com óculos - 70 anos de experiência"
        className="w-full h-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute font-heebo left-6 md:left-56 top-1/2 -translate-y-1/2 text-white">
        <p className="text-xl md:text-4xl font-light">Há mais de</p>
        <h2 className="text-3xl md:text-5xl font-bold">70 ANOS</h2>
        <p className="text-xl md:text-4xl font-light leading-snug">
          de experiência<br />no mercado
        </p>
      </div>
    </section>
  );
};

export default SectionExperiencia;

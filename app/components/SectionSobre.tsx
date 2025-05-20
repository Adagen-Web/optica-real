const SectionSobre = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* TEXTO À ESQUERDA */}
        <section className="flex justify-center items-center py-12 px-4 font-sans">
          <div className="flex flex-col justify-center max-w-sm md:max-w-md w-full">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              Temos opções que combinam <span className="font-extrabold">estilo e qualidade</span> em peças perfeitas para todas as idades e ocasiões.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              Nós da Real oferecemos o que há de melhor no mundo da relojoaria e ótica.{' '}
              <span className="font-extrabold">Encontre a peça que reflete a sua personalidade!</span>
            </p>
            <button className="border cursor-pointer border-gray-700 text-gray-800 px-6 py-3 mt-6 text-sm rounded hover:bg-gray-100 transition w-fit">
              Saiba mais sobre nós
            </button>
          </div>
        </section>


        {/* GRADE DE IMAGENS À DIREITA */}
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
          <div className="col-span-2">
            <img
              src="/oculos1.png"
              alt="Modelo óculos 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/oculos2.png"
              alt="Modelo óculos 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/oculos3.jpg"
              alt="Modelo óculos 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSobre;

const HorarioAtendimento = () => {
  return (
    <section className="bg-[#f7f6f2] w-full">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Coluna de horários */}
        <div className="bg-white w-full md:w-[65%] px-10 md:px-24 py-20 flex items-center min-h-[600px]">
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-light text-[#222] mb-12 text-center">
              <span className="border-b-2 tracking-[-1px] font-heebo fon-normal border-[#ce954a] pb-1">Horários de atendimento</span>
            </h2>

            <div className="flex flex-col gap-y-16 text-[#333]">
              {/* Segunda a sexta */}
              <div className="flex justify-evenly">
                <p className="text-2xl font-normal font-heebo leading-tight">
                  Segunda a<br />sexta-feira
                </p>
                <div className="text-sm text-center font-public-sans">
                  <p>Das 9:00 às 12:00</p>
                  <p>e das 13:30 às 18:30</p>
                </div>
              </div>

              {/* Sábados */}
              <div className="flex justify-evenly">
                <p className="text-2xl font-normal font-heebo leading-tight">Sábados</p>
                <div className="text-sm text-center font-public-sans">
                  <p>Das 9:00 às 12:00</p>
                  <p>e das 14:00 às 18:00</p>
                </div>
              </div>

              {/* Dezembro a fevereiro */}
              <div className="flex justify-evenly">
                <p className="text-2xl font-normal font-heebo leading-tight">Dezembro a<br />fevereiro*</p>
                <div className="text-sm text-center font-public-sans">
                  <p>Fechamento às 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="w-full md:w-[35%] h-full">
          <img
            src="/social/1.png"
            alt="Colaboradora Real"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HorarioAtendimento;

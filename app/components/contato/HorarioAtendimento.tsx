"use client";

import React from 'react';


const BusinessHours = () => {
  return (
    <section className="w-full bg-[#f7f6f2] relative z-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 my-8">
        {/* Left side - Business hours */}
        <div className="px-6 py-12 md:px-16 md:py-20 flex flex-col justify-center bg-white z-10">
          <h2 className="text-2xl md:text-4xl w-74 md:w-104 font-heebo font-normal text-[#313131] border-b-2 border-[#ce954a] inline-block pb-1">
            Horários de atendimento
          </h2>

          <div className="space-y-10 mt-8">
            {/* Segunda a sexta */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl md:text-2xl text-[#313131] font-heebo font-normal md:min-w-[180px]">
                Segunda a<br />sexta-feira
              </h3>
              <div className="text-sm md:text-base font-public-sans text-[#313131]">
                <p>Das 9:00 às 12:00</p>
                <p>e das 13:30 às 18:15</p>
              </div>
            </div>

            {/* Sábados */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl md:text-2xl text-[#313131] font-heebo font-normal md:min-w-[180px]">
                Sábados
              </h3>
              <div className="text-sm md:text-base font-public-sans text-[#313131]">
                <p>Das 9:00 às 12:00</p>
                <p>e das 14:00 às 18:00</p>
              </div>
            </div>

            {/* Dezembro a fevereiro */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl md:text-2xl text-[#313131] font-heebo font-normal md:min-w-[180px]">
                Dezembro a<br />fevereiro*
              </h3>
              <div className="text-sm md:text-base font-public-sans text-[#313131]">
                <p>Fechamento às 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image "vazando" para cima e para baixo */}
        <div className="relative w-full -mt-16 md:-mt-24 -mb-16 md:-mb-24 z-0">
          <div className="h-[550px] md:h-[650px] w-full">
            <img
              src="./social/1.png"
              alt="Woman in jewelry store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;

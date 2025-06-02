"use client";

import React from 'react';
import Image from 'next/image';

const BusinessHours = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Business hours */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-heebo font-normal text-[#313131] border-b-2 border-[#ce954a] w-100 inline-block pb-1">
            Horários de atendimento
          </h2>

          <div className="space-y-12 mt-6">
            {/* Monday to Friday */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl md:text-2xl text-[#313131] font-heebo font-normal w-48">
                Segunda a<br />sexta-feira
              </h3>
              <div className="text-sm font-public-sans md:text-base text-[#313131]">
                <p>Das 9:00 às 12:00</p>
                <p>e das 13:30 às 18:30</p>
              </div>
            </div>

            {/* Saturdays */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl md:text-2xl text-[#313131] font-heebo font-normal w-48">
                Sábados
              </h3>
              <div className="text-sm font-public-sans md:text-base text-[#313131]">
                <p>Das 9:00 às 12:00</p>
                <p>e das 14:00 às 16:00</p>
              </div>
            </div>

            {/* December to February */}
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
              <h3 className="text-xl font-heebo md:text-2xl text-[#313131] font-normal w-48">
                Dezembro a<br />fevereiro*
              </h3>
              <div className="text-sm font-public-sans md:text-base text-[#313131]">
                <p>Fechamento às 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative -my-14 md:-my-12">
          <div className="h-[500px] w-full md:h-[140%]">
            <img
              src="./social/1.png"
              alt="Woman in jewelry store"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
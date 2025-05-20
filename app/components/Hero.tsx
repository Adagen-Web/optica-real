'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/hero-swiper.css';

const slides = [
  {
    src: '/hero.jpg',
    alt: 'Modelo 1',
    text: 'Acessórios para cada <span className="font-bold">estilo único</span>',
  },
  {
    src: '/hero-2.png',
    alt: 'Modelo 2',
    text: 'Encontre sua <strong>marca ideal</strong>',
  },
  {
    src: '/hero3.png',
    alt: 'Modelo 3',
    text: 'Conforto e <strong>elegância</strong> todos os dias',
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        autoplay={{ delay: 8000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute z-10 top-[30%] left-12 md:left-56 text-white">
                <h2
                  className="text-3xl md:text-5xl font-light max-w-[20ch]"
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

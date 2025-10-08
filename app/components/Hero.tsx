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
    text: 'Óculos para <br/>cada <strong>estilo único</strong>',
  },
  {
    src: '/hero-2.png',
    alt: 'Modelo 2',
    text: 'Encontre sua <br/><strong>marca ideal</strong>',
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[75vh] md:h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        autoplay={{ delay: 6000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-cover h-full w-full object-center"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute z-10 top-[45%] left-12 md:left-56 text-white">
                <h2
                  className="text-4xl md:text-6xl font-normal font-heebo max-w-[20ch]"
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

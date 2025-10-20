'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/hero-swiper.css';
import { FaWhatsapp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/hero.jpg',
    alt: 'Modelo 1',
    text: 'Joias, Óculos e Relógios com mais de 70 anos de sofisticação.',
  },
  {
    src: '/hero-2.png',
    alt: 'Modelo 2',
    text: 'Laboratório próprio, marcas premium, técnicos especializados.',
  },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full h-[75vh] md:h-screen">
        <div className="relative h-full w-full">
          <img
            src="/hero.jpg"
            alt="Modelo 1"
            className="object-cover h-full w-full object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute z-10 top-[45%] left-12 md:left-56 text-white">
            <h2
              className="text-3xl md:text-4xl mb-4 font-semibold font-heebo max-w-[20ch]"
              dangerouslySetInnerHTML={{ __html: "Joias, Óculos e Relógios com mais de 70 anos de sofisticação." }}
            />
            <a href="https://api.whatsapp.com/send/?phone=5551985011913" target="_blank" rel="noopener noreferrer"
              className=" cursor-pointer font-heebo text-white bg-brown-light px-4 py-3 text-sm hover:bg-brown-dark hover:text-white transition-colors inline-block">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[75vh] md:h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="h-full"
        watchSlidesProgress={true}
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
                  className="text-3xl md:text-4xl mb-4 font-semibold font-heebo max-w-[20ch]"
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
                <a href="https://api.whatsapp.com/send/?phone=5551985011913" target="_blank" rel="noopener noreferrer"
                  className=" cursor-pointer font-heebo text-white bg-brown-light px-4 py-3 text-sm hover:bg-brown-dark hover:text-white transition-colors inline-block">
                  Fale conosco
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

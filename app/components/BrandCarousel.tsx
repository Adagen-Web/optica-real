'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const brands = [
  './brands/pucci.png',
  './brands/Armani.png',
  './brands/gucci.png',
  './brands/Prada.png',
  './brands/Rayban.png',
  './brands/TomFord.png',
  './brands/Versace.png',
  './brands/ysl.png',
  './brands/casio-logo.png',
  './brands/orient-relogios.png',
  './brands/tecnos.png',
];

const BrandCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full bg-white py-6 px-4">
        <div className="flex justify-center items-center gap-8 overflow-x-auto">
          {brands.slice(0, 6).map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt={`Marca ${index}`}
                className="object-contain max-h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-white py-6 px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {brands.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center px-2"
          >
            <img
              src={src}
              alt={`Marca ${index}`}
              className="object-contain max-h-24 w-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;

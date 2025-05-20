'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const brands = [
  './brands/dg.webp',
  './brands/giorgio-armani.jpg',
  './brands/gucci.png',
  './brands/prada.png',
  './brands/ray-ban.png',
  './brands/tom-ford.png',
  './brands/versace.jpg',
  './brands/ysl.png',
];

const BrandCarousel = () => {
  return (
    <div className="relative w-full bg-white py-6 px-4">
      {/* Navigation buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <div className="swiper-button-prev cursor-pointer w-10 h-10 rounded-full border flex items-center justify-center" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <div className="swiper-button-next cursor-pointer w-10 h-10 rounded-full border flex items-center justify-center" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        autoplay={{
          delay: 3000,
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
              className="object-contain max-h-12 w-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;

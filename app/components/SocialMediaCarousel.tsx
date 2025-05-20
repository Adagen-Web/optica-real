'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const mediaImages = [
  '/social/1.png',
  '/social/2.png',
  '/social/3.jpg',
  '/social/4.jpg',
  '/social/5.jpg',
];

const SocialMediaCarousel = () => {
  return (
    <section className="bg-black py-16">
      <h2 className="text-white text-center text-3xl font-semibold mb-10">
        Nossas mídias sociais
      </h2>

      <div className="relative w-full max-w-[90vw] mx-auto">
        {/* Botões de navegação personalizados */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div className="swiper-button-prev bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-black shadow-md">
            <FaChevronLeft size={16} />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div className="swiper-button-next bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-black shadow-md">
            <FaChevronRight size={16} />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1.3}
          spaceBetween={20}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {mediaImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="rounded overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Mídia social ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SocialMediaCarousel;

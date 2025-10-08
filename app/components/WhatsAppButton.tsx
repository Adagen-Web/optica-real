'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551985011913"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brown-light text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;

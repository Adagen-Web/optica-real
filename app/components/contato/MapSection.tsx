'use client';

const MapSection = () => {
  return (
    <section className="pt-16 z-0 relative w-full h-[600px] bg-off-white">
      <iframe
        title="Mapa Óptica Real"
        src="https://www.google.com/maps?q=Av.+Bar%C3%A3o+do+Rio+Branco,+58,+Centro,+Torres,+RS&output=embed"
        className="w-full h-full border-none"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;

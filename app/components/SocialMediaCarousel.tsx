'use client';

const SocialMediaCarousel = () => {
  return (
    <section className="bg-black py-16">
      <h2 className="text-white text-center tracking-[-1px] text-4xl font-normal font-heebo mb-10">
        Nossas mídias sociais
      </h2>

      {/* Embed do Instagram via LightWidget */}
      <div className="w-full max-w-[90vw] mx-auto overflow-hidden">
        {/* LightWidget requires their JS script */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          title="Instagram Feed Óptica Real"
          src="https://lightwidget.com/widgets/2d72c4b1952f5b16be7d5a012cb63209.html"
          scrolling="no"
          allowTransparency={true}
          className="w-full h-[500px] border-none"
        ></iframe>
      </div>
    </section>
  );
};

export default SocialMediaCarousel;

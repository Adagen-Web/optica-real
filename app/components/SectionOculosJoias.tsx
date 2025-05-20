'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SectionOculosJoias = () => {
  return (
    <section className="w-full bg-off-white">
      {/* Banner grande */}
      <div className="relative w-full h-[400px] md:h-[700px]">
        <img
          src="./oculos.png"
          alt="Óculos solares"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={fadeUp}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-right px-6 md:px-12 max-w-xl"
        >
          <h2 className="text-3xl font-heebo md:text-5xl font-normal mb-2">
            Óculos solares<br />e armações
          </h2>
          <p className="text-sm md:text-base font-public-sans leading-snug">
            Armani; Carrera; Dolce Gabbana; Emílio Pucci; Grazi; HB;<br />
            Mirmarflex (infantil); Mormaii; Nano Vista (infantil); Polo Half<br />
            Louren; Prada; Ray Ban; Stepper; Tom Ford; Versace; Vogue.
          </p>
        </motion.div>
      </div>

      <div className="h-2" />

      {/* Grid de categorias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {[
          {
            title: 'Joalheria',
            description: 'Bruner; Guiandani; Ícaro;\nJoias autorais.',
            image: './joalheria.jpeg',
          },
          {
            title: 'Relojoaria',
            description: 'Casio; Guess; Mondaine;\nOrient; Technos.',
            image: './relogio.png',
          },
          {
            title: 'Lentes de contato',
            description: 'Bausch Lomb; Coopervision;\nJohnson & Johnson;',
            image: './lentes.jpg',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={fadeUp}
            className="relative h-[320px] md:h-[500px]"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center px-4">
              <h3 className="text-3xl md:text-5xl font-heebo font-normal mb-1">{item.title}</h3>
              <p className="text-sm font-public-sans whitespace-pre-line">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionOculosJoias;

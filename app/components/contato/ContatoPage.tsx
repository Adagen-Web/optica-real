import Image from "next/image";

const ContatoPage = () => {
  return (
    <main className="w-full">
      {/* Hero da logo */}
      <section className="relative w-full h-[85vh] border-b border-[#707070]">
        <Image
          src="/hero3.png" // substitua com caminho correto
          alt="Fachada Óptica Real"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end pb-16 justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold font-heebo tracking-[2px]">Contato</h1>
        </div>
      </section>
     
    </main>
  );
};

export default ContatoPage;

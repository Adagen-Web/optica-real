'use client';
const SectionTitle = () => {
  return (
    <section className="bg-off-white py-12 border-t border-[#707070] text-center">
      {/* Título + linha */}
      <div className="inline-block">
        <h2 className="text-3xl md:text-5xl font-heebo font-normal text-black">
          O que oferecemos
        </h2>
        <div className="h-[2px] bg-orange mt-2 w-full" />
      </div>
    </section>
  );
};

export default SectionTitle;

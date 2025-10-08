import BrandCarousel from "./components/BrandCarousel";
import Hero from "./components/Hero";
import SectionExperiencia from "./components/SectionExperiencia";
import SectionOculosJoias from "./components/SectionOculosJoias";
import SectionPublico from "./components/SectionPublico";
import SectionSobre from "./components/SectionSobre";
import SectionTitle from "./components/SectionTitle";
import SocialMediaCarousel from "./components/SocialMediaCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandCarousel />
      <SectionTitle />
      <SectionOculosJoias />
      <div className="pb-8 pt-12 text-center bg-off-white">
        <a href="/marcas" className="border border-black cursor-pointer font-heebo bg-white px-4 py-3 text-sm hover:bg-black hover:text-white transition-colors">
          Conheça mais marcas
        </a>
      </div>
      <div className="h-8 bg-off-white w-full" />
      <SectionPublico />
      <SectionSobre />

      <SocialMediaCarousel />
      <SectionExperiencia />
    </>
  );
}

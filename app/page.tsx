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
      <div className="h-8 bg-off-white w-full" />
      <SectionPublico />
      <SectionSobre />

      <SocialMediaCarousel />
      <SectionExperiencia />
    </>
  );
}

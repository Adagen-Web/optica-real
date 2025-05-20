import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import SectionExperiencia from "./components/SectionExperiencia";
import SectionOculosJoias from "./components/SectionOculosJoias";
import SectionPublico from "./components/SectionPublico";
import SectionSobre from "./components/SectionSobre";
import SectionTitle from "./components/SectionTitle";
import SocialMediaCarousel from "./components/SocialMediaCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandCarousel />
      <SectionTitle />
      <SectionOculosJoias />
      <div className="h-8 bg-off-white w-full" />
      <SectionPublico />
      <SectionSobre />

      <SocialMediaCarousel />
      <SectionExperiencia />
      <Footer />
    </>
  );
}

import MarcasGrid from "../components/marcas/MarcasGrid";
import MarcasHero from "../components/marcas/MarcasHero";
import MarcasIntro from "../components/marcas/MarcasInto";

export default function Marcas() {
  return (
    <main className="w-full">
      <MarcasHero />
      <MarcasIntro />
      <MarcasGrid />
    </main>
  );
}

import ContatoPage from "../components/contato/ContatoPage";
import FormContato from "../components/contato/FormContato";
import HorarioAtendimento from "../components/contato/HorarioAtendimento";
import SectionContato from "../components/contato/SectionContato";


export default function Home() {
  return (
    <>
      <ContatoPage />
      <SectionContato />
      <HorarioAtendimento />
      <FormContato />
    </>
  );
}

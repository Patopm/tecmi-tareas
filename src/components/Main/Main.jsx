import AcercaDe from "./AcercaDe/AcercaDe";
import Contactanos from "./Contactanos/Contactanos";
import Diferenciador from "./Diferenciador/Diferenciador";
import Hero from "./Hero/Hero";
import Preguntas from "./Preguntas/Preguntas";

function Main() {
  return (
    <>
      <main>
        <Hero />
        <AcercaDe />
        <Diferenciador />
        <Preguntas />
        <Contactanos />
      </main>
    </>
  );
}

export default Main;

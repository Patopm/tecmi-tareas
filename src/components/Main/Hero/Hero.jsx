import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div id="heroContent">
        <h1>Despreocupate de tus tareas y obten una buena calificación</h1>
        <h2>Agenda tus tareas desde aquí!</h2>
        <div id="heroButtons">
          <button className="btnPrimary">Iniciar sesión</button>
          <button>Registrate</button>
        </div>
      </div>
      <div id="heroImage">
        <img src="#" alt="imagen de tarea" />
      </div>
    </section>
  );
}

export default Hero;

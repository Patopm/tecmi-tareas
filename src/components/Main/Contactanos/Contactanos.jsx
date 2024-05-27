function Contactanos() {
  return (
    <section className="contactanos">
      <h4>¿Tienes alguna duda? Contactanos!</h4>
      <p>Llena el siguiente formulario para tener la mejor atención para ti!</p>
      <form className="contactanos-form">
        <input type="text" id="nombreInput" placeholder="Nombre" />
        <input type="tel" id="telefonoInput" placeholder="Teléfono" />
        <input type="text" id="escuelaInput" placeholder="Escuela" />
        <textarea
          name="duda"
          id=""
          placeholder="Ingresa tu pregunta aquí"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>
        O envianos un mensaje <a href="">aquí</a>
      </p>
    </section>
  );
}

export default Contactanos;

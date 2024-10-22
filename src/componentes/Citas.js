import React from 'react';

function Citas() {
  return (
    <section className="citas-section">
      <div className="form-container">
        <h2>¡AGENDA TU CITA!</h2>
        <p>Por favor, rellene el formulario y nos pondremos en contacto con usted.</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Nombre completo" />
            <input type="tel" placeholder="Número de teléfono" />
          </div>
          <div className="form-group">
            <input type="time" placeholder="Horario" />
            <select>
              <option>Seleccione estilista</option>
              <option>Estilista 1</option>
              <option>Estilista 2</option>
            </select>
          </div>
          <div className="form-group">
            <input type="date" placeholder="dd/mm/aaaa" />
            <input type="number" placeholder="Número de personas" />
          </div>
          <div className="form-group">
            <textarea placeholder="Comentario (opcional)" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Citas;

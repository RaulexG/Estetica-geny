import React from 'react';

function Citas() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/bg-cts.svg')" }}>
      <div className="absolute inset-0 bg-gray-bg bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-6xl font-bold mb-8">¡AGENDA TU CITA!</h2>
        <p className="text-pink-300 font-bold mb-8">Por favor, rellene el formulario y nos pondremos en contacto con usted.</p>
        <form className="w-full max-w-4xl space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="tel"
              placeholder="Número de teléfono"
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="time"
              placeholder="Horario"
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <select
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option className="bg-pink-700">Seleccione estilista</option>
              <option className="bg-pink-700">Estilista 1</option>
              <option className="bg-pink-700">Estilista 2</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="date"
              placeholder="dd/mm/aaaa"
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="number"
              placeholder="Número de personas"
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <textarea
            placeholder="Comentario (opcional)"
            className="w-full p-4 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-80 py-3 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Citas;

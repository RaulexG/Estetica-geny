import React from 'react';


function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImag:"url('../imagenes/bg-principal.jpg')" }}>
      <div className="absolute inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center text-center" >
        <div className="max-w-2xl px-4">
          <h3 className="text-white text-2xl md:text-2x1 font-bold mb-6">
            Especialistas en cortes, coloración, tratamientos capilares y estilizado, brindando un servicio personalizado para resaltar la belleza única de cada cliente.
          </h3>
          <button className="bg-pink-400 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-pink-500 transition duration-300 ease-in-out">
            ¡Agenda tu cita!
          </button>
        </div>
      </div>
    </section>
  );
}


export default Hero;

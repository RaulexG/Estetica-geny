import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/img/bg-principal.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-800 to-gray-200 opacity-55"></div>
      <div className="relative flex items-center justify-center text-center h-full">
        <div className="max-w-6xl px-4">
          <h3 className="text-white text-3xl md:text-2xl font-bold mb-6">
            Especialistas en cortes, coloración, tratamientos capilares y estilizado, brindando un servicio personalizado para resaltar la belleza única de cada cliente.
          </h3>
          <Link
            to="citas"
            smooth={true}
            duration={500}
            className="bg-pink-400 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-pink-500 transition duration-300 ease-in-out cursor-pointer"
          >
            ¡Agenda tu cita!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

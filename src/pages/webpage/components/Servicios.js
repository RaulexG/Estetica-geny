import React from 'react';
import manicureImg from '../../../imagenes/manicure.jpeg';
import cortesNinosImg from '../../../imagenes/cortes-niños.jpg';
import cortesCaballeroImg from '../../../imagenes/cortes-caballeros.jpg';

const services = [
  { name: "Manicure ", img: manicureImg },
  { name: "Cortes niños", img: cortesNinosImg },
  { name: "Cortes caballero", img: cortesCaballeroImg },
  { name: "Manicure ", img: manicureImg },
  { name: "Cortes niños", img: cortesNinosImg },
  { name: "Cortes caballero", img: cortesCaballeroImg },
  { name: "Cortes niños", img: cortesNinosImg },
  { name: "Cortes caballero", img: cortesCaballeroImg },
  { name: "Manicure ", img: manicureImg },
  { name: "Cortes niños", img: cortesNinosImg },
  { name: "Cortes caballero", img: cortesCaballeroImg },
  { name: "Cortes caballero", img: cortesCaballeroImg }
];

function Servicios() {
  return (
    <section id="servicios" className="services-section p-8 mb-8">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-8">SERVICIOS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  
  export default Servicios;
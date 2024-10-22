import React from 'react';
import manicureImg from '../imagenes/manicure.jpeg';
import cortesNinosImg from '../imagenes/cortes-niños.jpg';
import cortesCaballeroImg from '../imagenes/cortes-caballeros.jpg';

const services = [
    { name: "Manicure ", img: manicureImg },
    { name: "Cortes niños", img: cortesNinosImg },
    { name: "Cortes caballero", img: cortesCaballeroImg }
  ];

  function Servicios() {
    return (
      <section className="services-section">
        <h1 className="services-title">Servicios</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.name} className="service-image" />
              <div className="service-info">
                <p>{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Servicios;
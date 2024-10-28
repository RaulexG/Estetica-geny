import React from 'react';
import Producto from './Producto';

function Categoria({ titulo, productos }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">{titulo}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map((producto, index) => (
          <Producto
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            estrellas={producto.estrellas}
          />
        ))}
      </div>
    </div>
  );
}

export default Categoria;

import React from 'react';
import Producto from './Producto';

function Categoria({ titulo, productos }) {
  return (
    <div className="categoria">
      <h2 className="categoria__titulo">{titulo}</h2>
      <div className="categoria__productos">
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

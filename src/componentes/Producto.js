import React from 'react';

function Producto({ nombre, precio, imagen, estrellas }) {
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} className="producto__imagen" />
      <div className="producto__detalles">
        <div className="producto__estrellas">
          {'★'.repeat(estrellas).padEnd(5, '☆')}
        </div>
        <h4 className="producto__nombre">{nombre}</h4>
        <p className="producto__precio">${precio}.00</p>
      </div>
    </div>
  );
}

export default Producto;

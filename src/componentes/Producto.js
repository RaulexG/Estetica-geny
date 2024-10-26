import React from 'react';

function Producto({ nombre, precio, imagen, estrellas }) {
  const estrellasSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/>
    </svg>
  );

  const estrellaVaciaSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"/>
    </svg>
  );

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} className="producto__imagen" />
      <div className="producto__detalles">
        <div className="producto__estrellas">
          {[...Array(5)].map((_, index) =>
            index < estrellas ? estrellasSVG : estrellaVaciaSVG
          )}
        </div>
        <h4 className="producto__nombre">{nombre}</h4>
        <p className="producto__precio">${precio}.00</p>
      </div>
    </div>
  );
}

export default Producto;

import React from 'react';

function Producto({ nombre, precio, imagen, estrellas }) {
  const estrellasSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z" />
    </svg>
  );

  const estrellaVaciaSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-md">
      <img src={imagen} alt={nombre} className="w-32 h-32 mb-4 object-contain" />
      <div className="flex items-center text-pink-500 mb-2">
        {[...Array(5)].map((_, index) =>
          index < estrellas ? estrellasSVG : estrellaVaciaSVG
        )}
      </div>
      <h4 className="text-center font-bold text-sm">{nombre}</h4>
      <p className="text-center text-gray-700">${precio}.00</p>
    </div>
  );
}

export default Producto;


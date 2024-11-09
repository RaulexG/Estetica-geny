import React from 'react';

function Producto({ nombre, precio, imagen }) {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-md">
      <img src={imagen} alt={nombre} className="w-32 h-32 mb-4 object-contain" />
      <h4 className="text-center font-bold text-sm">{nombre}</h4>
      <p className="text-center text-gray-700">${precio}.00</p>
    </div>
  );
}

export default Producto;

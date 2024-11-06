// src/pages/AdminDashboard/components/AgregarProducto.js
import React from 'react';

function AgregarProducto() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Agregar Producto</h2>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Nombre del producto:
          <input type="text" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Descripción:
          <textarea className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Precio:
          <input type="number" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Tipo de producto:
          <select className="w-full mt-2 p-2 border rounded">
            <option>Venta</option>
            <option>Servicio</option>
          </select>
        </label>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AgregarProducto;

// src/pages/AdminDashboard/components/AgregarServicio.js
import React from 'react';

function AgregarServicio() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Agregar Servicio</h2>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Nombre del servicio:
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
          Duración:
          <input type="number" className="w-full mt-2 p-2 border rounded" placeholder="Duración en minutos" />
        </label>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Agregar Servicio</button>
      </form>
    </div>
  );
}

export default AgregarServicio;

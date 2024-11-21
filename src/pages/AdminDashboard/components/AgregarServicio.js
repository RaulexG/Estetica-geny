// src/pages/AdminDashboard/components/AgregarServicio.js
import React from 'react';

function AgregarServicio() {
  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold text-white bg-gray-400 py-3 text-center rounded-t-lg">Agregar sehdfhghfgrvicio</h2>
      <form className="flex flex-col bg-gray-100 p-6 rounded-b-lg space-y-4">

        <div className="flex flex-col">
          <label className="font-medium">Nombre del serhgfhfghfhgfgvicio</label>
          <input type="text" className="mt-2 p-2 border border-gray-300 rounded bg-pink-200" />
        </div>
        
        <div className="flex flex-col">
          <label className="font-medium">Descripcihgfhfghgfhgfhgfón</label>
          <textarea className="mt-2 p-2 border border-gray-300 rounded bg-pink-200" />
        </div>
        
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="font-medium">Precgfhfghgfhgfhfghfhgfio</label>
            <input type="text" className="mt-2 p-2 border border-gray-300 rounded bg-pink-200 w-full" />
          </div>
          <div className="flex-1">
            <label className="font-medium">Duración</label>
            <input type="number" className="mt-2 p-2 border border-gray-300 rounded bg-pink-200 w-full" placeholder="Minutos" />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="w-1/2 bg-gray-300 rounded-lg h-32 flex items-center justify-center">
            <span className="text-gray-600">Agregar imagen</span>
          </div>
          <button type="button" className="ml-4 bg-gray-400 text-white px-3 py-2 rounded">Agregar imagen</button>
        </div>

        <button type="submit" className="bg-gray-500 text-white w-full py-2 rounded mt-6">Agregar</button>
      </form>
    </div>
  );
}

export default AgregarServicio;

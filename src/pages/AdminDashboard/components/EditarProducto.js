// src/pages/AdminDashboard/components/EditarProducto.js
import React from 'react';

function EditarProducto() {
  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold text-white bg-gray-400 py-3 text-center rounded-t-lg">Editar producto</h2>
      <form className="bg-gray-100 p-8 rounded-b-lg space-y-6">
        <div className="flex flex-col">
          <label className="font-medium">Nombre del servicio</label>
          <input type="text" className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none" />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Descripción</label>
          <textarea className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none h-24 resize-none"></textarea>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Tipo de producto</label>
          <select className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none">
            <option value="">Seleccione una opción</option> 
            <option value="venta">Venta</option>
            <option value="personal">Personal</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 flex flex-col">
            <label className="font-medium">Stock</label>
            <input type="text" className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none" />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="font-medium">Precio</label>
            <input type="text" className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-300 rounded-lg h-40 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6h-1.586l-1-1c-.579-.579-1.595-1-2.414-1h-4c-.819 0-1.835.421-2.414 1l-1 1H5C3.346 6 2 7.346 2 9v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3m-7 10a3.5 3.5 0 1 1 .001-7.001A3.5 3.5 0 0 1 12 16m6-4.701a1.3 1.3 0 1 1 0-2.6a1.3 1.3 0 0 1 0 2.6"/>
            </svg>
          </div>
          <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-lg">Cambiar imagen</button>
        </div>

        <button type="submit" className="bg-gray-500 text-white w-full py-3 rounded-lg">Actualizar</button>
      </form>
    </div>
  );
}

export default EditarProducto;

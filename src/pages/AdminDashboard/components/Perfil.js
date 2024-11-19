// src/pages/AdminDashboard/components/Perfil.js
import React from 'react';

function Perfil() {
  return (
    <div className="p-8 bg-gray-200 rounded-lg">
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="font-medium text-pink-500">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border-b-2 border-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-pink-500">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border-b-2 border-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-pink-500">Estado:</label>
          <input
            type="text"
            className="w-full p-2 border-b-2 border-gray-400 focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <button className="bg-gray-500 text-white py-2 rounded-lg w-full">
            Actualizar cuenta
          </button>
        </div>

        <div>
          <button className="bg-gray-500 text-white py-2 rounded-lg w-full">
            Eliminar cuenta
          </button>
        </div>
      </form>
    </div>
  );
}

export default Perfil;

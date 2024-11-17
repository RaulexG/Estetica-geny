// src/pages/WorkerDashboard/components/Perfil.js
import React from 'react';

function Perfil() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Perfil</h2>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Nombre:
          <input type="text" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Contraseña:
          <input type="password" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Estado:
          <input type="text" className="w-full mt-2 p-2 border rounded" readOnly defaultValue="Activo" />
        </label>
        <button className="bg-pink-500 text-white px-4 py-2 rounded">Actualizar Cuenta</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded ml-4">Eliminar Cuenta</button>
      </form>
    </div>
  );
}

export default Perfil;

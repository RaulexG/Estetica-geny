// src/pages/AdminDashboard/components/EditarServicio.js
import React from 'react';
import { useParams } from 'react-router-dom';

function EditarServicio() {
  const { id } = useParams();
  const isEditing = id !== 'nuevo';

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{isEditing ? 'Editar Servicio' : 'Agregar Servicio'}</h2>
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
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">
          {isEditing ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
    </div>
  );
}

export default EditarServicio;

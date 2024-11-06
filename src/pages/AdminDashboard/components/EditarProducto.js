// src/pages/AdminDashboard/components/EditarProducto.js
import React from 'react';
import { useParams } from 'react-router-dom';

function EditarProducto() {
  const { id } = useParams();
  const isEditing = id !== 'nuevo';

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{isEditing ? 'Editar Producto' : 'Agregar Producto'}</h2>
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
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">
          {isEditing ? 'Actualizar Producto' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
}

export default EditarProducto;

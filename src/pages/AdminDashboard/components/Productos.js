// src/pages/AdminDashboard/components/Productos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Productos() {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/productos/editar/nuevo');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Productos</h2>
      <button onClick={handleAddProduct} className="bg-pink-500 text-white px-4 py-2 rounded mb-4">Agregar Producto</button>
      <div className="product-list bg-gray-100 p-6 rounded-lg">
        {/* Aquí va la lista de productos */}
        <div className="product-item flex justify-between p-4 bg-white mb-2 rounded">
          <span>Producto 1</span>
          <button className="text-red-500">Eliminar</button>
        </div>
        {/* Más productos */}
      </div>
    </div>
  );
}

export default Productos;

// src/pages/AdminDashboard/components/Productos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Productos() {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/admin/productos/agregar');
  };

  const handleEditProduct = (id) => {
    navigate(`/admin/productos/editar/${id}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Productos</h2>
      
      {/* Tabla de productos */}
      <div className="bg-gray-300 p-6 rounded-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 font-semibold">
              <th className="p-4">Seleccionar</th>
              <th className="p-4">Nombre</th>
              <th className="p-4">Tipo de producto</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {[...Array(7)].map((_, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-4 text-center">
                  <button className="focus:outline-none">
                    {/* Ícono de círculo */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" fill="currentColor" className="text-gray-500 hover:text-pink-500 transition">
                      <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/>
                      <circle cx="256" cy="256" r="144" />
                    </svg>
                  </button>
                </td>
                <td
                  className="p-4 text-pink-500 font-semibold cursor-pointer hover:underline"
                  onClick={() => handleEditProduct(index + 1)}
                >
                  Lorem ipsum product {index + 1}
                </td>
                <td className="p-4 text-center text-gray-600 font-semibold">Venta</td>
                <td className="p-4 text-center text-gray-600 font-semibold">20</td>
                <td className="p-4 text-center text-gray-600 font-semibold">$180</td>
                <td className="p-4 text-center">
                  <button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 hover:text-red-500 transition">
                      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between mt-6">
        <button onClick={handleAddProduct} className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
          Agregar nuevo producto
        </button>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
          Eliminar productos seleccionados
        </button>
      </div>
    </div>
  );
}

export default Productos;

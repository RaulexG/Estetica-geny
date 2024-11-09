// src/pages/AdminDashboard/components/Servicios.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Servicios() {
  const navigate = useNavigate();

  const handleAddService = () => {
    navigate('/admin/servicios/editar/nuevo');
  };

  const handleEditService = (id) => {
    navigate(`/admin/servicios/editar/${id}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Servicios</h2>
      
      {/* Tabla de Servicios */}
      <div className="bg-gray-300 p-6 rounded-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 font-semibold">
              <th className="p-4">Seleccionar</th>
              <th className="p-4">Nombre</th>
              <th className="p-4">Vendidas</th>
              <th className="p-4">Duración</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {/* Filas de ejemplo */}
            {[...Array(5)].map((_, index) => (
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
                  onClick={() => handleEditService(index + 1)} // Ejemplo: puedes cambiar el ID dinámico
                >
                  Lorem ipsum service {index + 1}
                </td>
                <td className="p-4 text-center text-pink-500 font-semibold">100</td>
                <td className="p-4 text-center text-pink-500 font-semibold">20</td>
                <td className="p-4 text-center text-pink-500 font-semibold">$100</td>
                <td className="p-4 text-center">
                  <button className="focus:outline-none">
                    {/* Nuevo ícono de eliminar */}
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
      
      {/* Botones de acción */}
      <div className="flex justify-between mt-6">
        <button onClick={handleAddService} className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
          Agregar nuevo servicio
        </button>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
          Eliminar servicios seleccionados
        </button>
      </div>
    </div>
  );
}

export default Servicios;

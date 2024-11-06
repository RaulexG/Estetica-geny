
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Servicios() {
  const navigate = useNavigate();

  const handleAddService = () => {
    navigate('/admin/servicios/editar/nuevo');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Servicios</h2>
      <button onClick={handleAddService} className="bg-pink-500 text-white px-4 py-2 rounded mb-4">Agregar Servicio</button>
      <div className="service-list bg-gray-100 p-6 rounded-lg">
        {/* Aquí va la lista de servicios */}
        <div className="service-item flex justify-between p-4 bg-white mb-2 rounded">
          <span>Servicio 1</span>
          <button className="text-red-500">Eliminar</button>
        </div>
        {/* Más servicios */}
      </div>
    </div>
  );
}

export default Servicios;

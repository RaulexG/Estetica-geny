// src/pages/WorkerDashboard/components/PanelCitas.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PanelCitas() {
  const navigate = useNavigate();

  const handleNewAppointment = () => {
    navigate('/worker/citas/nueva');
  };

  const handleRebook = (id) => {
    navigate(`/worker/citas/reagendar/${id}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Panel de Citas</h2>
      <button onClick={handleNewAppointment} className="bg-pink-500 text-white px-4 py-2 rounded mb-4">Nueva Cita</button>
      <div className="citas-table bg-gray-100 p-6 rounded-lg">
        {/* Aquí va la tabla de citas */}
        <div className="cita-item flex justify-between p-4 bg-white mb-2 rounded" onClick={() => handleRebook(1)}>
          <span>Cliente: Juan Pérez</span>
          <span>Servicio: Corte</span>
          <span>Fecha: 11/12/24</span>
          <span>Hora: 11:30 am</span>
          <button className="text-red-500">Eliminar</button>
        </div>
        {/* Más citas */}
      </div>
    </div>
  );
}

export default PanelCitas;

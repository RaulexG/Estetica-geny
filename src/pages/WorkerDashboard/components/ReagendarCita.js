// src/pages/WorkerDashboard/components/ReagendarCita.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ReagendarCita() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Reagendar Cita</h2>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Nombre completo:
          <input type="text" className="w-full mt-2 p-2 border rounded" defaultValue={`Cliente ${id}`} />
        </label>
        <label className="block mb-4">
          Horario:
          <input type="time" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Fecha:
          <input type="date" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Teléfono:
          <input type="tel" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Seleccione Estilista:
          <select className="w-full mt-2 p-2 border rounded">
            <option>Estilista 1</option>
            <option>Estilista 2</option>
          </select>
        </label>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Reagendar Cita</button>
      </form>
    </div>
  );
}

export default ReagendarCita;

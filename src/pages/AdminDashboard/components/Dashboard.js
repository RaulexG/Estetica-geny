import React, { useState, useEffect } from 'react';
import {
  getAllHours,
  addHour,
  updateHour,
  deleteHour,
} from '../../../services/hourAppointmentService'; // Ajusta la ruta según tu estructura

function Dashboard() {
  const [hours, setHours] = useState([]);
  const [newHour, setNewHour] = useState('');
  const [editingHour, setEditingHour] = useState(null);
  const [updatedHour, setUpdatedHour] = useState('');

  // Cargar todas las horas al montar el componente
  useEffect(() => {
    const fetchHours = async () => {
      try {
        const response = await getAllHours();
        setHours(response.data); // Carga las horas desde el servidor
      } catch (error) {
        console.error('Error al obtener las horas:', error);
      }
    };

    fetchHours();
  }, []);

  // Agregar una nueva hora
  const handleAddHour = async () => {
    if (!newHour) {
      alert('Por favor, ingresa una hora válida.');
      return;
    }

    try {
      const hourData = { hour: newHour, enabled: true };
      const response = await addHour(hourData);
      setHours([...hours, response.data]); // Actualiza la lista con la nueva hora
      setNewHour(''); // Limpia el campo de entrada
    } catch (error) {
      console.error('Error al agregar una hora:', error);
      alert('No se pudo agregar la hora.');
    }
  };

  // Actualizar una hora existente
  const handleUpdateHour = async () => {
    if (!editingHour || !updatedHour) {
      alert('Por favor, selecciona una hora para actualizar.');
      return;
    }

    try {
      const updatedData = { hour: updatedHour, enabled: true };
      await updateHour(editingHour.idHour, updatedData);
      setHours(
        hours.map((hour) =>
          hour.idHour === editingHour.idHour ? { ...hour, ...updatedData } : hour
        )
      );
      setEditingHour(null); // Finaliza la edición
      setUpdatedHour('');
    } catch (error) {
      console.error('Error al actualizar la hora:', error);
      alert('No se pudo actualizar la hora.');
    }
  };

  // Eliminar (deshabilitar) una hora
  const handleDeleteHour = async (id) => {
    try {
      await deleteHour(id);
      setHours(hours.filter((hour) => hour.idHour !== id)); // Elimina la hora de la lista local
    } catch (error) {
      console.error('Error al eliminar la hora:', error);
      alert('No se pudo eliminar la hora.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-pink-600 text-sm font-bold mb-4">Bienvenido de nuevo, administrador</h2>

      {/* Botón para descargar el reporte */}
      <a
        href="/ruta/al/reporte.pdf" // Reemplaza esta ruta con la URL o el archivo local del PDF
        download="Reporte.pdf"
        className="bg-gray-200 p-4 rounded-lg flex items-center justify-center mb-6 space-x-2 cursor-pointer hover:bg-gray-300 transition"
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32">
            <path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z" />
            <path
              fill="currentColor"
              d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"
            />
          </svg>
        </div>
        <h3 className="text-md font-semibold">Reporte</h3>
      </a>

      {/* Tabla de Horas */}
      <div className="bg-gray-300 p-6 rounded-lg">
        <h3 className="text-center text-md font-semibold mb-4">Horas de Citas</h3>
        <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
          <table className="w-full text-left bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Hora</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour.idHour} className="border-b">
                  <td className="p-4">{hour.idHour}</td>
                  <td className="p-4">{hour.hour}</td>
                  <td className="p-4 text-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingHour(hour);
                        setUpdatedHour(hour.hour);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteHour(hour.idHour)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulario para agregar/editar horas */}
      <div className="mt-6 space-y-4">
        <div className="flex space-x-4">
          <input
            type="time"
            value={editingHour ? updatedHour : newHour}
            onChange={(e) =>
              editingHour ? setUpdatedHour(e.target.value) : setNewHour(e.target.value)
            }
            className="flex-1 p-3 border border-gray-300 rounded"
          />
          {editingHour ? (
            <button
              onClick={handleUpdateHour}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Actualizar
            </button>
          ) : (
            <button
              onClick={handleAddHour}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

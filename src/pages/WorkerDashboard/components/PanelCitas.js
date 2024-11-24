import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { getAllAppointments, deleteAppointment } from '../../../services/AppointmentService';

function PanelCitas() {
  const [appointments, setAppointments] = useState([]); // Todas las citas
  const [filteredAppointments, setFilteredAppointments] = useState([]); // Citas filtradas
  const [search, setSearch] = useState(''); // Búsqueda por cliente o servicio
  const [selectedDate, setSelectedDate] = useState(new Date()); // Fecha seleccionada
  const navigate = useNavigate();

  // Cargar las citas al montar el componente
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAllAppointments();
      console.log(response)
      setAppointments(response || []);
      setFilteredAppointments(response || []); // Inicialmente, mostrar todas las citas
    } catch (error) {
      console.error('Error al cargar citas:', error);
    }
  };

  // Filtrar citas por búsqueda
  const handleSearch = () => {
    const filtered = appointments.filter(
      (appointment) =>
        appointment.client.user.name.toLowerCase().includes(search.toLowerCase()) || // Filtrar por cliente
        appointment.details.some((detail) =>
          detail.name.toLowerCase().includes(search.toLowerCase()) // Filtrar por servicio
        )
    );
    setFilteredAppointments(filtered);
  };

  // Filtrar citas por fecha seleccionada
  const handleDateFilter = () => {
    const filtered = appointments.filter(
      (appointment) =>
        appointment.dateAppointment === selectedDate.toISOString().split('T')[0] // Comparar fechas
    );
    setFilteredAppointments(filtered);
  };

  // Eliminar cita
  const handleDeleteAppointment = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
      try {
        await deleteAppointment(id);
        fetchAppointments(); // Refrescar la lista después de eliminar
      } catch (error) {
        console.error('Error al eliminar la cita:', error);
      }
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-pink-500">Panel de Citas</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Calendario */}
        <div>
          <Calendar
            onChange={(date) => {
              setSelectedDate(date);
              handleDateFilter();
            }}
            value={selectedDate}
            className="rounded-lg shadow-lg"
          />
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold mb-4">Estados</h3>
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mr-2"></span> Confirmada
            </div>
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> Pendiente
            </div>
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Completada
            </div>
            <div className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span> Cancelada
            </div>
          </div>
        </div>

        {/* Tabla de citas */}
        <div>
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Buscar por cliente o servicio"
              className="p-3 border rounded w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
            >
              Buscar
            </button>
            <button
              onClick={() => navigate('/worker/citas/nueva')}
              className="ml-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400"
            >
              Nueva Cita
            </button>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Cliente</th>
                  <th className="px-4 py-2">Tipo de Servicio</th>
                  <th className="px-4 py-2">Fecha</th>
                  <th className="px-4 py-2">Hora</th>
                  <th className="px-4 py-2">Estado</th>
                  <th className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.idAppointment} className="bg-white border-b">
                    <td className="px-4 py-2">{appointment.client.user.name}</td>
                    <td className="px-4 py-2">
                      {appointment.details.map((detail) => detail.name).join(', ')}
                    </td>
                    <td className="px-4 py-2">{appointment.dateAppointment}</td>
                    <td className="px-4 py-2">{appointment.hourAppointment.hour}</td>
                    <td className="px-4 py-2">{appointment.status}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() =>
                          navigate(`/worker/citas/reagendar/${appointment.idAppointment}`)
                        }
                        className="text-blue-500 mr-4"
                      >
                        Reagendar
                      </button>
                      <button
                        onClick={() => handleDeleteAppointment(appointment.idAppointment)}
                        className="text-red-500"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredAppointments.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No hay citas disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelCitas;

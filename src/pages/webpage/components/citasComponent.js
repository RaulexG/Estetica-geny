import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../context/UserContext'; // Contexto del usuario
import { getClientByUserId } from '../../../services/loginService'; // Servicio para obtener cliente
import { getAllAppointmentsByClientId } from '../../../services/clientsService'; // Servicio para obtener citas

function Citas() {
  const { user } = useContext(UserContext); // Obtener usuario logueado
  const [appointments, setAppointments] = useState([]); // Almacenar citas
  const [error, setError] = useState(null); // Manejar errores
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!user) {
          setError('Debes iniciar sesión para ver tus citas.');
          setLoading(false);
          return;

        }

        // Obtener cliente a partir del ID del usuario logueado
        const clientResponse = await getClientByUserId(user.idUser);
        const clientId = clientResponse.data.idClient;

        // Obtener citas asociadas al cliente
        const appointmentsResponse = await getAllAppointmentsByClientId(clientId);
        setAppointments(appointmentsResponse.data);
        setError(null);
      } catch (err) {
        console.error('Error al obtener las citas:', err);
        setError('Ocurrió un error al obtener tus citas. Inténtalo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tus Citas</h1>
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.idAppointment}
              className="p-4 border rounded-lg bg-white shadow"
            >
              <p><strong>Fecha:</strong> {appointment.dateAppointment}</p>
              <p><strong>Hora:</strong> {appointment.hourAppointment.hour}</p>
              <p><strong>Estado:</strong> {appointment.status}</p>
              <p><strong>Total:</strong> ${appointment.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg text-gray-600">No tienes citas registradas.</p>
      )}
    </div>
  );
}

export default Citas;

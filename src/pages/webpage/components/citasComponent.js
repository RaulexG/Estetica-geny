import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"; // Para el botón "Regresar"
import { UserContext } from "../../../context/UserContext"; // Contexto del usuario
import { getClientByUserId } from "../../../services/loginService"; // Servicio para obtener cliente
import { getAllAppointmentsByClientId } from "../../../services/clientsService"; // Servicio para obtener citas

function Citas() {
  const { user } = useContext(UserContext); // Obtener usuario logueado
  const [appointments, setAppointments] = useState([]); // Almacenar citas
  const [clientName, setClientName] = useState(""); // Nombre del cliente
  const [error, setError] = useState(null); // Manejar errores
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!user) {
          setError("Debes iniciar sesión para ver tus citas.");
          setLoading(false);
          return;
        }

        // Obtener cliente a partir del ID del usuario logueado
        const clientResponse = await getClientByUserId(user.idUser);
        const clientId = clientResponse.data.idClient;
        setClientName(clientResponse.data.user.name); // Guardar el nombre del cliente

        // Obtener citas asociadas al cliente
        const appointmentsResponse = await getAllAppointmentsByClientId(clientId);
        setAppointments(appointmentsResponse.data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener las citas:", err);
        setError("Ocurrió un error al obtener tus citas. Inténtalo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-pink-100 to-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hola, {clientName} 👋</h1>
        <p className="text-lg text-gray-600">Aquí puedes ver todas tus citas registradas.</p>
      </div>
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.idAppointment}
              className="p-4 border rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-lg text-gray-800">
                  {new Date(appointment.dateAppointment).toLocaleDateString()}
                </p>
                <span
                  className={`px-3 py-1 text-sm rounded ${
                    appointment.status === "PENDIENTE"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
              <p className="text-gray-700">
                <strong>Hora:</strong> {appointment.hourAppointment.hour}
              </p>
              <p className="text-gray-700">
                <strong>Total:</strong> ${appointment.total.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">
            No tienes citas registradas. ¡Agenda una pronto!
          </p>
        </div>
      )}

      {/* Botones al final */}
      <div className="flex justify-center space-x-4 mt-8">
        <Link
          to="/client"
          className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Regresar
        </Link>
        <a
          href="/"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300"
        >
          Cerrar sesión
        </a>
      </div>
    </div>
  );
}

export default Citas;

import React, { useState, useEffect, useContext } from "react";
import { addAppointment } from "../../../services/AppointmentService";
import { getAllEmployees } from "../../../services/employeeService";
import { getAllHours } from "../../../services/hourAppointmentService";
import { getAllServices } from "../../../services/serviceService";
import { getClientByUserId } from "../../../services/loginService"; // Importar el servicio para obtener el cliente
import { UserContext } from "../../../context/UserContext"; // Contexto del usuario

function Citas() {
  const { user } = useContext(UserContext); // Obtener el usuario logueado
  const [formData, setFormData] = useState({
    clientId: "", // Cliente asociado
    employeeId: "",
    date: "",
    hourId: "",
    selectedServices: [],
    status: "PENDIENTE", // Estado fijo
    total: 0,
  });

  const [employees, setEmployees] = useState([]);
  const [hours, setHours] = useState([]);
  const [services, setServices] = useState([]);
  const [client, setClient] = useState(null); // Datos del cliente
  const [alert, setAlert] = useState({ type: "", message: "" }); // Manejar alertas

  useEffect(() => {
    // Cargar estilistas, horarios y servicios
    const fetchData = async () => {
      try {
        const employeesResponse = await getAllEmployees();
        const hoursResponse = await getAllHours();
        const servicesResponse = await getAllServices();

        setEmployees(employeesResponse.data || []);
        setHours(hoursResponse.data || []);
        setServices(servicesResponse.data || []);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setAlert({ type: "error", message: "Error al cargar los datos. Inténtalo más tarde." });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Obtener los datos del cliente si el usuario está logueado
    const fetchClientData = async () => {
      try {
        if (user) {
          const clientResponse = await getClientByUserId(user.idUser);
          setClient(clientResponse.data);
          setFormData((prevData) => ({
            ...prevData,
            clientId: clientResponse.data.idClient, // Asignar el cliente al formulario
          }));
        }
      } catch (err) {
        console.error("Error al obtener datos del cliente:", err);
        setAlert({ type: "error", message: "Error al obtener los datos del cliente." });
      }
    };
    fetchClientData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const selectedServiceId = parseInt(e.target.value, 10);
    if (selectedServiceId) {
      const selectedService = services.find(
        (service) => service.idService === selectedServiceId
      );

      setFormData((prevData) => {
        const alreadySelected = prevData.selectedServices.some(
          (service) => service.id === selectedServiceId
        );

        let updatedServices;
        let updatedTotal = prevData.total;

        if (alreadySelected) {
          // Si ya está seleccionado, lo eliminamos
          updatedServices = prevData.selectedServices.filter(
            (service) => service.id !== selectedServiceId
          );
          updatedTotal -= selectedService.price;
        } else {
          // Si no está seleccionado, lo agregamos
          updatedServices = [
            ...prevData.selectedServices,
            { id: selectedServiceId },
          ];
          updatedTotal += selectedService.price;
        }

        return {
          ...prevData,
          selectedServices: updatedServices,
          total: updatedTotal,
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" }); // Limpiar alertas

    if (
      !formData.clientId ||
      !formData.employeeId ||
      !formData.date ||
      !formData.hourId ||
      formData.selectedServices.length === 0 ||
      formData.total <= 0
    ) {
      setAlert({ type: "error", message: "Por favor, completa todos los campos requeridos." });
      return;
    }

    const appointmentData = {
      total: formData.total,
      dateAppointment: formData.date,
      status: formData.status, // Estado fijo
      hourAppointment: {
        idHour: parseInt(formData.hourId, 10),
      },
      employee: {
        idEmployee: parseInt(formData.employeeId, 10),
      },
      client: {
        idClient: parseInt(formData.clientId, 10),
      },
      details: formData.selectedServices.map((service) => ({
        idService: service.id,
      })),
    };

    try {
      await addAppointment(appointmentData);
      setAlert({ type: "success", message: "¡Cita generada exitosamente!" });
      setFormData({
        clientId: "",
        employeeId: "",
        date: "",
        hourId: "",
        selectedServices: [],
        status: "PENDIENTE",
        total: 0,
      });
    } catch (error) {
      console.error("Error al generar la cita:", error.response?.data || error.message);
      setAlert({ type: "error", message: "Error al generar la cita. Inténtalo de nuevo." });
    }
  };

  return (
    <section id="citas" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/bg-cts.svg')" }}>
      <div className="absolute inset-0 bg-gray-bg bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-6xl font-bold mb-8">¡AGENDA TU CITA!</h2>
        <p className="text-pink-300 font-bold mb-8">
          Por favor, rellene el formulario y nos pondremos en contacto con usted.
        </p>
        {alert.message && (
          <div
            className={`mb-4 p-3 rounded ${
              alert.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {alert.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-5">
          {client && (
            <p className="text-white text-lg">
              Cliente: <span className="font-bold">{client.user.name}</span>
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <select
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Seleccionar Estilista</option>
              {employees.map((employee) => (
                <option key={employee.idEmployee} value={employee.idEmployee}>
                  {employee.user.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <select
              name="hourId"
              value={formData.hourId}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Seleccionar Horario</option>
              {hours.map((hour) => (
                <option key={hour.idHour} value={hour.idHour}>
                  {hour.hour}
                </option>
              ))}
            </select>
            <select
              className="w-full p-3 rounded-lg bg-pink-700 bg-opacity-50 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={handleServiceChange}
              value=""
            >
              <option value="">Seleccionar Servicios</option>
              {services.map((service) => (
                <option key={service.idService} value={service.idService}>
                  {service.name} - ${service.price}
                </option>
              ))}
            </select>
          </div>
          <ul className="text-white">
            {formData.selectedServices.map((service) => {
              const fullService = services.find((s) => s.idService === service.id);
              return (
                <li key={service.id}>
                  {fullService?.name} - ${fullService?.price}
                </li>
              );
            })}
          </ul>
          <p className="text-white text-lg">
            Total: <span className="font-bold">${formData.total.toFixed(2)}</span>
          </p>
          <button
            type="submit"
            className="w-80 py-3 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Citas;

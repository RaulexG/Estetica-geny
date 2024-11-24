import React, { useState, useEffect } from 'react';
import { addAppointment } from '../../../services/AppointmentService';
import { getAllClients } from '../../../services/clientsService';
import { getAllEmployees } from '../../../services/employeeService';
import { getAllHours } from '../../../services/hourAppointmentService';
import { getAllServices } from '../../../services/serviceService';

function GenerarCita() {
  const [formData, setFormData] = useState({
    clientId: '',
    employeeId: '',
    date: '',
    hourId: '',
    selectedServices: [], // Aquí almacenaremos los servicios seleccionados
    status: 'PENDIENTE',
    total: 0, // El total se calcula dinámicamente
  });
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [hours, setHours] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Cargar clientes, estilistas, horarios y servicios desde la base de datos
    const fetchData = async () => {
      try {
        const clientsResponse = await getAllClients();
        const employeesResponse = await getAllEmployees();
        const hoursResponse = await getAllHours();
        const servicesResponse = await getAllServices();

        setClients(clientsResponse.data || []);
        setEmployees(employeesResponse.data || []);
        setHours(hoursResponse.data || []);
        setServices(servicesResponse.data || []);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError('Error al cargar datos. Por favor, inténtalo más tarde.');
      }
    };
    fetchData();
  }, []);

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
      const selectedService = services.find((service) => service.idService === selectedServiceId);

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
          updatedServices = [...prevData.selectedServices, { id: selectedServiceId }];
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
    setError(null);
    setSuccess(null);

    if (
      !formData.clientId ||
      !formData.employeeId ||
      !formData.date ||
      !formData.hourId ||
      formData.selectedServices.length === 0 ||
      formData.total <= 0
    ) {
      setError('Por favor, completa todos los campos requeridos.');
      return;
    }

    const appointmentData = {
      total: formData.total,
      dateAppointment: formData.date,
      status: formData.status,
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
      setSuccess('Cita generada exitosamente.');
      setFormData({
        clientId: '',
        employeeId: '',
        date: '',
        hourId: '',
        selectedServices: [],
        status: 'PENDIENTE',
        total: 0,
      });
    } catch (error) {
      console.error('Error al generar la cita:', error.response?.data || error.message);
      setError('Error al generar la cita. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Generar Cita</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Cliente:
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="">Seleccionar Cliente</option>
            {clients.map((client) => (
              <option key={client.idClient} value={client.idClient}>
                {client.user.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Seleccionar Estilista:
          <select
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="">Seleccionar Estilista</option>
            {employees.map((employee) => (
              <option key={employee.idEmployee} value={employee.idEmployee}>
                {employee.user.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Fecha:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Horario:
          <select
            name="hourId"
            value={formData.hourId}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="">Seleccionar Horario</option>
            {hours.map((hour) => (
              <option key={hour.idHour} value={hour.idHour}>
                {hour.hour}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Servicios:
          <select
            className="w-full mt-2 p-2 border rounded"
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
          <ul className="mt-2">
            {formData.selectedServices.map((service) => {
              const fullService = services.find((s) => s.idService === service.id);
              return (
                <li key={service.id}>
                  {fullService?.name} - ${fullService?.price}
                </li>
              );
            })}
          </ul>
        </label>
        <label className="block mb-4">
          Total: <span className="font-bold">${formData.total.toFixed(2)}</span>
        </label>
        <label className="block mb-4">
          Estado:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="PENDIENTE">Pendiente</option>
            <option value="CONFIRMADA">Confirmada</option>
            <option value="CANCELADA">Cancelada</option>
          </select>
        </label>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">
          Generar Cita
        </button>
      </form>
    </div>
  );
}

export default GenerarCita;

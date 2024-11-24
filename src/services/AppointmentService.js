import axios from "axios";

const BASE_URL = "http://localhost:8080/appointments";

// Consultar todas las citas
export const getAllAppointments = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};

// Consultar una cita por su ID
export const getAppointmentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la cita con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva cita
export const addAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(BASE_URL, appointmentData);
    return response.data;
  } catch (error) {
    console.error("Error al agregar una cita:", error);
    throw error;
  }
};

// Actualizar una cita existente
export const updateAppointment = async (id, appointmentData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, appointmentData);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar la cita con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una cita
export const deleteAppointment = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; // Normalmente no hay cuerpo en DELETE, así que esto puede ser `undefined`.
  } catch (error) {
    console.error(`Error al eliminar la cita con ID ${id}:`, error);
    throw error;
  }
};

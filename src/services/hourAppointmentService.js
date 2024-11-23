import axios from 'axios';

const BASE_URL = 'http://localhost:8080/hourAppointments'; // URL base de las horas de citas

/**
 * Obtener todas las horas.
 * @returns {Promise} Promesa con el listado de horas.
 */
export const getAllHours = async () => {
  return await axios.get(BASE_URL);
};

/**
 * Obtener una hora específica por su ID.
 * @param {number} id ID de la hora.
 * @returns {Promise} Promesa con los datos de la hora.
 */
export const getHourById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

/**
 * Agregar una nueva hora.
 * @param {object} hourData Datos de la nueva hora.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const addHour = async (hourData) => {
  return await axios.post(BASE_URL, hourData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Actualizar una hora existente.
 * @param {number} id ID de la hora.
 * @param {object} updatedData Datos actualizados de la hora.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const updateHour = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/${id}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Eliminar una hora.
 * @param {number} id ID de la hora.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const deleteHour = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

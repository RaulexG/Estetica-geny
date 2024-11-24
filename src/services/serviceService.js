import axios from 'axios';

const BASE_URL = 'http://localhost:8080/services'; // URL base para servicios

/**
 * Obtener todos los servicios.
 * @returns {Promise} Promesa con el listado de servicios.
 */
export const getAllServices = async () => {
  return await axios.get(BASE_URL);
};

/**
 * Obtener un servicio por su ID.
 * @param {number} id ID del servicio.
 * @returns {Promise} Promesa con los datos del servicio.
 */
export const getServiceById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

/**
 * Obtener la imagen de un servicio por su ID.
 * @param {number} id ID del servicio.
 * @returns {Promise} Promesa con la imagen en formato Base64.
 */
export const getServiceImageById = async (id) => {
  return await axios.get(`${BASE_URL}/readImage/${id}`);
};

/**
 * Agregar un nuevo servicio.
 * @param {FormData} serviceData Datos del servicio (incluye imagen y JSON).
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const addService = async (serviceData) => {
  try {
    return await axios.post(BASE_URL, serviceData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('Error en la solicitud addService:', error);
    throw error;
  }
};

/**
 * Actualizar un servicio existente.
 * @param {number} id ID del servicio.
 * @param {Object} updatedData Datos actualizados del servicio.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const updateService = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/updateService/${id}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Actualizar la imagen de un servicio.
 * @param {number} id ID del servicio.
 * @param {File} newImage Nueva imagen del servicio.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const updateServiceImage = async (id, newImage) => {
  const formData = new FormData();
  formData.append('image', newImage);

  try {
    return await axios.put(`${BASE_URL}/updateImage/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('Error en la solicitud updateServiceImage:', error);
    throw error;
  }
};

/**
 * Eliminar un servicio por su ID.
 * @param {number} id ID del servicio.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const deleteService = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

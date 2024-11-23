import axios from 'axios';

const BASE_URL = 'http://localhost:8080/services';

/**
 * Fetch all services.
 * @returns {Promise} Axios response promise.
 */
export const getAllServices = async () => {
  return await axios.get(BASE_URL);
};

/**
 * Fetch a service by ID.
 * @param {number} id Service ID.
 * @returns {Promise} Axios response promise.
 */
export const getServiceById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

/**
 * Fetch the image of a service by its ID.
 * @param {number} id Service ID.
 * @returns {Promise} Axios response promise.
 */
export const getServiceImageById = async (id) => {
  return await axios.get(`${BASE_URL}/readImage/${id}`);
};

/**
 * Add a new service.
 * @param {object} serviceData Service data including name, duration, price, and products.
 * @param {File} image Service image file.
 * @returns {Promise} Axios response promise.
 */
export const addService = async (serviceData, image) => {
  if (!serviceData || !image) {
    throw new Error('Los datos del servicio o la imagen no están completos.');
  }

  const formData = new FormData();
  formData.append('service', new Blob([JSON.stringify(serviceData)], { type: 'application/json' }));
  formData.append('image', image);

  try {
    return await axios.post(BASE_URL, formData, {
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
 * Update an existing service.
 * @param {number} id Service ID.
 * @param {object} updatedData Updated service data.
 * @returns {Promise} Axios response promise.
 */
export const updateService = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/updateService/${id}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Update the image of a service.
 * @param {number} id Service ID.
 * @param {File} newImage Service image file.
 * @returns {Promise} Axios response promise.
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
 * Delete a service.
 * @param {number} id Service ID.
 * @returns {Promise} Axios response promise.
 */
export const deleteService = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

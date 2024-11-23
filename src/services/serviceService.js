import axios from 'axios';

const BASE_URL = 'http://localhost:8080/services';


export const getAllServices = async () => {
  return await axios.get(BASE_URL);
};


export const getServiceById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};


export const getServiceImageById = async (id) => {
  return await axios.get(`${BASE_URL}/readImage/${id}`);
};


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


export const updateService = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/updateService/${id}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

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

export const deleteService = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

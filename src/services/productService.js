import axios from 'axios';

const BASE_URL = 'http://localhost:8080/products'; // URL base de productos

/**
 * Obtener todos los productos.
 * @returns {Promise} Promesa con el listado de productos.
 */
export const getAllProducts = async () => {
  return await axios.get(BASE_URL);
};

/**
 * Obtener un producto por su ID.
 * @param {number} id ID del producto.
 * @returns {Promise} Promesa con los datos del producto.
 */
export const getProductById = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

/**
 * Obtener la imagen de un producto por su ID.
 * @param {number} id ID del producto.
 * @returns {Promise} Promesa con la imagen en formato Base64.
 */
export const getProductImageById = async (id) => {
  return await axios.get(`${BASE_URL}/readImage/${id}`);
};

/**
 * Obtener todas las imágenes de productos.
 * @returns {Promise} Promesa con todas las imágenes.
 */
export const getAllProductImages = async () => {
  return await axios.get(`${BASE_URL}/readAllImages`);
};


export const addProduct = async (formData) => {
  return await axios.post(BASE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};


export const updateProduct = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/updateProduct/${id}`, updatedData);
};


export const updateProductImage = async (id, formData) => {
  return await axios.put(`${BASE_URL}/updateImage/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Esto asegura que el backend interprete la solicitud correctamente
    },
  });
};


/**
 * Eliminar un producto.
 * @param {number} id ID del producto.
 * @returns {Promise} Promesa con la respuesta del servidor.
 */
export const deleteProduct = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`); // Deshabilitar producto
};

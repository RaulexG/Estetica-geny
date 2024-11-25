import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // URL base para las solicitudes

/**
 * Realizar login.
 * @param {Object} loginData - Datos del login (email y password).
 * @param {string} loginData.email - Correo electrónico del usuario.
 * @param {string} loginData.password - Contraseña del usuario.
 * @returns {Promise} Promesa con los datos del usuario autenticado.
 */
export const loginUser = async (loginData) => {
  return await axios.post(`${BASE_URL}/login`, loginData, {
    headers: {
      'Content-Type': 'application/json', // Asegura que los datos se envían como JSON
    },
  });
};

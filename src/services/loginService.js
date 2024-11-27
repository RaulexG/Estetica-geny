import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // URL base para las solicitudes

export const loginUser = async (loginData) => {
  return await axios.post(`${BASE_URL}/login`, loginData, {
    headers: {
      'Content-Type': 'application/json', // Asegura que los datos se envían como JSON
    },
  });
};

export const getClientByUserId = async (idUser) => {
  return await axios.get(`${BASE_URL}/login/findClient/${idUser}`);
};

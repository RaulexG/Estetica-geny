import axios from 'axios';

const BASE_URL = 'http://localhost:8080/clients';

// Obtener todos los clientes
export const getAllClients = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (error) {
    console.error('Error al obtener la lista de clientes:', error);
    throw error;
  }
};

// Obtener un cliente por ID
export const getClientById = async (id) => {
  try {
    return await axios.get(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error al obtener el cliente con ID ${id}:`, error);
    throw error;
  }
};

// Agregar un nuevo cliente
export const addClient = async (clientData) => {
  try {
    return await axios.post(BASE_URL, clientData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al agregar un cliente:', error);
    throw error;
  }
};

// Actualizar un cliente por ID
export const updateClient = async (id, updatedData) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`Error al actualizar el cliente con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un cliente por ID
export const deleteClient = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el cliente con ID ${id}:`, error);
    throw error;
  }
};

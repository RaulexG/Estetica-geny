import axios from 'axios';

const BASE_URL = 'http://localhost:8080/employees';

// Obtener todos los empleados
export const getAllEmployees = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (error) {
    console.error('Error al obtener la lista de empleados:', error);
    throw error;
  }
};

// Obtener un empleado por ID
export const getEmployeeById = async (id) => {
  try {
    return await axios.get(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error al obtener el empleado con ID ${id}:`, error);
    throw error;
  }
};

// Agregar un nuevo empleado
export const addEmployee = async (employeeData) => {
  try {
    return await axios.post(BASE_URL, employeeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al agregar un empleado:', error);
    throw error;
  }
};

// Actualizar un empleado por ID
export const updateEmployee = async (id, updatedData) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`Error al actualizar el empleado con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un empleado por ID
export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el empleado con ID ${id}:`, error);
    throw error;
  }
};

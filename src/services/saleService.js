import axios from "axios";

const BASE_URL = "http://localhost:8080/sales";

// Consultar todo el listado de ventas
export const getAllSales = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las ventas:", error);
    throw error;
  }
};

// Consultar una venta por su ID
export const getSaleById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la venta con ID ${id}:`, error);
    throw error;
  }
};

// Agregar una nueva venta
export const addSale = async (saleData) => {
  try {
    const response = await axios.post(BASE_URL, saleData);
    return response.data;
  } catch (error) {
    console.error("Error al agregar una venta:", error);
    throw error;
  }
};

// Actualizar una venta existente
export const updateSale = async (id, saleData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, saleData);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar la venta con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una venta
export const deleteSale = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; // Generalmente `DELETE` no tiene cuerpo, esto podría ser `undefined`.
  } catch (error) {
    console.error(`Error al eliminar la venta con ID ${id}:`, error);
    throw error;
  }
};

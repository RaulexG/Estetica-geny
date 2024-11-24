import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/productService";
import { getAllEmployees } from "../../../services/employeeService";
import { addSale } from "../../../services/saleService";

function PuntoDeVenta() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [employee, setEmployee] = useState(null);
  const [employees, setEmployees] = useState([]); // Asegurarse de inicializar como array vacío
  const [products, setProducts] = useState([]); // Productos cargados desde el backend
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("EFECTIVO");

  // Cargar productos y empleados al inicio
  useEffect(() => {
    fetchProducts();
    fetchEmployees();
  }, []);

  // Recalcular el total cuando cambien los productos seleccionados
  useEffect(() => {
    calculateTotal();
  }, [selectedProducts]);

  // Cargar productos desde el backend
  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response || []);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  // Cargar empleados desde el backend
  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response || []);
      setEmployee(response[0]?.idEmployee || null); // Seleccionar el primer empleado por defecto
    } catch (error) {
      console.error("Error al cargar empleados:", error);
      setEmployees([]); // En caso de error, asegúrate de mantener un array vacío
    }
  };

  // Agregar un producto a la lista de venta
  const addProduct = (productId, quantity) => {
    const product = products.find((p) => p.idProduct === productId);
    if (product) {
      const existingProduct = selectedProducts.find(
        (p) => p.idProduct === productId
      );
      if (existingProduct) {
        // Actualizar cantidad si ya existe
        setSelectedProducts((prev) =>
          prev.map((p) =>
            p.idProduct === productId
              ? { ...p, quantity: p.quantity + quantity, subtotal: (p.quantity + quantity) * p.price }
              : p
          )
        );
      } else {
        // Agregar nuevo producto
        const newProduct = {
          ...product,
          quantity,
          subtotal: product.price * quantity,
        };
        setSelectedProducts((prev) => [...prev, newProduct]);
      }
    }
  };

  // Eliminar un producto de la lista de venta
  const removeProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((product) => product.idProduct !== productId)
    );
  };

  // Calcular el total
  const calculateTotal = () => {
    const total = selectedProducts.reduce(
      (sum, product) => sum + product.subtotal,
      0
    );
    setTotal(total);
  };

  // Confirmar la venta
  const confirmSale = async () => {
    const saleDetails = selectedProducts.map((product) => ({
      product: { idProduct: product.idProduct },
      quantity: product.quantity,
      subtotal: product.subtotal,
    }));

    const saleData = {
      date,
      total,
      paymentMethod,
      client: { idClient: 1 }, // Cliente fijo, puedes cambiar esto según tu lógica
      employee: { idEmployee: employee },
      saleDetails,
    };

    try {
      await addSale(saleData);
      alert("Venta registrada con éxito.");
      setSelectedProducts([]);
      setTotal(0);
    } catch (error) {
      console.error("Error al registrar la venta:", error);
    }
  };

  // Cancelar la venta
  const cancelSale = () => {
    if (window.confirm("¿Estás seguro de que deseas cancelar la venta?")) {
      setSelectedProducts([]);
      setTotal(0);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-pink-500">Punto de Venta</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Fecha */}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Fecha:</label>
          <input
            type="date"
            className="p-2 border rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Empleado */}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Empleado:</label>
          <select
            className="p-2 border rounded w-full"
            value={employee || ""}
            onChange={(e) => setEmployee(e.target.value)}
          >
            {employees.length > 0 ? (
              employees.map((emp) => (
                <option key={emp.idEmployee} value={emp.idEmployee}>
                  {emp.user.name}
                </option>
              ))
            ) : (
              <option value="">Cargando empleados...</option>
            )}
          </select>
        </div>

        {/* Productos */}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Seleccionar Producto:</label>
          <div className="flex items-center">
            <select
              className="p-2 border rounded w-full mr-2"
              onChange={(e) => addProduct(parseInt(e.target.value), 1)}
            >
              <option value="">Seleccione un producto</option>
              {products.map((product) => (
                <option key={product.idProduct} value={product.idProduct}>
                  {product.name} - ${product.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabla de productos seleccionados */}
        <div className="mt-4 bg-white p-4 rounded-lg">
          <h3 className="font-bold mb-4">Productos seleccionados</h3>
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Nombre del producto</th>
                <th className="px-4 py-2">Costo</th>
                <th className="px-4 py-2">Importe</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product) => (
                <tr key={product.idProduct}>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">${product.subtotal.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-red-500"
                      onClick={() => removeProduct(product.idProduct)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total y acciones */}
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <select
            className="p-2 border rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="EFECTIVO">Efectivo</option>
            <option value="TARJETA">Tarjeta</option>
          </select>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={confirmSale}
          >
            Confirmar Compra
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={cancelSale}
          >
            Cancelar Venta
          </button>
        </div>
      </div>
    </div>
  );
}

export default PuntoDeVenta;

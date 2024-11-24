import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../../services/productService";
import { getAllEmployees } from "../../../services/employeeService";
import { getAllClients } from '../../../services/clientsService'; // Importar el servicio de clientes
import { addSale } from "../../../services/saleService";

function PuntoDeVenta() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [employee, setEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("EFECTIVO");
  const [quantity, setQuantity] = useState(1); // Nueva cantidad para agregar productos

  const paymentMethods = ["CREDITO", "TRANSFERENCIA", "EFECTIVO"];

  useEffect(() => {
    fetchProducts();
    fetchEmployees();
    fetchClients();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [selectedProducts]);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setProducts([]);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(Array.isArray(response.data) ? response.data : []);
      setEmployee(response.data?.[0]?.idEmployee || null);
    } catch (error) {
      setEmployees([]);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await getAllClients();
      setClients(Array.isArray(response.data) ? response.data : []);
      setClient(response.data?.[0]?.idClient || null);
    } catch (error) {
      setClients([]);
    }
  };

  const addProduct = (productId) => {
    const product = products.find((p) => p.idProduct === productId);
    if (product) {
      const existingProduct = selectedProducts.find(
        (p) => p.idProduct === productId
      );
      if (existingProduct) {
        setSelectedProducts((prev) =>
          prev.map((p) =>
            p.idProduct === productId
              ? {
                  ...p,
                  quantity: p.quantity + quantity,
                  subtotal: (p.quantity + quantity) * p.price,
                }
              : p
          )
        );
      } else {
        const newProduct = {
          ...product,
          quantity,
          subtotal: product.price * quantity,
        };
        setSelectedProducts((prev) => [...prev, newProduct]);
      }
    }
    setQuantity(1); // Reiniciar la cantidad después de agregar
  };

  const removeProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((product) => product.idProduct !== productId)
    );
  };

  const calculateTotal = () => {
    const total = selectedProducts.reduce(
      (sum, product) => sum + product.subtotal,
      0
    );
    setTotal(total);
  };

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
      client: { idClient: client },
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
        <div className="mb-4">
          <label className="block mb-2 font-bold">Fecha:</label>
          <input
            type="date"
            className="p-2 border rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Empleado:</label>
          <select
            className="p-2 border rounded w-full"
            value={employee || ""}
            onChange={(e) => setEmployee(e.target.value)}
          >
            {employees.map((emp) => (
              <option key={emp.idEmployee} value={emp.idEmployee}>
                {emp.user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Cliente:</label>
          <select
            className="p-2 border rounded w-full"
            value={client || ""}
            onChange={(e) => setClient(e.target.value)}
          >
            {clients.map((cli) => (
              <option key={cli.idClient} value={cli.idClient}>
                {cli.user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Seleccionar Producto:</label>
          <div className="flex items-center">
            <select
              className="p-2 border rounded w-full mr-2"
              onChange={(e) => addProduct(parseInt(e.target.value))}
            >
              <option value="">Seleccione un producto</option>
              {products.map((product) => (
                <option key={product.idProduct} value={product.idProduct}>
                  {product.name} - ${product.price}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="p-2 border rounded w-20 mr-2"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => addProduct(parseInt(document.querySelector("select").value))}
            >
              Agregar
            </button>
          </div>
        </div>
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
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <select
            className="p-2 border rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
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

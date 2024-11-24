import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../../../services/productService';

function Productos() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Cargar productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data); // Carga los datos desde el backend
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        alert('No se pudo cargar la lista de productos.');
      }
    };

    fetchProducts();
  }, []);

  // Manejo de selección de productos
  const toggleProductSelection = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  // Manejo de eliminación de productos seleccionados
  const handleDeleteProducts = async () => {
    try {
      for (const id of selectedProducts) {
        await deleteProduct(id); // Llamar al servicio para eliminar cada producto
      }
      setProducts(products.filter((product) => !selectedProducts.includes(product.idProduct)));
      setSelectedProducts([]); // Limpiar selección
      alert('Productos eliminados con éxito.');
    } catch (error) {
      console.error('Error al eliminar productos:', error);
      alert('No se pudo eliminar algunos productos.');
    }
  };

  // Navegar a agregar producto
  const handleAddProduct = () => {
    navigate('/admin/productos/agregar');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Productos</h2>

      {/* Tabla de productos */}
      <div className="bg-gray-300 p-6 rounded-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 font-semibold">
              <th className="p-4 text-center">Seleccionar</th>
              <th className="p-4">Nombre</th>
              <th className="p-4 text-center">Tipo de producto</th>
              <th className="p-4 text-center">Stock</th>
              <th className="p-4 text-center">Precio</th>
              <th className="p-4 text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {products.map((product) => (
              <tr key={product.idProduct} className="border-b border-gray-300">
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.idProduct)}
                    onChange={() => toggleProductSelection(product.idProduct)}
                    className="cursor-pointer"
                  />
                </td>
                <td
                  className="p-4 text-pink-500 font-semibold cursor-pointer hover:underline"
                  onClick={() => navigate(`/admin/productos/editar/${product.idProduct}`)}
                >
                  {product.name}
                </td>
                <td className="p-4 text-center text-gray-600 font-semibold">{product.type}</td>
                <td className="p-4 text-center text-gray-600 font-semibold">
                  {product.quantityAvailable}
                </td>
                <td className="p-4 text-center text-gray-600 font-semibold">${product.price}</td>
                <td className="p-4 text-center">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
                        deleteProduct(product.idProduct)
                          .then(() => {
                            setProducts(products.filter((p) => p.idProduct !== product.idProduct));
                            alert('Producto eliminado con éxito.');
                          })
                          .catch((error) => {
                            console.error('Error al eliminar el producto:', error);
                            alert('No se pudo eliminar el producto.');
                          });
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-500 hover:text-red-500 transition"
                    >
                      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Acciones */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleAddProduct}
          className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Agregar nuevo producto
        </button>
        <button
          onClick={handleDeleteProducts}
          disabled={selectedProducts.length === 0}
          className={`px-8 py-3 rounded-lg font-semibold transition ${
            selectedProducts.length === 0
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Eliminar productos seleccionados
        </button>
      </div>
    </div>
  );
}

export default Productos;

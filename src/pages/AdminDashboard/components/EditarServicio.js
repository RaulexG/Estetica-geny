import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getServiceById,
  updateService,
  updateServiceImage,
  getServiceImageById,
} from '../../../services/serviceService';
import { getAllProducts } from '../../../services/productService';

function EditarServicio() {
  const { id } = useParams(); // Obtener el ID del servicio
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosUsados, setProductosUsados] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState(1);
  const [image, setImage] = useState(null); // Nueva imagen seleccionada
  const [previewImage, setPreviewImage] = useState(null); // Imagen para previsualización

  // Cargar datos del servicio, productos y su imagen
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServiceById(id);
        const { name, price, duration, products } = response.data;
        setName(name);
        setPrice(price);
        setDuration(duration);
        setProductosUsados(products || []); // Manejo de productos usados

        // Obtener la imagen del servicio
        const imageResponse = await getServiceImageById(id);
        if (imageResponse.data && imageResponse.data.data) {
          const imageBase64 = `data:image/jpeg;base64,${imageResponse.data.data}`;
          setPreviewImage(imageBase64);
        }
      } catch (error) {
        console.error('Error al cargar el servicio o su imagen:', error);
        alert('No se pudo cargar el servicio o su imagen.');
      }
    };

    const fetchProductos = async () => {
      try {
        const response = await getAllProducts();
        setProductos(response.data || []); // Manejo de lista de productos disponibles
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchService();
    fetchProductos();
  }, [id]);

  // Manejar la selección de una nueva imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Mostrar previsualización
    }
  };

  // Agregar producto a la lista de productos usados
  const agregarProducto = () => {
    if (productoSeleccionado) {
      const productoExistente = productosUsados.find(
        (p) => p.product.idProduct === parseInt(productoSeleccionado)
      );

      if (productoExistente) {
        alert('Este producto ya está agregado.');
        return;
      }

      const producto = productos.find(
        (p) => p.idProduct === parseInt(productoSeleccionado)
      );

      setProductosUsados([
        ...productosUsados,
        { product: producto, quantityProduct: parseInt(cantidadProducto) },
      ]);
      setProductoSeleccionado('');
      setCantidadProducto(1);
    }
  };

  // Eliminar un producto usado
  const eliminarProducto = (idProduct) => {
    setProductosUsados(
      productosUsados.filter((p) => p.product.idProduct !== idProduct)
    );
  };

  // Actualizar los datos del servicio
  const handleUpdateService = async () => {
    try {
      const updatedService = {
        name,
        price: parseFloat(price),
        duration,
        products: productosUsados.map((p) => ({
          product: { idProduct: p.product.idProduct },
          quantityProduct: p.quantityProduct,
        })),
      };

      await updateService(id, updatedService);
      alert('Servicio actualizado con éxito.');
      navigate('/admin/servicios');
    } catch (error) {
      console.error('Error al actualizar el servicio:', error);
      alert('No se pudo actualizar el servicio.');
    }
  };

  // Actualizar la imagen del servicio
  const handleUpdateImage = async () => {
    if (!image) {
      alert('Por favor, selecciona una imagen para actualizar.');
      return;
    }

    try {
      await updateServiceImage(id, image);
      alert('Imagen actualizada con éxito.');
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
      alert('No se pudo actualizar la imagen.');
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-white bg-gray-400 py-3 text-center rounded-t-lg">
        Editar Servicio
      </h2>
      <form className="bg-gray-100 p-6 rounded-b-lg space-y-4">
        <div className="flex space-x-6">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col">
              <label className="font-medium">Nombre del servicio</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="font-medium">Duración (HH:mm:ss)</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="font-medium">Precio</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="bg-gray-300 rounded-lg h-40 w-full flex items-center justify-center">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Previsualización"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <span className="text-gray-600">No se encontró imagen</span>
              )}
            </div>
            <label className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg cursor-pointer">
              Cambiar imagen
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Productos usados</label>
          <div className="bg-pink-200 p-3 rounded mt-2 h-32 overflow-y-auto">
            {productosUsados.map((p, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>
                  Producto: {p.product.name}, Cantidad: {p.quantityProduct}
                </span>
                <button
                  type="button"
                  className="text-red-500 hover:underline"
                  onClick={() => eliminarProducto(p.product.idProduct)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={productoSeleccionado}
            onChange={(e) => setProductoSeleccionado(e.target.value)}
            className="p-3 border border-gray-300 rounded bg-pink-200 flex-1"
          >
            <option value="">Seleccionar producto</option>
            {productos.map((producto) => (
              <option key={producto.idProduct} value={producto.idProduct}>
                {producto.name} (Stock: {producto.quantityAvailable})
              </option>
            ))}
          </select>
          <input
            type="number"
            value={cantidadProducto}
            onChange={(e) => setCantidadProducto(e.target.value)}
            min="1"
            className="w-16 p-3 border border-gray-300 rounded bg-pink-200"
          />
          <button
            type="button"
            onClick={agregarProducto}
            className="bg-gray-400 text-white px-3 py-2 rounded"
          >
            Agregar
          </button>
        </div>
      </form>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={handleUpdateService}
        >
          Actualizar Servicio
        </button>
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          onClick={handleUpdateImage}
        >
          Actualizar Imagen
        </button>
      </div>
    </div>
  );
}

export default EditarServicio;

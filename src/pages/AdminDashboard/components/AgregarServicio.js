import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addService } from '../../../services/serviceService'; // Servicio para guardar el servicio
import { getAllProducts } from '../../../services/productService'; // Servicio para obtener productos

function AgregarServicio() {
  const [image, setImage] = useState(null); // Imagen seleccionada
  const [productos, setProductos] = useState([]); // Lista de productos disponibles
  const [productosUsados, setProductosUsados] = useState([]); // Productos seleccionados para el servicio
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState(1);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  // Cargar los productos de tipo "SERVICIO" al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getAllProducts();
        const productosFiltrados = response.data.filter(
          (producto) => producto.type === 'SERVICIO'
        );
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProductos();
  }, []);

  // Manejar la selección de una nueva imagen
  const manejarImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
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

      if (producto && cantidadProducto > producto.quantityAvailable) {
        alert(`Stock insuficiente para el producto: ${producto.name}`);
        return;
      }

      setProductosUsados([
        ...productosUsados,
        { product: producto, quantityProduct: parseInt(cantidadProducto) },
      ]);
      setProductoSeleccionado('');
      setCantidadProducto(1);
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !price || !duration || productosUsados.length === 0 || !image) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Crear el objeto FormData
    const formData = new FormData();
    formData.append(
      'service',
      new Blob(
        [
          JSON.stringify({
            name,
            price: parseFloat(price),
            duration,
            products: productosUsados.map((p) => ({
              product: { idProduct: p.product.idProduct },
              quantityProduct: p.quantityProduct,
            })),
          })
        ],
        { type: 'application/json' }
      )
    );
    formData.append('image', image);
  
    // **Depuración**
    console.log('Contenido del FormData:');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      await addService(formData); // Llamar al servicio para guardar
      alert('Servicio agregado exitosamente.');
      navigate('/admin/servicios'); // Redirigir después de agregar
    } catch (error) {
      console.error('Error al agregar el servicio:', error);
      alert(`Error al agregar el servicio: ${error.response?.data?.message || error.message}`);
    }
  };
  

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white bg-gray-500 py-3 text-center rounded-t-lg">
        Agregar servicio
      </h2>
      <form className="bg-gray-100 p-6 rounded-b-lg space-y-4" onSubmit={manejarSubmit}>
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
                <label className="font-medium">Precio</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="font-medium">Duración (HH:mm:ss)</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                  placeholder="HH:mm:ss"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div className="bg-gray-300 rounded-lg h-40 w-full flex items-center justify-center">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Imagen cargada"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <span className="text-gray-600">Agregar imagen</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={manejarImagen}
              className="hidden"
              id="subirImagen"
            />
            <label
              htmlFor="subirImagen"
              className="mt-2 bg-gray-400 text-white px-3 py-2 rounded cursor-pointer"
            >
              Agregar imagen
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Productos usados</label>
          <div className="bg-pink-200 p-3 rounded mt-2 h-20 overflow-y-auto">
            {productosUsados.map((p, index) => (
              <span key={index} className="block">
                Producto: {p.product.name}, Cantidad: {p.quantityProduct}
              </span>
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
        <button type="submit" className="bg-gray-500 text-white w-full py-3 rounded mt-6">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarServicio;

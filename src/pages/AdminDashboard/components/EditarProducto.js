import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getProductById,
  updateProduct,
  updateProductImage,
  getProductImageById, // Nuevo servicio para obtener la imagen del producto
} from '../../../services/productService';

function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantityAvailable, setQuantityAvailable] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Cargar los datos del producto y la imagen al montar el componente
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        const { name, price, quantityAvailable, type } = response.data;
        setName(name);
        setPrice(price);
        setQuantityAvailable(quantityAvailable);
        setType(type);

        // Cargar la imagen del producto
        const imageResponse = await getProductImageById(id);
        const imageBase64 = `data:image/jpeg;base64,${imageResponse.data.data}`; // Ajusta según la estructura del backend
        setPreviewImage(imageBase64); // Asignar la imagen al estado
      } catch (error) {
        console.error('Error al cargar los datos del producto:', error);
        alert('No se pudo cargar el producto o su imagen.');
      }
    };

    fetchProduct();
  }, [id]);

  // Manejar la selección de una nueva imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Previsualización de la nueva imagen
    }
  };

  // Manejar la actualización del producto
  const handleUpdateProduct = async () => {
    try {
      const productData = { name, price, quantityAvailable, type };
      await updateProduct(id, productData);
      alert('Producto actualizado con éxito.');
    } catch (error) {
      console.error('Error al actualizar los datos del producto:', error);
      alert('No se pudo actualizar el producto.');
    }
  };

  // Manejar la actualización de la imagen del producto
  const handleUpdateImage = async () => {
    if (!image) {
      alert('Por favor, selecciona una imagen para actualizar.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', image); // El backend espera esta parte como "image"

      await updateProductImage(id, formData);

      alert('Imagen actualizada con éxito.');
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);
      alert('No se pudo actualizar la imagen.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-white bg-gray-400 py-3 text-center rounded-t-lg">
        Editar producto
      </h2>
      <form className="bg-gray-100 p-6 rounded-b-lg flex space-x-6">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">Nombre del producto</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Tipo de producto</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
            >
              <option value="">Seleccione una opción</option>
              <option value="VENTA">Venta</option>
              <option value="PERSONAL">Personal</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 flex flex-col">
              <label className="font-medium">Stock</label>
              <input
                type="number"
                min="0"
                value={quantityAvailable}
                onChange={(e) => setQuantityAvailable(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-medium">Precio</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="bg-gray-300 rounded-lg h-80 w-full flex items-center justify-center">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Previsualización"
                className="object-contain w-full h-full rounded-lg"
              />
            ) : (
              <span className="text-gray-600">No se ha seleccionado ninguna imagen</span>
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
      </form>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={handleUpdateProduct}
        >
          Actualizar Producto
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

export default EditarProducto;


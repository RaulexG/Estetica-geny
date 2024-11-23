import React, { useState } from 'react';
import { addProduct } from '../../../services/productService';

function AgregarProducto() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantityAvailable, setQuantityAvailable] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);

  const handleAddProduct = async () => {
    if (!name || !price || !quantityAvailable || !type || !image) {
      alert('Por favor, completa todos los campos y sube una imagen.');
      return;
    }

    try {
      const productData = {
        name,
        price: parseFloat(price),
        quantityAvailable: parseInt(quantityAvailable),
        type,
      };

      const formData = new FormData();
      formData.append('product', new Blob([JSON.stringify(productData)], { type: 'application/json' }));
      formData.append('image', image);

      await addProduct(formData);

      alert('Producto agregado con éxito.');
      setName('');
      setPrice('');
      setQuantityAvailable('');
      setType('');
      setImage(null);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('No se pudo agregar el producto. Verifica los datos e intenta nuevamente.');
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold text-white bg-gray-400 py-3 text-center rounded-t-lg">Agregar producto</h2>
      <form className="bg-gray-100 p-8 rounded-b-lg space-y-6">
        <div className="flex flex-col">
          <label className="font-medium">Nombre del producto</label>
          <input
            type="text"
            className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Tipo de producto</label>
          <select
            className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="VENTA">Venta</option>
            <option value="SERVICIO">Servicio</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 flex flex-col">
            <label className="font-medium">Stock</label>
            <input
              type="number"
              className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none"
              value={quantityAvailable}
              onChange={(e) => setQuantityAvailable(e.target.value)}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="font-medium">Precio</label>
            <input
              type="number"
              step="0.01"
              className="mt-2 p-3 rounded bg-pink-300 border-none focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-300 rounded-lg h-40 flex items-center justify-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Producto"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="text-gray-500">No se ha seleccionado una imagen</span>
            )}
          </div>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            onClick={() => document.getElementById('file-input').click()}
          >
            Subir imagen
          </button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <button
          type="button"
          className="bg-gray-500 text-white w-full py-3 rounded-lg"
          onClick={handleAddProduct}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarProducto;

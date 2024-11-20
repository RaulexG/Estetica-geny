import React, { useState } from 'react';

function AgregarServicio() {
  const [imagen, setImagen] = useState(null);
  const [productosUsados, setProductosUsados] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');

  // Manejar la carga de la imagen
  const manejarImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Manejar la selección de productos
  const agregarProducto = () => {
    if (productoSeleccionado) {
      setProductosUsados([...productosUsados, productoSeleccionado]);
      setProductoSeleccionado('');
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white bg-gray-500 py-3 text-center rounded-t-lg">
        Agregar servicio
      </h2>
      <form className="bg-gray-100 p-6 rounded-b-lg space-y-4">
        <div className="flex space-x-6">
          {/* Sección Izquierda */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col">
              <label className="font-medium">Nombre del servicio</label>
              <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded bg-pink-200"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="font-medium">Precio</label>
                <input
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="font-medium">Duración</label>
                <input
                  type="number"
                  className="mt-2 p-3 border border-gray-300 rounded bg-pink-200 w-full"
                  placeholder="Minutos"
                />
              </div>
            </div>
          </div>

          {/* Sección Derecha: Imagen */}
          <div className="w-1/2 flex flex-col items-center">
            <div className="bg-gray-300 rounded-lg h-40 w-full flex items-center justify-center">
              {imagen ? (
                <img
                  src={imagen}
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

        {/* Productos usados */}
        <div className="flex flex-col">
          <label className="font-medium">Productos usados</label>
          <div className="bg-pink-200 p-3 rounded mt-2 h-20 overflow-y-auto">
            {productosUsados.map((producto, index) => (
              <span key={index} className="block">
                {producto}
              </span>
            ))}
          </div>
        </div>

        {/* Seleccionar producto */}
        <div className="flex items-center space-x-4">
          <select
            value={productoSeleccionado}
            onChange={(e) => setProductoSeleccionado(e.target.value)}
            className="p-3 border border-gray-300 rounded bg-pink-200 flex-1"
          >
            <option value="">Seleccionar producto</option>
            <option value="Producto 1">Producto 1</option>
            <option value="Producto 2">Producto 2</option>
            <option value="Producto 3">Producto 3</option>
          </select>
          <button
            type="button"
            onClick={agregarProducto}
            className="bg-gray-400 text-white px-3 py-2 rounded"
          >
            Agregar
          </button>
        </div>

        {/* Botón de agregar */}
        <button type="submit" className="bg-gray-500 text-white w-full py-3 rounded mt-6">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarServicio;

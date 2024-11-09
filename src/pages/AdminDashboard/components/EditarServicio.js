// src/pages/AdminDashboard/components/EditarServicio.js
import React from 'react';
import { useParams } from 'react-router-dom';

function EditarServicio() {
  const { id } = useParams();
  const isEditing = id !== 'nuevo';

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-gray-100 rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gray-500 text-white p-4 rounded-t-lg">
          {isEditing ? 'Editar servicio' : 'Agregar servicio'}
        </h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Nombre del Servicio */}
            <div className="flex-1">
              <label className="block font-semibold mb-2">Nombre del servicio</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-pink-300 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Imagen del Servicio */}
            <div className="flex-1 flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 bg-gray-300">
              <div className="text-center text-gray-500">
                {/* Ícono de subir imagen */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 6h-1.586l-1-1c-.579-.579-1.595-1-2.414-1h-4c-.819 0-1.835.421-2.414 1l-1 1H5C3.346 6 2 7.346 2 9v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3m-7 10a3.5 3.5 0 1 1 .001-7.001A3.5 3.5 0 0 1 12 16m6-4.701a1.3 1.3 0 1 1 0-2.6a1.3 1.3 0 0 1 0 2.6" />
                </svg>
              </div>
              <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg">
                Agregar imagen
              </button>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="block font-semibold mb-2">Descripción</label>
            <textarea className="w-full h-32 p-3 rounded bg-pink-300 border border-gray-300 focus:outline-none resize-none"></textarea>
          </div>

          {/* Precio y Duración */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block font-semibold mb-2">Precio</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-pink-300 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-2">Duración</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-pink-300 border border-gray-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Botón de agregar/actualizar */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gray-500 text-white w-1/3 py-3 rounded-lg font-semibold"
            >
              {isEditing ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarServicio;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllServices, deleteService } from '../../../services/serviceService'; // Ajusta el path según tu estructura

function Servicios() {
  const navigate = useNavigate();
  const [servicios, setServicios] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);

  // Cargar servicios al montar el componente
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await getAllServices();
        setServicios(response.data); // Carga los datos desde el backend
      } catch (error) {
        console.error('Error al obtener servicios:', error);
        alert('No se pudo cargar la lista de servicios.');
      }
    };

    fetchServicios();
  }, []);

  // Navegar a la página de agregar servicio
  const handleAddService = () => {
    navigate('/admin/servicios/agregar');
  };

  // Navegar a la página de editar servicio
  const handleEditService = (id) => {
    navigate(`/admin/servicios/editar/${id}`);
  };

  // Seleccionar o deseleccionar servicios
  const toggleSeleccionarServicio = (id) => {
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((servicioId) => servicioId !== id) : [...prev, id]
    );
  };

  // Eliminar servicios seleccionados
  const eliminarSeleccionados = async () => {
    try {
      // Llamar al backend para eliminar servicios seleccionados
      await Promise.all(seleccionados.map((id) => deleteService(id)));
      // Actualizar la lista local después de eliminar
      setServicios(servicios.filter((servicio) => !seleccionados.includes(servicio.idService)));
      setSeleccionados([]);
      alert('Servicios eliminados con éxito.');
    } catch (error) {
      console.error('Error al eliminar servicios:', error);
      alert('No se pudo eliminar los servicios seleccionados.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Servicios</h2>

      <div className="bg-gray-300 p-6 rounded-lg overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 font-semibold text-sm">
              <th className="p-4 text-center">Seleccionar</th>
              <th className="p-4">Nombre</th>
              <th className="p-4 text-center">Duración</th>
              <th className="p-4 text-center">Precio</th>
              <th className="p-4 text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-sm">
            {servicios.map((servicio) => (
              <tr key={servicio.idService} className="border-b border-gray-300">
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={seleccionados.includes(servicio.idService)}
                    onChange={() => toggleSeleccionarServicio(servicio.idService)}
                    className="cursor-pointer w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                  />
                </td>
                <td
                  className="p-4 text-pink-500 font-semibold cursor-pointer hover:underline"
                  onClick={() => handleEditService(servicio.idService)}
                >
                  {servicio.name}
                </td>
                <td className="p-4 text-center text-gray-700 font-medium">
                  {servicio.duration || '0:00'} hrs
                </td>
                <td className="p-4 text-center text-gray-700 font-medium">${servicio.price}</td>
                <td className="p-4 text-center">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
                        deleteService(servicio.idService)
                          .then(() => {
                            setServicios(servicios.filter((s) => s.idService !== servicio.idService));
                            alert('Servicio eliminado con éxito.');
                          })
                          .catch((error) => {
                            console.error('Error al eliminar el servicio:', error);
                            alert('No se pudo eliminar el servicio.');
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

      <div className="flex justify-between mt-6">
        <button
          onClick={handleAddService}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Agregar nuevo servicio
        </button>
        <button
          onClick={eliminarSeleccionados}
          disabled={seleccionados.length === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            seleccionados.length === 0
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          Eliminar servicios seleccionados
        </button>
      </div>
    </div>
  );
}

export default Servicios;

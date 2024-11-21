// src/pages/WorkerDashboard/components/WorkerNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../imagenes/Logo.svg'; 

function WorkerNavbar() {
  return (
    <nav className="worker-navbar bg-gray-800 p-4 flex justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-4" /> {/* Mostramos el logo */}
      </div>

      <div className="flex space-x-4">
        <Link to="/worker" className="text-white font-bold text-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z" />
          </svg>
          Citas
        </Link>
        <Link to="/worker/punto-de-venta" className="text-white font-bold text-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M2.787 2.28a.75.75 0 0 1 .932.508l.55 1.862h14.655c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 0 1 .506-.932M6.25 19.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m8 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
          </svg>
          Punto de Venta
        </Link>
        <Link to="/worker/perfil" className="text-white font-bold text-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
          </svg>
          Perfil
        </Link>
        <button className="text-white font-bold text-lg">Cerrar Sesión</button>
      </div>
    </nav>
  );
}

export default WorkerNavbar;

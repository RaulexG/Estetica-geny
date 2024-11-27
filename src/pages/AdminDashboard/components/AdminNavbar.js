import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../imagenes/Logo.svg';

function AdminNavbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      {/* Enlaces de navegación en el centro */}
      <div className="flex-1 flex justify-end space-x-8 items-center">
        <Link to="/admin/" className="text-white flex flex-col items-center hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1" />
          </svg>
          <span className="text-xs">Panel de control</span>
        </Link>

        <Link to="/admin/servicios" className="text-white flex flex-col items-center hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.8 6.4c-1.884-2.512-4.28-3.9-6.8-3.9S7.084 3.888 5.2 6.4c-1.417 1.889-3.126 4.44-3.362 7.124c-.121 1.384.147 2.801 1.019 4.15c.861 1.332 2.268 2.531 4.315 3.58c1.259.645 2.63-.22 2.809-1.483a6.5 6.5 0 0 1-1.162-1.001c-1.013-1.105-1.82-2.723-1.82-4.77c0-3.428 1.77-5.735 3.9-6.344c.282-.08.6.132.634.424a5 5 0 0 0 4.917 4.42c.674.006.55 1.06.55 1.5c0 2.047-.806 3.665-1.82 4.77c-.362.396-.76.734-1.164 1.003c.16 1.268 1.518 2.14 2.778 1.531c2.165-1.044 3.643-2.243 4.538-3.585c.907-1.362 1.163-2.797 1.007-4.194c-.3-2.69-2.138-5.257-3.54-7.125Z" />
          </svg>
          <span className="text-xs">Servicios</span>
        </Link>

        <Link to="/admin/productos" className="text-white flex flex-col items-center hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.787 2.28a.75.75 0 0 1 .932.508l.55 1.862h14.655c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 0 1 .506-.932M6.25 19.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m8 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
          </svg>
          <span className="text-xs">Productos</span>
        </Link>

        <Link to="/admin/cuentas" className="text-white flex flex-col items-center hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" />
          </svg>
          <span className="text-xs">Cuentas</span>
        </Link>

        <Link to="/admin/perfil" className="text-white flex flex-col items-center hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
          </svg>
          <span className="text-xs">Perfil</span>
        </Link>

        <Link to="/" className="text-white hover:text-gray-300 text-sm flex items-center">
          <span>Cerrar sesión</span>
        </Link>
      </div>
    </nav>
  );
}

export default AdminNavbar;


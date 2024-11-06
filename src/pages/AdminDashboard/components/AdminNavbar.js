import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="admin-navbar bg-gray-800 p-4 flex justify-between">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
        <Link to="/admin" className="text-white font-bold text-lg">Panel de Control</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/admin/servicios" className="text-white">Servicios</Link>
        <Link to="/admin/productos" className="text-white">Productos</Link>
        <Link to="/admin/cuentas" className="text-white">Cuentas</Link>
        <Link to="/admin/perfil" className="text-white">Perfil</Link>
        <button className="text-white">Cerrar Sesión</button>
      </div>
    </nav>
  );
}

export default AdminNavbar;

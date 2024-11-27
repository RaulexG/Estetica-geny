// src/pages/WorkerDashboard/components/WorkerNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function WorkerNavbar() {
  return (
    <nav className="worker-navbar bg-gray-800 p-4 flex justify-between">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />        
      </div>
      <div className="flex space-x-4">
        <Link to="/worker" className="text-white font-bold text-lg">Citas</Link>
        <Link to="/worker/punto-de-venta" className="text-white font-bold text-lg">Punto de Venta</Link>
        <Link to="/worker/perfil" className="text-white font-bold text-lg">Perfil</Link>
        <Link to="/" className="text-white font-bold text-lg">Cerrar Sesión</Link>        
      </div>
    </nav>
  );
}

export default WorkerNavbar;


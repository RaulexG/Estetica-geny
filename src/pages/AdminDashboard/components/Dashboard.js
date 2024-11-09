// src/pages/AdminDashboard/components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-pink-600 text-sm font-bold mb-4">Bienvenido de nuevo, administrador</h2>
      
      {/* Botón para descargar el reporte */}
      <a 
        href="/ruta/al/reporte.pdf" // Reemplaza esta ruta con la URL o el archivo local del PDF
        download="Reporte.pdf" // Nombre que se usará al descargar el archivo
        className="bg-gray-200 p-4 rounded-lg flex items-center justify-center mb-6 space-x-2 cursor-pointer hover:bg-gray-300 transition"
      >
        {/* Ícono del reporte */}
        <div className="w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32">
            <path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/>
            <path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"/>
          </svg>
        </div>
        
        {/* Texto del botón */}
        <h3 className="text-md font-semibold">Reporte</h3>
      </a>
      
      {/* Contenedor de Notificaciones */}
      <div className="bg-gray-300 p-6 rounded-lg">
        <h3 className="text-center text-md font-semibold mb-4">Notificaciones</h3>
        <div className="bg-pink-300 h-10 rounded mb-2"></div>
        <div className="bg-pink-300 h-10 rounded mb-2"></div>
        <div className="bg-pink-300 h-10 rounded mb-2"></div>
        <div className="bg-pink-300 h-10 rounded mb-2"></div>
        <div className="bg-pink-300 h-10 rounded mb-2"></div>
      </div>
    </div>
  );
}

export default Dashboard;

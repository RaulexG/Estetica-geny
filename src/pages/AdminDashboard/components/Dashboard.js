// src/pages/AdminDashboard/components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Bienvenido de nuevo, administrador</h2>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-2">Reporte</h3>
        {/* Información del reporte aquí */}
      </div>
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Notificaciones</h3>
        {/* Lista de notificaciones */}
        <div className="notification bg-pink-300 p-4 rounded mb-2">Notificación 1</div>
        <div className="notification bg-pink-300 p-4 rounded mb-2">Notificación 2</div>
      </div>
    </div>
  );
}

export default Dashboard;

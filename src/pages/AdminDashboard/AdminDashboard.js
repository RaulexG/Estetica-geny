// src/pages/AdminDashboard/AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './components/Dashboard';
import Servicios from './components/Servicios';
import EditarServicio from './components/EditarServicio';
import Productos from './components/Productos';
import AgregarProducto from './components/AgregarProducto'; // Asegúrate de que esté importado correctamente
import EditarProducto from './components/EditarProducto';   // Asegúrate de que esté importado correctamente
import Cuentas from './components/Cuentas';
import Perfil from './components/Perfil';

function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/editar/:id" element={<EditarServicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/agregar" element={<AgregarProducto />} /> {/* Ruta correcta para agregar producto */}
          <Route path="/productos/editar/:id" element={<EditarProducto />} /> {/* Ruta correcta para editar producto */}
          <Route path="/cuentas" element={<Cuentas />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;

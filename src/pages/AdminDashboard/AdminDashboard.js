// src/pages/AdminDashboard/AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './components/Dashboard';
import Servicios from './components/Servicios';
import EditarServicio from './components/EditarServicio';
import Productos from './components/Productos';
import AgregarServicio from './components/AgregarServicio'; 
import AgregarProducto from './components/AgregarProducto'; 
import EditarProducto from './components/EditarProducto';   
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
          <Route path="/servicios/agregar" element={<AgregarServicio />} />
          <Route path="/servicios/editar/:id" element={<EditarServicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/agregar" element={<AgregarProducto />} /> 
          <Route path="/productos/editar/:id" element={<EditarProducto />} /> 
          <Route path="/cuentas" element={<Cuentas />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;

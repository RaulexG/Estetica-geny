// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import WorkerDashboard from './pages/WorkerDashboard/WorkerDashboard';
import MainWeb from './pages/webpage/MainWeb';
import './style.scss';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<MainWeb />} />

        <Route path="/iniciar-sesion" element={<Login />} />

        {/* Ruta del dashboard de admin */}
        <Route path="/admin/*" element={<AdminDashboard />} />

        {/* Ruta del dashboard de trabajador */}
        <Route path="/worker/*" element={<WorkerDashboard />} />

        {/* Redirige a la página principal si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
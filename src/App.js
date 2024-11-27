// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import WorkerDashboard from './pages/WorkerDashboard/WorkerDashboard';
import MainWeb from './pages/webpage/MainWeb';
import './style.scss';
import Login from './pages/login/login';
import Citas from './pages/webpage/components/citasComponent';
import MainWebUser from './pages/webpage/MainWebUser';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<MainWeb />} />

        <Route path="/iniciar-sesion" element={<Login />} />

        <Route path="/client" element={<MainWebUser />} />

        {/* Ruta del dashboard de admin */}
        <Route path="/admin/*" element={<AdminDashboard />} />

        {/* Ruta del dashboard de trabajador */}
        <Route path="/worker/*" element={<WorkerDashboard />} />
        <Route path="/citas" element={<Citas />} /> {/* Correcto */}

        {/* Redirige a la página principal si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />

        
      </Routes>
    </Router>
  );
}

export default App;
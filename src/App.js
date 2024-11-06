// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import MainWeb from './pages/webpage/MainWeb';
import './style.scss';

function App() {
  // Establece el rol a "admin" para probar el dashboard
  const [userRole] = useState('admin');

  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<MainWeb />} />

        {/* Ruta del dashboard de admin */}
        {userRole === 'admin' && (
          <Route path="/admin/*" element={<AdminDashboard />} />
        )}

        {/* Redirige a la página principal si el rol no es admin */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/pages/WorkerDashboard/WorkerDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WorkerNavbar from './components/WorkerNavbar';
import PanelCitas from './components/PanelCitas';
import GenerarCita from './components/GenerarCita';
import ReagendarCita from './components/ReagendarCita';
import PuntoDeVenta from './components/PuntoDeVenta';
import Perfil from './components/Perfil';

function WorkerDashboard() {
  return (
    <div>
      <WorkerNavbar />
      <div className="worker-content">
        <Routes>
          <Route path="/" element={<PanelCitas />} />
          <Route path="/citas/nueva" element={<GenerarCita />} />
          <Route path="/citas/reagendar/:id" element={<ReagendarCita />} />
          <Route path="/punto-de-venta" element={<PuntoDeVenta />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </div>
  );
}

export default WorkerDashboard;


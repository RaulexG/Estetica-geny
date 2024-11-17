// src/pages/WorkerDashboard/components/PuntoDeVenta.js
import React from 'react';

function PuntoDeVenta() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Punto de Venta</h2>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Fecha:
          <input type="date" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Empleado:
          <select className="w-full mt-2 p-2 border rounded">
            <option>Juan Pérez</option>
            <option>María López</option>
          </select>
        </label>
        <div className="venta-items bg-white p-4 rounded mb-4">
          {/* Productos a vender */}
          <div className="venta-item flex justify-between mb-2">
            <span>Shampoo Olaplex</span>
            <span>$400</span>
          </div>
          <div className="venta-item flex justify-between mb-2">
            <span>Crema Sebastián</span>
            <span>$250</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Confirmar Compra</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Cancelar Venta</button>
        </div>
      </form>
    </div>
  );
}

export default PuntoDeVenta;

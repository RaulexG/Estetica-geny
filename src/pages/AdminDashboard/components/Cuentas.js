// src/pages/AdminDashboard/components/Cuentas.js
import React, { useState } from 'react';

function Cuentas() {
  const [accountType, setAccountType] = useState("usuario");

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Gestión de Cuentas</h2>
      <label className="block mb-4">
        Tipo de Cuenta:
        <select
          className="w-full mt-2 p-2 border rounded"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="usuario">Usuario</option>
          <option value="trabajador">Trabajador</option>
        </select>
      </label>
      <form className="bg-gray-100 p-6 rounded-lg">
        <label className="block mb-4">
          Nombre de la cuenta:
          <input type="text" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Correo electrónico:
          <input type="email" className="w-full mt-2 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Teléfono:
          <input type="tel" className="w-full mt-2 p-2 border rounded" />
        </label>
        {accountType === "trabajador" && (
          <label className="block mb-4">
            Dirección:
            <input type="text" className="w-full mt-2 p-2 border rounded" />
          </label>
        )}
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Guardar Cuenta</button>
      </form>
    </div>
  );
}

export default Cuentas;

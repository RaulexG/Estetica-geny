// src/pages/AdminDashboard/components/Cuentas.js
import React, { useState } from 'react';

function Cuentas() {
  const [accountType, setAccountType] = useState("usuario");

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Listados de cuentas</h2>
      
      {/* Selector de tipo de cuenta */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Cuentas</label>
        <select
          className="w-full p-3 border rounded bg-gray-300"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="usuario">Cuenta de administrador</option>
          <option value="trabajador">Cuenta de trabajador</option>
          <option value="cliente">Cuenta de cliente</option>
        </select>
      </div>

      {/* Configuración de la cuenta */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Configuración de la cuenta</h3>

        {accountType === "usuario" && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2 text-pink-500">Nombre de la cuenta</label>
              <input type="text" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Correo electrónico</label>
              <input type="email" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Vuelve a ingresar la contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Teléfono</label>
              <input type="tel" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>
          </div>
        )}

        {accountType === "trabajador" && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2 text-pink-500">Nombre de la cuenta</label>
              <input type="text" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Dirección</label>
              <input type="text" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Teléfono</label>
              <input type="tel" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>
            
            <div>
              <label className="block font-medium mb-2 text-pink-500">Correo electrónico</label>
              <input type="email" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Vuelve a ingresar la contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>
            
          </div>
        )}

        {accountType === "cliente" && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2 text-pink-500">Nombre de la cuenta</label>
              <input type="text" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Correo electrónico</label>
              <input type="email" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Vuelve a ingresar la contraseña</label>
              <input type="password" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>

            <div>
              <label className="block font-medium mb-2 text-pink-500">Teléfono</label>
              <input type="tel" className="w-full p-2 border-b-2 border-gray-300 focus:outline-none" />
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex justify-between mt-8">
          <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">Eliminar cuenta</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">Actualizar cuenta</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">Crear cuenta</button>
        </div>
      </div>
    </div>
  );
}

export default Cuentas;

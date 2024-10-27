import React from 'react';
import logo from '../imagenes/logo-estetica1.jpeg';

function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-custom">
      <a href="#inicio" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Ajusta el tamaño con h-10 o como prefieras */}
      </a>
      <ul className="flex space-x-6">
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#inicio">Inicio</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#servicios">Servicios</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#productos">Productos</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#citas">Citas</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#informacion">Información</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Iniciar sesión</a></li>
      </ul>
    </nav>
  );
}


export default Nav;
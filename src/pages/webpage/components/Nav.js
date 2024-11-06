// src/pages/WebPage/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-custom">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-11 ml-4 w-auto" />
      </Link>
      <ul className="flex space-x-6">
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="/">Inicio</Link></li>
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="#servicios">Servicios</Link></li>
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="#productos">Productos</Link></li>
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="#citas">Citas</Link></li>
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="#informacion">Información</Link></li>
        <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="/iniciar-sesion">Iniciar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;


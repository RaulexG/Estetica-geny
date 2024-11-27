import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Nav2() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-custom">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-11 ml-4 w-auto" />
      </Link>
      <ul className="flex space-x-6">
      <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#servicios">Servicios</a></li>
      <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#productos">Productos</a></li>
      <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#citas">Citas</a></li>
      <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#informacion">Información</a></li>
      <li><Link className="text-white text-lg font-semibold hover:text-gray-200" to="/citas">perfil</Link></li>
      </ul>
    </nav>
  );
}

export default Nav2;
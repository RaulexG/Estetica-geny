import React from 'react';

function Nav() {
  return (
    <nav className="flex justify-end p-4 bg-pink-500">
      <ul className="flex space-x-6">
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Inicio</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Servicios</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Productos</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Citas</a></li>
        <li><a className="text-white text-lg font-semibold hover:text-gray-200" href="#">Información</a></li>
      </ul>
    </nav>
  );
}


export default Nav;
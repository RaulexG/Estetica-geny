import React from 'react';

function Nav() {
  return (
    <nav className="app__nav">
      <ul className="app__nav-list">
        <li className="app__nav-item"><a className="app__nav-link" href="#">Inicio</a></li>
        <li className="app__nav-item"><a className="app__nav-link" href="#">Servicios</a></li>
        <li className="app__nav-item"><a className="app__nav-link" href="#">Productos</a></li>
        <li className="app__nav-item"><a className="app__nav-link" href="#">Citas</a></li>
        <li className="app__nav-item"><a className="app__nav-link" href="#">Información</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
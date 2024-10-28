import React from 'react';
import Logo from '../imagenes/logo-estetica1.jpeg';

function Header() {
  return (
    <header className="app__header">
      <div className="logo">
        <img src={Logo} alt="Logo"/>
        
      </div>
    </header>
  );
}

export default Header;
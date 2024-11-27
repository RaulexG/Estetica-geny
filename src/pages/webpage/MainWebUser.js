// src/pages/WebPage/MainWeb.js
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Productos from './components/Productos';
import Citas from './components/Citas';
import Informacion from './components/Informacion';
import Footer from './components/Footer';
import Nav2 from './components/Nav2';

function MainWebUser() {
  return (
    <div>
      <Nav2 />
      <Hero />
      <main>
        <section id="servicios">
          <Servicios />
        </section>
        <section id="productos">
          <Productos />
        </section>
        <section id="citas">
          <Citas />
        </section>
        <section id="informacion">
          <Informacion />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainWebUser;
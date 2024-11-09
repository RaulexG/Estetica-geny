import React from 'react';
import Categoria from './Categoria';
import shampooImg from '../../../imagenes/shampoo-olaplex.png';
import cremaImg from '../../../imagenes/crema-sebastian.jpg';

function Productos() {
  const productosShampoo = [
    { nombre: 'Shampoo Olaplex N°4P', precio: 450, imagen: shampooImg },
    { nombre: 'Shampoo Olaplex N°4P', precio: 450, imagen: shampooImg },
    { nombre: 'Shampoo Olaplex N°4P', precio: 450, imagen: shampooImg },
    { nombre: 'Shampoo Olaplex N°4P', precio: 450, imagen: shampooImg },
  ];

  const productosCremas = [
    { nombre: 'Crema Sebastian', precio: 500, imagen: cremaImg },
    { nombre: 'Crema Sebastian', precio: 500, imagen: cremaImg },
    { nombre: 'Crema Sebastian', precio: 500, imagen: cremaImg },
    { nombre: 'Crema Sebastian', precio: 500, imagen: cremaImg },
  ];

  return (
    <div id="productos" className="bg-gray-200 p-8">
      <h1 className="text-center font-bold text-5xl mb-8">PRODUCTOS</h1>
      <Categoria titulo="Shampoo" productos={productosShampoo} />
      <Categoria titulo="Cremas" productos={productosCremas} />
    </div>
  );
}

export default Productos;

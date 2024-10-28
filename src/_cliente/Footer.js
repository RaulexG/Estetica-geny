import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-200 text-black py-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Sección de Información */}
        <div className="mb-4">
          <p>&copy; 2024 Hair Studio by Geny. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import './style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './_cliente/Nav';
import Hero from './_cliente/Hero';
import Servicios from './_cliente/Servicios';
import Productos from './_cliente/Productos';
import Citas from './_cliente/Citas';
import Informacion from './_cliente/Informacion';
import Footer from './_cliente/Footer';
import Login from './_user/login/view';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Servicios />
              <Productos />
              <Citas />
              <Informacion />
              <Footer />
            </>
          } />
          <Route path="/iniciar-sesion" element={<Login />} /> {/* Página de inicio de sesión */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


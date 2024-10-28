import './style.scss';
import Header from './_cliente/Header';
import Nav from './_cliente/Nav';
import Hero from './_cliente/Hero';
import Servicios from './_cliente/Servicios';
import Productos from './_cliente/Productos';
import Citas from './_cliente/Citas';
import Informacion from './_cliente/Informacion';
import Footer from './_cliente/Footer';


function App() {
  return (
      <div className="app">
        <Nav />        
        <Hero />
        <Servicios />
        <Productos />
        <Citas />
        <Informacion />
        <Footer />
    </div>
  );
}

export default App;

import './style.scss';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Hero from './componentes/Hero';
import Servicios from './componentes/Servicios';
import Productos from './componentes/Productos';
import Citas from './componentes/Citas';
import Informacion from './componentes/Informacion';
import Footer from './componentes/Footer';


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

import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Hero from './componentes/Hero';
import Servicios from './componentes/Servicios';
import Productos from './componentes/Productos';
import Citas from './componentes/Citas';
import Informacion from './componentes/Informacion';

function App() {
  return (
      <div className="app">
        <Nav />
        <Header/>
        <Hero />
        <Servicios />
        <Productos />
        <Citas />
        <Informacion />
    </div>
  );
}

export default App;

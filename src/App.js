import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Hero from './componentes/Hero';
import Servicios from './componentes/Servicios';

function App() {
  return (
      <div className="app">
        <Nav />
        <Header/>
        <Hero />
        <Servicios />
    </div>
  );
}

export default App;

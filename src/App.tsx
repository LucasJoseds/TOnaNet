import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Tecnologias from './sections/Tecnologias';
import Evidencias from './sections/Evidencias';
import Materias from './sections/Materias';
import Comunidades from './sections/Comunidades';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
      <>
          <header>
              <Navigation />
              <Hero />
          </header>
          <main className="bg-white">
              <Sobre />
              <Tecnologias />
              <Evidencias />
              <Materias />
              <Comunidades />
          </main>
          <Footer />
      </>
  );
}

export default App;

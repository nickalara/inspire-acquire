import './App.css';
import About from './components/About';
import StickyFooter from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Why from './components/Why'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Products />
      <Why />
      <StickyFooter />
    </div>
  );
}

export default App;

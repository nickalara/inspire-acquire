import './App.css';
import About from './components/About';
import StickyFooter from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <StickyFooter />
    </div>
  );
}

export default App;

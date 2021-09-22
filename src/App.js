import './App.css';
import StickyFooter from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <StickyFooter />
    </div>
  );
}

export default App;

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Journey from './components/Journey';
import MediaVault from './components/MediaVault';
import OurGroup from './components/OurGroup';
import MemoryWall from './components/MemoryWall';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Home />
        <Journey />
        <MediaVault />
        <OurGroup />
        <MemoryWall />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

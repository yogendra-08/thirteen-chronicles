import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Journey from './components/Journey';
import MediaVault from './components/MediaVault';
import OurGroup from './components/OurGroup';
import MemoryWall from './components/MemoryWall';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ImageLightbox from './components/ImageLightbox';
import MemoryQuiz from './components/MemoryQuiz';
import GuestBook from './components/GuestBook';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import useTouchGestures from './hooks/useTouchGestures';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGuestBook, setShowGuestBook] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navigation sections for keyboard navigation
  const navigationSections = [
    { id: 'home', name: 'Home' },
    { id: 'journey', name: 'Journey' },
    { id: 'media-vault', name: 'Media Vault' },
    { id: 'our-group', name: 'Our Group' },
    { id: 'memory-wall', name: 'Memory Wall' }
  ];

  // Initialize keyboard navigation
  useKeyboardNavigation(navigationSections);

  // Initialize touch gestures for mobile
  useTouchGestures({
    onSwipeLeft: () => {
      // Navigate to next section
      const currentSection = navigationSections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const currentIndex = navigationSections.findIndex(s => s.id === currentSection.id);
        if (currentIndex < navigationSections.length - 1) {
          const nextSection = navigationSections[currentIndex + 1];
          const element = document.getElementById(nextSection.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    },
    onSwipeRight: () => {
      // Navigate to previous section
      const currentSection = navigationSections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const currentIndex = navigationSections.findIndex(s => s.id === currentSection.id);
        if (currentIndex > 0) {
          const prevSection = navigationSections[currentIndex - 1];
          const element = document.getElementById(prevSection.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    },
    threshold: 50
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Sample images for lightbox
  const lightboxImages = [
    {
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg',
      title: 'Ganesh Tekdi',
      description: 'Beautiful memories from our visit'
    },
    {
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg',
      title: 'Avishkar Event',
      description: 'Fun times at the department event'
    },
    {
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/turf.jpeg',
      title: 'Turf Day',
      description: 'Energy and fun on the field'
    }
  ];

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      // Only handle shortcuts when not typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'q':
            e.preventDefault();
            setShowQuiz(!showQuiz);
            break;
          case 'g':
            e.preventDefault();
            setShowGuestBook(!showGuestBook);
            break;
          case 'l':
            e.preventDefault();
            setLightboxOpen(!lightboxOpen);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyPress);
    return () => window.removeEventListener('keydown', handleGlobalKeyPress);
  }, [showQuiz, showGuestBook, lightboxOpen]);

  if (showQuiz) {
    return <MemoryQuiz />;
  }

  if (showGuestBook) {
    return <GuestBook />;
  }

  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <Home />
        <Journey />
        <MediaVault />
        <OurGroup />
        <MemoryWall />
        <Footer />
        
        {/* Lightbox */}
        <ImageLightbox
          images={lightboxImages}
          isOpen={lightboxOpen}
          currentImageIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />

        {/* Quick Access Buttons */}
        <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-30">
          <button
            onClick={() => setShowQuiz(true)}
            className="p-3 bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Memory Quiz (Ctrl+Q)"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">🧠</span>
          </button>
          <button
            onClick={() => setShowGuestBook(true)}
            className="p-3 bg-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Guest Book (Ctrl+G)"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">📖</span>
          </button>
          <button
            onClick={() => setLightboxOpen(true)}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Image Gallery (Ctrl+L)"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">🖼️</span>
          </button>
        </div>

        {/* Help Tooltip */}
        <div className="fixed top-20 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-30 max-w-xs">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Keyboard Shortcuts:</strong><br/>
            ↑↓ - Navigate sections<br/>
            Ctrl+Q - Quiz<br/>
            Ctrl+G - Guest Book<br/>
            Ctrl+L - Lightbox<br/>
            ? - Help
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

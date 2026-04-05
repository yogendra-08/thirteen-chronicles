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
import ErrorBoundary from './components/ErrorBoundary';
import useTouchGestures from './hooks/useTouchGestures';

function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGuestBook, setShowGuestBook] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Navigation sections for reference (keyboard navigation removed)
  const navigationSections = [
    { id: 'home', name: 'Home' },
    { id: 'journey', name: 'Journey' },
    { id: 'media-vault', name: 'Media Vault' },
    { id: 'our-group', name: 'Our Group' },
    { id: 'memory-wall', name: 'Memory Wall' }
  ];

  // Initialize touch gestures for mobile (keyboard navigation removed)
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

  // Global keyboard shortcuts removed - using buttons instead
  // useEffect(() => {
  //   const handleGlobalKeyPress = (e: KeyboardEvent) => {
  //     // Only handle shortcuts when not typing in input fields
  //     if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
  //       return;
  //     }

  //     if (e.ctrlKey || e.metaKey) {
  //       switch (e.key) {
  //         case 'q':
  //           e.preventDefault();
  //           setShowQuiz(!showQuiz);
  //           break;
  //         case 'g':
  //           e.preventDefault();
  //           setShowGuestBook(!showGuestBook);
  //           break;
  //         case 'l':
  //           e.preventDefault();
  //           setLightboxOpen(!lightboxOpen);
  //           break;
  //       }
  //     }
  //   };

  //   window.addEventListener('keydown', handleGlobalKeyPress);
  //   return () => window.removeEventListener('keydown', handleGlobalKeyPress);
  // }, [showQuiz, showGuestBook, lightboxOpen]);

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
          currentImageIndex={0}
          onClose={() => setLightboxOpen(false)}
        />

        {/* Quick Access Buttons - Fixed positioning */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 opacity-0 transition-opacity duration-300" id="quick-access-buttons">
          <button
            onClick={() => setShowQuiz(true)}
            className="p-3 bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Memory Quiz"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">🧠 Quiz</span>
          </button>
          <button
            onClick={() => setShowGuestBook(true)}
            className="p-3 bg-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Guest Book"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">📖 Guest Book</span>
          </button>
          <button
            onClick={() => setLightboxOpen(true)}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            title="Image Gallery"
          >
            <span className="text-xs font-bold group-hover:scale-110 transition-transform">🖼️ Image Gallery</span>
          </button>
        </div>

        {/* CSS for showing buttons only when scrolled to bottom */}
        <style>{`
          #quick-access-buttons {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          
          #quick-access-buttons.show {
            opacity: 1;
          }
          
          /* Show buttons when user scrolls near bottom of page */
          body:has(#memory-wall:in-viewport) #quick-access-buttons {
            opacity: 1;
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}

export default AppWrapper;

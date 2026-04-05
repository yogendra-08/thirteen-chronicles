import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          From strangers to family ❤️
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-delay">
          Batch 2023 – 2026
        </p>
        <button
          onClick={scrollToJourney}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in-delay-2"
        >
          Explore Journey
        </button>

        <button
          onClick={scrollToJourney}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown size={40} className="text-white" />
        </button>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent via-white dark:via-gray-900 to-white dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Cherished Moments
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎭</div>
                    <p className="text-xl font-semibold">Turf Dance Video</p>
                    <p className="text-sm opacity-80 mt-2">Replace with your video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
                Dance Night Memories
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                That unforgettable evening on the turf where we danced like no one was watching
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-xl font-semibold">Dhurandar Movie Outing</p>
                    <p className="text-sm opacity-80 mt-2">Replace with your video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-gray-900 dark:text-white">
                Cinema Adventure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Our epic movie day watching Dhurandar together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

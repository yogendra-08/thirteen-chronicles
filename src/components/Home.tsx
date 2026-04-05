import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg',
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home2.jpeg',
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home3.jpeg',
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home3.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
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
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in px-4">
          From strangers to family ❤️
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in-delay px-4">
          Batch 2023 – 2026
        </p>
        <button
          onClick={scrollToJourney}
          className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in-delay-2 text-sm sm:text-base"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white px-4">
            Cherished Moments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎭</div>
                    <p className="text-xl font-semibold">Dance Memory 1</p>
                    <p className="text-sm opacity-80 mt-2">Replace with your video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                First Dance Night
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Our first amazing dance performance together
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">⚽</div>
                    <p className="text-xl font-semibold">Turf Memory</p>
                    <p className="text-sm opacity-80 mt-2">Replace with your video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                Turf Champions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                That unforgettable evening on the turf where we played like champions
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">💃</div>
                    <p className="text-xl font-semibold">Dance Memory 2</p>
                    <p className="text-sm opacity-80 mt-2">Replace with your video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                Second Dance Night
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Another incredible dance performance that brought us closer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

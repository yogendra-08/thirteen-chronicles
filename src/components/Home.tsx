import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg',
    'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg',
    // 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/new.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);


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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/20 dark:to-white/10"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/60 to-transparent dark:from-white/20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in px-4">
          From strangers to family ❤️
        </h1>
      </div>
    </section>
  );
};

export default Home;

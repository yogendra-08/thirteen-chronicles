import { Calendar, MapPin, Utensils, Camera, Users, Film, Mountain } from 'lucide-react';

const Journey = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Encryptia',
      subtitle: 'IT Department',
      description: 'Our journey started with one of the most exciting department events — Encryptia. We were part of the Design Committee and also participated in Filmy Hungama. The entire event had a magical vibe as we created designs inspired by a Harry Potter theme, which we proudly called "Prince Magic Show". It was full of creativity, teamwork, and fun.',
      icon: <Calendar className="text-white" size={24} />,
      type: 'image',
      imageUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/event.jpeg'
    },
    {
      id: 2,
      title: 'Avishkar Event',
      subtitle: 'Fun & Energy',
      description: 'Avishkar gave us some of the most fun and energetic memories. From dancing together to clicking lots of photos, every moment was filled with joy. And of course, the highlight — enjoying delicious mutton together! It was a perfect mix of fun, food, and friendship.',
      icon: <Users className="text-white" size={24} />,
      type: 'image',
      imageUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg'
    },
    {
      id: 3,
      title: "Gaurav's Chicken Treat",
      subtitle: 'Family Meal',
      description: 'One day, Gaurav brought homemade chicken sabji for all of us. We sat together and shared the meal like a family. It was one of those simple yet unforgettable moments… although Bhagwati missed out on it! 😄',
      icon: <Utensils className="text-white" size={24} />,
      type: 'video',
      videoUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/gaurav.mp4'
    },
    {
      id: 4,
      title: "Soundarya's Biryani",
      subtitle: 'Food Moment',
      description: 'Soundarya surprised us by bringing delicious biryani, and it turned into another memorable food moment for the group. The taste, the laughter, and the togetherness made it truly special.',
      icon: <Utensils className="text-white" size={24} />,
      type: 'video',
      videoUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/soundarya.mp4'
    },
    {
      id: 5,
      title: 'Turf Day',
      subtitle: 'Energy & Fun',
      description: 'Our turf day was full of energy, fun, and crazy moments. We played, laughed, and created some of the funniest memories together. It was one of those days where everyone just lived in the moment.',
      icon: <MapPin className="text-white" size={24} />,
      type: 'image',
      imageUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/turf.jpeg'
    },
    {
      id: 6,
      title: 'Durandar 2 Movie Outing',
      subtitle: 'Cinema Adventure',
      description: 'We all went to watch Durandar 2 together, but the real fun was outside the screen! Since snacks weren\'t allowed inside, we came up with funny jugaad ideas to sneak them in. That moment was as entertaining as the movie itself.',
      icon: <Film className="text-white" size={24} />,
      type: 'video',
      videoUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/movie.mp4'
    },
    {
      id: 7,
      title: 'Janesh Tekdi Trip',
      subtitle: 'Peaceful Bonding',
      description: 'Our visit to Japanese Tekdi was peaceful yet full of bonding moments. Walking together, enjoying the view, and spending quality time made it a perfect ending to many of our shared experiences.',
      icon: <Mountain className="text-white" size={24} />,
      type: 'image',
      imageUrl: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg'
    }
  ];

  return (
    <section
      id="journey"
      className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🛤️ Our Journey Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real Memories of Our Group
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-16 md:mb-24 opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center shadow-lg z-10">
                {item.icon}
              </div>

              {/* Mobile timeline dot */}
              <div className="md:hidden absolute left-4 top-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center shadow-lg z-10 flex">
                {item.icon}
              </div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    {/* Media section */}
                    {item.type === 'image' ? (
                      <div className="relative overflow-hidden">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 flex items-center justify-center">
                            <div className="text-center text-gray-600 dark:text-gray-300">
                              <Camera size={48} className="mx-auto mb-2" />
                              <p className="text-lg font-semibold">Image Placeholder</p>
                              <p className="text-sm opacity-80 mt-1">Replace with your image</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full">
                        {item.videoUrl ? (
                          <video
                            src={item.videoUrl}
                            className="w-full h-auto max-h-80 object-contain"
                            controls
                            muted
                            loop
                          />
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-6xl mb-2">🎥</div>
                              <p className="text-lg font-semibold">Video Placeholder</p>
                              <p className="text-sm opacity-80 mt-1">Replace with your video</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content section */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                          {item.subtitle}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          #{item.id}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Journey;

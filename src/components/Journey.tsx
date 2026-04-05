import { Calendar } from 'lucide-react';

const Journey = () => {
  const timelineData = [
    {
      year: '2023',
      title: 'First Day, New Faces',
      description:
        'The beginning of something beautiful. Walking into the classroom full of strangers, not knowing these faces would become our second family.',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'image',
    },
    {
      year: '2024',
      title: 'Fun & Learning',
      description:
        'Late-night study sessions, unexpected friendships, inside jokes that nobody else understood. This was the year we truly bonded.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'image',
    },
    {
      year: '2024',
      title: 'Turf Dance Night',
      description:
        'The night we let loose and danced under the stars. No judgments, just pure joy and terrible dance moves that we\'ll never forget.',
      video: true,
      type: 'video',
    },
    {
      year: '2025',
      title: 'Projects & Memories',
      description:
        'Sleepless nights debugging code, stress-eating during exams, celebrating small victories together. We grew not just as students, but as a team.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'image',
    },
    {
      year: '2025',
      title: 'Dhurandar Movie Day',
      description:
        'Our epic cinema adventure. Popcorn fights, endless laughter, and making memories that have nothing to do with academics but everything to do with friendship.',
      video: true,
      type: 'video',
    },
    {
      year: '2026',
      title: 'Farewell Moments',
      description:
        'The bittersweet end. Tears mixed with smiles, promises to stay in touch, and the realization that these three years were more than just education.',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'image',
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Journey Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Every moment, every memory, every laugh
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center shadow-lg z-10">
                  <Calendar className="text-white" size={24} />
                </div>

                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  {item.type === 'image' ? (
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {item.year}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-2">🎥</div>
                        <p className="text-lg font-semibold">Video Memory</p>
                        <p className="text-sm opacity-80 mt-1">Replace with your video</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {item.year}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

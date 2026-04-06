import { useState } from 'react';
import { ImageIcon, Video, Grid3X3 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  url: string;
  title: string;
}

const MediaVault = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg',
      title: 'Ganesh Tekdi',
    },
    {
      id: 2,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg',
      title: 'Avishkar Event',
    },
    {
      id: 3,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/turf.jpeg',
      title: 'Turf Day',
    },
    {
      id: 4,
      type: 'video',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/gaurav.mp4',
      title: "Gaurav's Chicken Treat",
    },
    {
      id: 5,
      type: 'video',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/soundarya.mp4',
      title: "Soundarya's Biryani",
    },
    {
      id: 6,
      type: 'video',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/movie.mp4',
      title: 'Durandar 2 Movie Outing',
    },
    {
      id: 7,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/home1.jpeg',
      title: 'Janesh Tekdi Trip',
    },
    {
      id: 8,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg',
      title: 'Group Memories',
    },
    {
      id: 9,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/new/us.jpg',
      title: 'Celebration Time',
    },
    {
      id: 10,
      type: 'photo',
      url: 'https://raw.githubusercontent.com/yogendra-08/thirteen-chronicles/main/photo/journey/event.jpeg',
      title: 'Encryptia Event',
    },
    {
      id: 11,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p1.jpeg?raw=true',
      title: 'Memory Photo 1',
    },
    {
      id: 12,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p2.jpeg?raw=true',
      title: 'Memory Photo 2',
    },
    {
      id: 13,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p3.jpeg?raw=true',
      title: 'Memory Photo 3',
    },
    {
      id: 14,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p4.jpeg?raw=true',
      title: 'Memory Photo 4',
    },
    {
      id: 15,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p5.jpeg?raw=true',
      title: 'Memory Photo 5',
    },
    {
      id: 16,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p6.jpeg?raw=true',
      title: 'Memory Photo 6',
    },
    {
      id: 17,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p7.jpeg?raw=true',
      title: 'Memory Photo 7',
    },
    {
      id: 18,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p8.jpeg?raw=true',
      title: 'Memory Photo 8',
    },
    {
      id: 19,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p9.jpeg?raw=true',
      title: 'Memory Photo 9',
    },
    {
      id: 20,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p10.jpeg?raw=true',
      title: 'Memory Photo 10',
    },
    {
      id: 21,
      type: 'photo',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/p11.jpeg?raw=true',
      title: 'Memory Photo 11',
    },
    {
      id: 22,
      type: 'video',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/v1.mp4',
      title: 'Memory Video 1',
    },
    {
      id: 23,
      type: 'video',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/v2.mp4',
      title: 'Memory Video 2',
    },
    {
      id: 24,
      type: 'video',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/v3.mp4',
      title: 'Memory Video 3',
    },
    {
      id: 25,
      type: 'video',
      url: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/memory/v4.mp4',
      title: 'Memory Video 4',
    },
  ];

  const filteredMedia =
    filter === 'all' ? mediaItems : mediaItems.filter((item) => item.type === filter);

  return (
    <section
      id="media-vault"
      className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Media Vault
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Captured moments that tell our story
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <Grid3X3 size={20} />
            All
          </button>
          <button
            onClick={() => setFilter('photo')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'photo'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <ImageIcon size={20} />
            Photos
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'video'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            <Video size={20} />
            Videos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const index = filteredMedia.findIndex(m => m.id === item.id);
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {item.type === 'photo' ? (
                <div className="aspect-auto">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-auto bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <video
                    src={item.url}
                    className="w-full object-cover"
                    controls
                    muted
                    loop
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 w-full">{item.title}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 w-full">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={filteredMedia.map(item => ({
          url: item.url,
          title: item.title,
          type: item.type
        }))}
        isOpen={lightboxOpen}
        currentImageIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default MediaVault;

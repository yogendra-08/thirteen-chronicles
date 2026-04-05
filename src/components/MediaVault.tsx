import { useState } from 'react';
import { X, Image as ImageIcon, Video, Grid3x3 } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  url: string;
  title: string;
}

const MediaVault = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

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
    }
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
            <Grid3x3 size={20} />
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
              onClick={() => setSelectedMedia(item)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {item.type === 'photo' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
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

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <X size={32} className="text-white" />
          </button>
          <div className="max-w-5xl w-full">
            {selectedMedia.type === 'photo' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div
                className="w-full aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center text-white">
                  <Video size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">{selectedMedia.title}</p>
                  <p className="text-sm opacity-80 mt-2">Video placeholder - Replace with your video</p>
                </div>
              </div>
            )}
            <p className="text-white text-center text-xl mt-4 font-semibold">
              {selectedMedia.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaVault;

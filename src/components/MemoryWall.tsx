import { useState, useEffect } from 'react';
import { Smile, Heart, Coffee, Music, Book, Gamepad2, Plus, X, Send } from 'lucide-react';

interface Memory {
  id: string;
  text: string;
  author: string;
  color: string;
  rotation: string;
  icon: React.ReactNode;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
}

const MemoryWall = () => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMemory, setNewMemory] = useState({ text: '', author: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const icons = [<Coffee size={20} />, <Music size={20} />, <Heart size={20} />, <Book size={20} />, <Gamepad2 size={20} />, <Smile size={20} />];
  const colors = [
    'bg-yellow-200 dark:bg-yellow-300',
    'bg-pink-200 dark:bg-pink-300',
    'bg-blue-200 dark:bg-blue-300',
    'bg-green-200 dark:bg-green-300',
    'bg-purple-200 dark:bg-purple-300',
    'bg-orange-200 dark:bg-orange-300'
  ];
  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-3'];

  // Load memories from localStorage on mount
  useEffect(() => {
    const savedMemories = localStorage.getItem('memoryWallMemories');
    if (savedMemories) {
      const parsed = JSON.parse(savedMemories);
      setMemories(parsed.map((mem: any) => ({
        ...mem,
        timestamp: new Date(mem.timestamp),
        isLiked: false
      })));
    } else {
      // Default memories
      setMemories([
        {
          id: '1',
          text: "Remember when we tried to code at 3 AM and everything made sense until morning?",
          author: "Anonymous",
          color: 'bg-yellow-200 dark:bg-yellow-300',
          rotation: 'rotate-2',
          icon: <Coffee size={20} />,
          timestamp: new Date(Date.now() - 86400000),
          likes: 5,
          isLiked: false
        },
        {
          id: '2',
          text: "That dance practice where we couldn't stop laughing at ourselves!",
          author: "Anonymous",
          color: 'bg-pink-200 dark:bg-pink-300',
          rotation: '-rotate-2',
          icon: <Music size={20} />,
          timestamp: new Date(Date.now() - 172800000),
          likes: 8,
          isLiked: false
        },
        {
          id: '3',
          text: "Movie night with snacks and endless debates about the plot!",
          author: "Anonymous",
          color: 'bg-blue-200 dark:bg-blue-300',
          rotation: 'rotate-1',
          icon: <Heart size={20} />,
          timestamp: new Date(Date.now() - 259200000),
          likes: 12,
          isLiked: false
        }
      ]);
    }
  }, []);

  // Save memories to localStorage whenever they change
  useEffect(() => {
    if (memories.length > 0) {
      localStorage.setItem('memoryWallMemories', JSON.stringify(memories));
    }
  }, [memories]);

  const handleAddMemory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMemory.text.trim() || !newMemory.author.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const memory: Memory = {
      id: Date.now().toString(),
      text: newMemory.text.trim(),
      author: newMemory.author.trim(),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: rotations[Math.floor(Math.random() * rotations.length)],
      icon: icons[Math.floor(Math.random() * icons.length)],
      timestamp: new Date(),
      likes: 0,
      isLiked: false
    };

    setMemories([memory, ...memories]);
    setNewMemory({ text: '', author: '' });
    setShowAddForm(false);
    setIsSubmitting(false);
  };

  const handleLike = (id: string) => {
    setMemories(memories.map(mem => {
      if (mem.id === id) {
        return {
          ...mem,
          likes: mem.isLiked ? mem.likes - 1 : mem.likes + 1,
          isLiked: !mem.isLiked
        };
      }
      return mem;
    }));
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours === 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        return minutes === 0 ? 'Just now' : `${minutes}m ago`;
      }
      return `${hours}h ago`;
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return `${days}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <section
      id="memory-wall"
      className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            📝 Memory Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Share your favorite moments and memories with the group
          </p>
          
          {/* Add Memory Button */}
          <button
            onClick={() => setShowAddForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto"
          >
            <Plus size={20} />
            Add Memory
          </button>
        </div>

        {/* Add Memory Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Share Your Memory
                </h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleAddMemory} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={newMemory.author}
                    onChange={(e) => setNewMemory({ ...newMemory, author: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    maxLength={30}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Share your favorite memory..."
                    value={newMemory.text}
                    onChange={(e) => setNewMemory({ ...newMemory, text: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={4}
                    maxLength={200}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {newMemory.text.length}/200
                  </span>
                  <button
                    type="submit"
                    disabled={!newMemory.text.trim() || !newMemory.author.trim() || isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                      <Send size={20} />
                    )}
                    {isSubmitting ? 'Posting...' : 'Share Memory'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Memory Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`relative ${memory.rotation} transform transition-all duration-300 hover:scale-105 hover:z-10`}
            >
              <div className={`${memory.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 flex flex-col justify-between`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-gray-800 dark:text-gray-900">
                    {memory.icon}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-700 bg-white/50 px-2 py-1 rounded-full">
                    {formatDate(memory.timestamp)}
                  </span>
                </div>
                
                <p className="text-gray-800 dark:text-gray-900 text-sm leading-relaxed mb-3 line-clamp-4">
                  "{memory.text}"
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-800">
                    - {memory.author}
                  </span>
                  <button
                    onClick={() => handleLike(memory.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-colors ${
                      memory.isLiked
                        ? 'bg-white/80 text-pink-600'
                        : 'bg-white/60 text-gray-600 hover:bg-white/80'
                    }`}
                  >
                    <Heart
                      size={12}
                      className={memory.isLiked ? 'fill-current' : ''}
                    />
                    {memory.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {memories.length === 0 && (
          <div className="text-center py-12">
            <Smile className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No memories yet. Be the first to share!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoryWall;
    },
    {
      id: 2,
      text: "That presentation where we forgot our lines but improvised like pros!",
      color: 'bg-pink-200 dark:bg-pink-300',
      rotation: '-rotate-1',
      icon: <Smile size={20} />,
    },
    {
      id: 3,
      text: "Late night canteen sessions solving world problems over cold coffee",
      color: 'bg-blue-200 dark:bg-blue-300',
      rotation: 'rotate-3',
      icon: <Heart size={20} />,
    },
    {
      id: 4,
      text: "The day we realized we weren't just classmates, we were family",
      color: 'bg-green-200 dark:bg-green-300',
      rotation: '-rotate-2',
      icon: <Heart size={20} />,
    },
    {
      id: 5,
      text: "Singing terribly at the top of our lungs during break time",
      color: 'bg-purple-200 dark:bg-purple-300',
      rotation: 'rotate-1',
      icon: <Music size={20} />,
    },
    {
      id: 6,
      text: "Project deadlines that brought us closer than any party ever could",
      color: 'bg-orange-200 dark:bg-orange-300',
      rotation: '-rotate-3',
      icon: <Book size={20} />,
    },
    {
      id: 7,
      text: "Inside jokes that nobody else will ever understand",
      color: 'bg-red-200 dark:bg-red-300',
      rotation: 'rotate-2',
      icon: <Smile size={20} />,
    },
    {
      id: 8,
      text: "Gaming sessions instead of studying (totally worth it)",
      color: 'bg-indigo-200 dark:bg-indigo-300',
      rotation: '-rotate-1',
      icon: <Gamepad2 size={20} />,
    },
    {
      id: 9,
      text: "The countless times we said 'just one more episode' before exams",
      color: 'bg-teal-200 dark:bg-teal-300',
      rotation: 'rotate-3',
      icon: <Smile size={20} />,
    },
    {
      id: 10,
      text: "Sharing food, notes, and everything else without a second thought",
      color: 'bg-yellow-200 dark:bg-yellow-300',
      rotation: '-rotate-2',
      icon: <Heart size={20} />,
    },
    {
      id: 11,
      text: "The selfies we took everywhere, capturing every silly moment",
      color: 'bg-pink-200 dark:bg-pink-300',
      rotation: 'rotate-1',
      icon: <Smile size={20} />,
    },
    {
      id: 12,
      text: "Three years flew by, but these memories will last forever",
      color: 'bg-blue-200 dark:bg-blue-300',
      rotation: '-rotate-3',
      icon: <Heart size={20} />,
    },
  ];

  return (
    <section
      id="memory-wall"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Memory Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Little moments that meant everything
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`${memory.color} ${memory.rotation} p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer relative group`}
              style={{
                minHeight: '200px',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full shadow-md"></div>

              <div className="flex items-start justify-between mb-3">
                <div className="text-gray-700 group-hover:scale-110 transition-transform duration-300">
                  {memory.icon}
                </div>
              </div>

              <p className="text-gray-800 dark:text-gray-900 font-handwriting text-base leading-relaxed">
                {memory.text}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
              "To the friends who became family, to the moments that became memories, and to the journey that made us who we are. Here's to Batch 2023-2026."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Heart className="text-red-500" size={24} fill="currentColor" />
              <Heart className="text-pink-500" size={20} fill="currentColor" />
              <Heart className="text-red-500" size={24} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryWall;

import { useState, useEffect } from 'react';
import { Smile, Heart, Coffee, Music, Book, Gamepad2, Plus, X, Send } from 'lucide-react';
 
interface Memory {
  id: string;
  text: string;
  author: string;
  color: string;
  rotation: string;
  icon: string;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
}
 
const iconMap: Record<string, React.ComponentType<any>> = {
  Coffee, Music, Heart, Book, Gamepad2, Smile
};
 
const MemoryWall = () => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMemory, setNewMemory] = useState({ text: '', author: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const iconKeys = Object.keys(iconMap);
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
      try {
        const parsed = JSON.parse(savedMemories);
        setMemories(parsed.map((mem: any) => ({
          ...mem,
          timestamp: new Date(mem.timestamp),
          isLiked: false
        })));
      } catch (error) {
        console.error('Error parsing saved memories:', error);
      }
    } else {
      // Default memories
      setMemories([
        {
          id: '1',
          text: "Remember when we tried to code at 3 AM and everything made sense until morning?",
          author: "Anonymous",
          color: 'bg-yellow-200 dark:bg-yellow-300',
          rotation: 'rotate-2',
          icon: 'Coffee',
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
          icon: 'Music',
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
          icon: 'Heart',
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
      try {
        localStorage.setItem('memoryWallMemories', JSON.stringify(memories));
      } catch (error) {
        console.error('Error saving memories:', error);
      }
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
      icon: iconKeys[Math.floor(Math.random() * iconKeys.length)],
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
          {memories.map((memory) => {
            const IconComponent = iconMap[memory.icon] || Smile;
            return (
              <div
                key={memory.id}
                className={`relative ${memory.rotation} transform transition-all duration-300 hover:scale-105 hover:z-10`}
              >
                <div className={`${memory.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 flex flex-col justify-between`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-gray-800 dark:text-gray-900">
                      <IconComponent size={20} />
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
            );
          })}
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
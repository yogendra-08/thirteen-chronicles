import { Smile, Heart, Coffee, Music, Book, Gamepad2 } from 'lucide-react';

interface Memory {
  id: number;
  text: string;
  color: string;
  rotation: string;
  icon: React.ReactNode;
}

const MemoryWall = () => {
  const memories: Memory[] = [
    {
      id: 1,
      text: "Remember when we tried to code at 3 AM and everything made sense until morning?",
      color: 'bg-yellow-200 dark:bg-yellow-300',
      rotation: 'rotate-2',
      icon: <Coffee size={20} />,
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

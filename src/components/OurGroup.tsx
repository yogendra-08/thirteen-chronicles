import { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  extraInfo: string;
  image: string;
  color: string;
}

const OurGroup = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const members: Member[] = [
    {
      id: 1,
      name: 'Trushna',
      role: 'The Creative Soul',
      description: 'Always had the wildest ideas and biggest dreams',
      extraInfo: 'From late-night brainstorming to making everyone laugh, you brought color to our journey',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 2,
      name: 'Yogi',
      role: 'The Wise Guide',
      description: 'The voice of reason when we needed it most',
      extraInfo: 'Your wisdom and calm presence kept us grounded through every storm and celebration',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-400 to-purple-400',
    },
    {
      id: 3,
      name: 'Anuj',
      role: 'The Tech Genius',
      description: 'Solved every problem with code and creativity',
      extraInfo: 'Your technical skills and innovative thinking helped us overcome every challenge',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-400 to-blue-400',
    },
    {
      id: 4,
      name: 'Yash',
      role: 'The Energy Booster',
      description: 'Brought endless energy and enthusiasm to every gathering',
      extraInfo: 'Your positive attitude and boundless energy made even the toughest days feel bright',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-400 to-red-400',
    },
    {
      id: 5,
      name: 'Soundarya',
      role: 'The Heart of the Group',
      description: 'Brought everyone together with kindness and love',
      extraInfo: 'Your caring nature and warm heart made our group feel like a true family',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-400 to-rose-400',
    },
    {
      id: 6,
      name: 'Leena',
      role: 'The Silent Strength',
      description: 'Quietly supported everyone with unwavering strength',
      extraInfo: 'Your quiet confidence and steady support were the foundation of our group\'s success',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-indigo-400 to-purple-400',
    },
    {
      id: 7,
      name: 'Parag',
      role: 'The Strategic Mind',
      description: 'Always planned two steps ahead for every success',
      extraInfo: 'Your strategic thinking and planning skills helped us navigate every challenge with confidence',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-teal-400 to-cyan-400',
    },
    {
      id: 8,
      name: 'Rupal',
      role: 'The Creative Artist',
      description: 'Added beauty and creativity to everything we did',
      extraInfo: 'Your artistic touch and creative vision made our projects stand out beautifully',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 9,
      name: 'Gaurav',
      role: 'The Food Master',
      description: 'Made every gathering delicious with homemade treats',
      extraInfo: 'Your culinary skills and generosity brought us together over countless shared meals',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      id: 10,
      name: 'Teju',
      role: 'The Social Butterfly',
      description: 'Brought joy and laughter to every moment with infectious happiness',
      extraInfo: 'Your cheerful personality and ability to make everyone smile made even ordinary days extraordinary',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      id: 11,
      name: 'Om',
      role: 'The Spiritual Guide',
      description: 'Kept everyone centered with wisdom and peace',
      extraInfo: 'Your spiritual guidance and calm presence helped us find balance in chaos',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-violet-400 to-purple-400',
    },
    {
      id: 12,
      name: 'Prathmesh',
      role: 'The Problem Solver',
      description: 'Fixed every issue with patience and skill',
      extraInfo: 'Your methodical approach and problem-solving skills saved the day countless times',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-red-400 to-orange-400',
    },
    {
      id: 13,
      name: 'Bhagwati',
      role: 'The Late Night Star',
      description: 'Joined every celebration with perfect timing and enthusiasm',
      extraInfo: 'Your infectious energy and perfect timing made every moment more memorable',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-400 to-purple-400',
    },
    {
      id: 14,
      name: 'Adhira',
      role: 'The Sunshine',
      description: 'Brought warmth and brightness to every gathering',
      extraInfo: 'Your radiant smile and positive energy lit up every room and made everyone feel at home',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-amber-400 to-yellow-400',
    },
  ];

  return (
    <section
      id="our-group"
      className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-pink-600" size={32} fill="currentColor" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Little Family
            </h2>
            <Heart className="text-pink-600" size={32} fill="currentColor" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Three souls, one unforgettable journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ${
                  hoveredId === member.id
                    ? 'scale-105 shadow-2xl -translate-y-2'
                    : 'scale-100'
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8">
                  <div className="relative mb-6">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg transition-transform duration-500 ${
                        hoveredId === member.id ? 'scale-110' : 'scale-100'
                      }`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -top-2 -right-2 transition-all duration-500 ${
                        hoveredId === member.id ? 'scale-100 rotate-12' : 'scale-0'
                      }`}
                    >
                      <Sparkles className="text-yellow-400" size={28} fill="currentColor" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <div
                      className={`inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white font-semibold text-sm shadow-md`}
                    >
                      <Star size={16} fill="currentColor" />
                      {member.role}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 overflow-hidden transition-all duration-500 ${
                      hoveredId === member.id
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${member.color} bg-opacity-10`}
                    >
                      <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed">
                        {member.extraInfo}
                      </p>
                    </div>
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

export default OurGroup;

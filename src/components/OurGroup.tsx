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
      role: '#SmallButIconic',
      description: 'Trushna — the youngest soul in the group',
      extraInfo: `Trushna — the youngest soul in the group, but the one who gave us the biggest memories 🤍😭
The girl with the smallest hands in the whole group 🥹✨
From losing her slippers on trips to emotionally blackmailing everyone with
‘Teju tu aata mala ashi manshen…’ 😂
funny reactions and that tiny innocent energy — somehow you made every moment more memorable 😭🤝
You were never just part of the group…
you were literally one of the reasons the group felt alive ✨🤍

#SmallButIconic`,
      image: 'https://github.com/yogendra-08/thirteen-chronicles/blob/main/photo/members/trushna.png?raw=true',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 2,
      name: 'Yogi',
      role: 'The admin himself ',
      description: 'The voice of reason when we needed it most',
      extraInfo: 'Your wisdom and calm presence kept us grounded through every storm and celebration',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-400 to-purple-400',
    },
    {
      id: 3,
      name: 'Anuj',
      role: '#SelfieMinister',
      description: 'Anuj — the committed boy of our group 😌❤️',
      extraInfo: `Anuj — the committed boy of our group 😌❤️
Jab bhi selfie ki baat aati thi… bhai sabse aage milta tha 😭😂
Of course, being the tallest guy in the group had its own advantages 📸
No matter where we went, one thing was fixed —agar selfie hai, toh Anuj front camera ke closest hi hoga 🤝
From random laughs to unforgettable memories… tu har frame ka important part tha 🤍

#SelfieMinister`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-400 to-blue-400',
    },
    {
      id: 4,
      name: 'Yash',
      role: '#BhamranVibes',
      description: 'Yash — the aesthetic boy of the group 📸✨',
      extraInfo: `Whenever the girls needed pictures… bro was already ready with angles, poses and edits 😭😂
Also the first person in the group jiske paas aacha mobile tha — and he made sure everyone knew it 😌📱
Behind all the jokes and photos, tu honestly became one of the best memories of this whole journey 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-400 to-red-400',
    },
    {
      id: 5,
      name: 'Soundarya',
      role: '#LipGlossEnergy',
      description: 'Soundarya — the adopted child of our group 😭🤍',
      extraInfo: `Soundarya — the adopted child of our group 😭🤍
Choti bacchi jaisi… but anger level full dangerous 😂
Thoda sa bhi kuch ulta bolo and madam instantly gussa 😭
But when the topic is about makeup, outfits or getting ready…
she becomes the most active person in the room 💄✨
Lip gloss check, hair check, mirror check — everything had to be perfect 😌

Behind all the drama and cute fights, tu honestly made the group more alive 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-400 to-rose-400',
    },
    {
      id: 6,
      name: 'Leena',
      role: '#ChalteHaiVibes',
      description: 'Leena — the lowkey member of the group 🤍',
      extraInfo: `Leena — the lowkey member of the group 🤍
Thodi kam present rehti thi… but whenever plans happened, somehow she was always there 😭✨
And obviously… the scooty girl of the group 🛵
Party? Chalte hai.
Ride? Chalte hai.
Random outing? Chalte hai 😭😂
No overthinking, no drama — just vibes, rides and memories.

You were one of those people who quietly became an important part of the group 🤍

#ChalteHaiVibes`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-indigo-400 to-purple-400',
    },
    {
      id: 7,
      name: 'Parag',
      role: '#GameNahiGhet',
      description: 'Parag — the professional majje lene wala of the group 😭😂',
      extraInfo: `Parag — the professional majje lene wala of the group 😭😂
Bhai kabhi kisi ek side pe raha hi nahi…
pehle sabke maje lo, phir ussi bande ka side bhi le lo 🤝😭
Aur iska legendary dialogue —
‘He sab ashe ch ahe… me fakt kadhi tuz game nhi ghet’ 😂
No matter how serious the situation was, tu somehow usko comedy show bana deta tha 😭
Honestly, group ke half laughs tere wajah se hi the 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-teal-400 to-cyan-400',
    },
    {
      id: 8,
      name: 'Rupal',
      role: '#ExpressionQueen',
      description: 'Rupal — the WCL girl of our group 💼✨',
      extraInfo: `Pure group mai job sabse pehle pakki hai 😭🤝
But honestly, your expressions deserved their own fanbase 😂
Funny ho, irritated ho, ya gussa — har reaction cinematic hota tha 😭
And behind all those expressions, tu genuinely sabki care karti thi…
always thinking about everyone in your own silent way 🤍

That’s what made you special for all of us.`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 9,
      name: 'Gaurav',
      role: '#AagLavteBhai',
      description: 'Gaurav — the Matchbox of our group 🔥😭',
      extraInfo: `Ek line jo isne sabse zyada suni hogi —
‘Haa khup aag lavte bhai’ 😂
Kisi ke maje lene ho, bhai always ready 😭🤝
ye aur shant rahe?
unpossible mission 💀
But honestly, tere bina group itna entertaining kabhi nahi hota 🤍
Tu tha toh har normal moment bhi memorable ban gaya ✨`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      id: 10,
      name: 'Teju',
      role: '#gachpandavlya',
      description: 'Teju — the Mumbai Indians fan girl 💙🏏',
      extraInfo: `And officially the treasurer of our group 💸😭
From handling money to handling everyone’s drama…
she did everything 😌🤝
But the best part?
Her funny gaaliya 😭😂
Honestly, vo gaali kam aur comedy zyada lagti thi…
sunke hasi aati thi 🤍
Every group needs someone chaotic, caring and unintentionally funny…
and for us, that was always you ✨`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      id: 11,
      name: 'Om',
      role: '#HepalLegend',
      description: 'Om — fun ke saath the most emotional guy of our group 🤍😭',
      extraInfo: `Aur haan… one more treasurer because apparently paiso pe trust sirf inpe hi tha 😂💸
Iska majak banao aur bhai ka default response ready —
‘Hepal la***a’ 😭😂
Aur agar ek baar pani ki bottle le aaya…
toh next 10 baar yaad bhi dilayega 😌🤝

Behind all the jokes and funny arguments, tu honestly sabse genuine logo mai se ek tha 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-violet-400 to-purple-400',
    },
    {
      id: 12,
      name: 'Prathmesh',
      role: '#JuariMindset',
      description: 'Prathmesh — the bomb of our group 💣😭',
      extraInfo: `Agar kuch bigadna ho ya thik karna ho…
bas isko yaad kar lo 😂🤝
Rancho of out group 😭✨
Har problem ka jugaad, har situation ka solution…
And yes… the certified juari of the group 🎲😂
Risk lene mai bhai kabhi peeche nahi hata 💀

Chaos, intelligence and comedy ka perfect combo tha tu 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-red-400 to-orange-400',
    },
    {
      id: 13,
      name: 'Bhagwati',
      role: '#TomatoKiChatni',
      description: 'Bhagwati — one more certified juari of the group 🎲😭',
      extraInfo: `Aur probably the only person jo mobile cover ke piche apni photo lagake ghumti thi 😌✨iykyk
But the funniest part?
Phone kahi bhi rakho… aur phir khud hi bhool jao kaha rakha hai 😂📱

And one thing everybody knows about you —
your unlimited love for tomato ki chatni 😭🍅

Cute chaos, funny moments and pure randomness…
that was literally your vibe in the group 🤍`,
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-400 to-purple-400',
    },
    {
      id: 14,
      name: 'Adhira',
      role: '#AlwaysOneOfUs',
      description: 'Adhira 🤍',
      extraInfo: `College chhod diya… but never really left the group.
No matter where life takes us, you’ll always be a part of these memories and this family ✨`,
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

import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <Heart className="text-red-500" size={20} />
            <span className="text-lg font-semibold">Batch 2023-2026</span>
          </div>
          
          <div className="flex items-center space-x-3 bg-gray-800 dark:bg-gray-950 px-6 py-3 rounded-full">
            <Instagram size={20} className="text-pink-500" />
            <a 
              href="https://instagram.com/kadshit_kadshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-300 font-medium"
            >
              @kadshit_kadshi
            </a>
          </div>
          
          <p className="text-gray-400 text-sm text-center">
            Made with ❤️ for the unforgettable memories
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

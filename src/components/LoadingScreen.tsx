import { useState, useEffect } from 'react';
import { Heart, Sparkles, Users } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, message = "Loading memories..." }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      setShowContent(true);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowContent(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!showContent) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="animate-bounce">
            <Heart className="text-pink-400" size={48} fill="currentColor" />
          </div>
          <div className="animate-pulse">
            <Users className="text-purple-400" size={56} fill="currentColor" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Heart className="text-pink-400" size={48} fill="currentColor" />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-white mb-2">
          {message}
        </h2>
        <p className="text-white/80 mb-8">
          Bringing your memories to life...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <p className="text-white/60 text-sm">
          {progress}%
        </p>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="text-yellow-300/40" size={24} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

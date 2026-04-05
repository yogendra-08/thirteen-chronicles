import { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  opacity?: number;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  opacity = 0.3, 
  children 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        style={{ opacity }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 animate-pulse" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;

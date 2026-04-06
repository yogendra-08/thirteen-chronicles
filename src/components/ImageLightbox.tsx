import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface MediaItem {
  url: string;
  title: string;
  description?: string;
  type?: 'photo' | 'video';
}

interface ImageLightboxProps {
  images: Array<MediaItem>;
  isOpen: boolean;
  currentImageIndex: number;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  isOpen,
  currentImageIndex,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(currentImageIndex);
    setZoomLevel(1);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
        case '+':
        case '=':
          setZoomLevel(prev => Math.min(prev + 0.2, 3));
          break;
        case '-':
        case '_':
          setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navigateImage = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
      setZoomLevel(1);
    }
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
      >
        <X size={24} className="sm:size-32" />
      </button>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={() => navigateImage(-1)}
          className="absolute left-2 sm:left-4 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ChevronLeft size={24} className="sm:size-32" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => navigateImage(1)}
          className="absolute right-2 sm:right-4 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ChevronRight size={24} className="sm:size-32" />
        </button>
      )}

      {/* Zoom Controls */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        <button
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
          className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ZoomOut size={16} className="sm:size-20" />
        </button>
        <span className="text-white px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
          className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ZoomIn size={16} className="sm:size-20" />
        </button>
      </div>

      {/* Media Display */}
      <div className="max-w-7xl w-full h-full flex items-center justify-center px-2 sm:px-4">
        <div className="relative overflow-hidden rounded-lg w-full">
          {currentImage.type === 'video' ? (
            <video
              src={currentImage.url}
              controls
              autoPlay
              className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          ) : (
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          )}
        </div>
        
        {/* Media Info */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
          <h3 className="text-white text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{currentImage.title}</h3>
          {currentImage.description && (
            <p className="text-white/80 text-sm sm:text-lg">{currentImage.description}</p>
          )}
          <p className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;

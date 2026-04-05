import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageLightboxProps {
  images: Array<{
    url: string;
    title: string;
    description?: string;
  }>;
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
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
      >
        <X size={32} />
      </button>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={() => navigateImage(-1)}
          className="absolute left-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => navigateImage(1)}
          className="absolute right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Zoom Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-white px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
        >
          <ZoomIn size={20} />
        </button>
      </div>

      {/* Image Display */}
      <div className="max-w-7xl w-full h-full flex items-center justify-center">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>
        
        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">{currentImage.title}</h3>
          {currentImage.description && (
            <p className="text-white/80 text-lg">{currentImage.description}</p>
          )}
          <p className="text-white/60 text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;

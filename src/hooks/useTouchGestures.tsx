import { useEffect, useRef, useState } from 'react';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onPinch?: (scale: number) => void;
  threshold?: number;
  preventDefault?: boolean;
}

const useTouchGestures = (options: TouchGestureOptions) => {
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const initialDistance = useRef<number>(0);
  const [scale, setScale] = useState<number>(1);

  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    threshold = 50,
    preventDefault = false // Default to false to allow scrolling
  } = options;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        // Handle pinch gesture
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialDistance.current = Math.sqrt(dx * dx + dy * dy);
      }
      // Only prevent default if explicitly requested
      if (preventDefault) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && onPinch) {
        // Handle pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (initialDistance.current > 0) {
          const newScale = distance / initialDistance.current;
          setScale(newScale);
          onPinch(newScale);
        }
        // Only prevent default for pinch gesture
        if (preventDefault) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      let gestureHandled = false;
      if (e.changedTouches.length === 1) {
        touchEndX.current = e.changedTouches[0].clientX;
        touchEndY.current = e.changedTouches[0].clientY;

        const deltaX = touchEndX.current - touchStartX.current;
        const deltaY = touchEndY.current - touchStartY.current;

        // Check if it's a swipe or a tap
        const isSwipe = Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold;

        if (isSwipe) {
          // Determine swipe direction
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0 && onSwipeRight) {
              onSwipeRight();
              gestureHandled = true;
            } else if (deltaX < 0 && onSwipeLeft) {
              onSwipeLeft();
              gestureHandled = true;
            }
          } else {
            // Vertical swipe
            if (deltaY > 0 && onSwipeDown) {
              onSwipeDown();
              gestureHandled = true;
            } else if (deltaY < 0 && onSwipeUp) {
              onSwipeUp();
              gestureHandled = true;
            }
          }
        }
      } else if (e.touches.length === 0) {
        // Reset pinch gesture
        initialDistance.current = 0;
        setScale(1);
      }
      // Only prevent default if a gesture was handled
      if (preventDefault && gestureHandled) {
        e.preventDefault();
      }
    };

    const handleGestureStart = (e: Event) => {
      if (preventDefault) {
        e.preventDefault();
      }
    };

    const handleGestureChange = (e: Event) => {
      if (preventDefault) {
        e.preventDefault();
      }
    };

    const handleGestureEnd = (e: Event) => {
      if (preventDefault) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('gesturestart', handleGestureStart, { passive: true });
    document.addEventListener('gesturechange', handleGestureChange, { passive: true });
    document.addEventListener('gestureend', handleGestureEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('gesturechange', handleGestureChange);
      document.removeEventListener('gestureend', handleGestureEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onPinch, threshold, preventDefault]);

  return { scale };
};

export default useTouchGestures;

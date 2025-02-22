import { useState } from "react";

export const useGetSlideDown = () => {
  const [swipeDirection, setSwipeDirection] = useState(false);

  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchEndY - touchStartY > 50) {
      setSwipeDirection(true);
    } else {
      setSwipeDirection(false);
    }
  };

  return {
    swipeDirection,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

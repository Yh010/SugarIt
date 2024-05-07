import { useEffect, useRef } from 'react';
import Aesthetic from '../../assets/Aesthetic.png';
import Bike from '../../assets/Bike.png';
// import Dolls from '../../assets/Dolls.png'; // This is commented out and should not affect the movement.
import SugarIt from '../../assets/SugarIt.png';
import Food from '../../assets/Food.png';

export default function ScrollPics() {
  const carouselRef = useRef(null);
  const images = [SugarIt, Food, Bike, Aesthetic];

  useEffect(() => {
    const scrollElement = carouselRef.current;
    // Make sure the ref is being applied and the element exists
    if (!scrollElement) {
      return;
    }

    let autoScrollAnimation;

    // Function to animate the scroll
    const startAutoScroll = () => {
      if (scrollElement.scrollWidth > scrollElement.clientWidth) {
        // Only scroll if the content is wider than the container
        autoScrollAnimation = requestAnimationFrame(startAutoScroll);
        scrollElement.scrollLeft += 1; // Increment the scroll position
      }
    };

    // Start auto-scrolling
    startAutoScroll();

    // Clean up animation frame
    return () => {
      if (autoScrollAnimation) {
        cancelAnimationFrame(autoScrollAnimation);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth hide-scrollbar"
        style={{ whiteSpace: 'nowrap' }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i}`}
            className="inline-block h-auto max-w-md mr-2"
          />
        ))}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

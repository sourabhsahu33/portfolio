// components/homepage/Scrollup/ScrollUpButton.jsx
"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none transition-all duration-300 sm:block hidden xs:block"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollUpButton;

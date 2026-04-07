"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#18181c] border border-[#222228] rounded-md text-[#c8cad8] text-[0.8rem] flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-[#00e5a0] hover:text-[#00e5a0]"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollUpButton;

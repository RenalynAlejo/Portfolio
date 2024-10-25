import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can install react-icons if not already installed: npm install react-icons
import customStyle from '../css/customStyle.module.css'; // Assuming you have custom styles

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 300 pixels
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} className={customStyle.scrollToTopButton}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;

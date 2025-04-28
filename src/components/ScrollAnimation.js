// ScrollAnimation.js
import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up, .section-title-animation');
      
      elements.forEach(element => {
        // Get element position relative to viewport
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Check if element is in viewport (with offset)
        const isInViewport = rect.top <= windowHeight * 0.85;
        
        if (isInViewport) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return null;
};

export default ScrollAnimation;
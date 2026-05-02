import React, { useEffect, useRef, useState } from 'react';

const BlinkText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`${isVisible ? 'animate-blink' : 'opacity-0'}`}
          style={{
            animationDelay: `${0.05 * index}s`,
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default BlinkText;

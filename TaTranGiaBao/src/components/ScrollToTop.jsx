import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          p-3 rounded-full bg-[#ff6200] text-white shadow-[0_0_15px_rgba(255,98,0,0.5)]
          hover:bg-[#e65a00] hover:scale-110 hover:shadow-[0_0_25px_rgba(255,98,0,0.8)]
          transition-all duration-500 ease-in-out flex items-center justify-center
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
}

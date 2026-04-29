import { useState, useEffect } from "react";
import Me from "../assets/me.jpg";
import SeeMore from "./SeeMore";
import AboutMe from "./AboutMe";
import { FaYoutube, FaFacebook, FaLinkedin, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import BlinkText from "./BlinkText";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleOpen() {
    setOpen(true);
  }

  function handleOffOpen() {
    setOpen(false);
  }

  const navItems = [
    { label: "About Me", id: "about-me" },
    { label: "Skill", id: "skills" },
    { label: "Portfolio", id: "portfolio" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div
      className="
      relative min-h-screen overflow-hidden font-sans
      before:content-['']
      before:absolute
      before:inset-0
      before:bg-[#f8f9fa]
      after:content-['']
      after:absolute
      after:inset-0
      after:bg-[#111111]
      after:[clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)]
      md:after:[clip-path:polygon(60%_0,100%_0,100%_100%,40%_100%)]
      "
    >
      {/* Mobile background adjustment */}
      <div className="absolute inset-0 bg-[#111111] md:hidden z-0"></div>

      <AboutMe Me={Me} Open={handleOpen} />

      <SeeMore isPacked={open} Me={Me} Off={handleOffOpen} />
      
      {/* Header / Nav */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a 
            href="mailto:baohad987@gmail.com"
            className={`text-xl font-black tracking-tighter z-50 flex items-center gap-2 transition-all duration-300 ${scrolled ? 'text-white' : 'text-black'}`}
          >
            <FaEnvelope />
            <span>baohad987@gmail.com</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 text-white font-bold items-center group/nav">
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className="relative group/item cursor-pointer py-2 px-1 flex justify-center items-center"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="relative z-10 transition-all duration-500 
                  group-hover/nav:blur-[3px] group-hover/item:!blur-none 
                  group-hover/item:text-[#ff6200] group-hover/item:-translate-y-2 
                  inline-block"
                >
                  {item.label}
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[300%] 
                  w-24 h-24 bg-white/5 rounded-full blur-[4px] 
                  transition-all duration-700 ease-out scale-0 
                  group-hover/item:-translate-y-1/2 group-hover/item:scale-100 -z-0"
                ></div>
              </li>
            ))}
            <li className="relative group/item cursor-pointer">
               <a 
                 href="https://www.facebook.com/ta.tran.gia.bao?locale=vi_VN" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-6 py-2 rounded-full 
                   transition-all duration-300 font-bold
                   group-hover/nav:blur-[3px] group-hover/item:!blur-none 
                   group-hover/item:bg-[#ff6200] group-hover/item:text-white 
                   group-hover/item:-translate-y-1
                   shadow-lg hover:shadow-[#ff6200]/50 block"
               >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-[10%] lg:px-[12%]">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-4 md:mb-6 font-medium text-gray-400">Xin chào, tôi là </h1>
          <h1 className="font-extrabold text-4xl sm:text-4xl md:text-4xl mb-4 text-black leading-tight md:leading-none tracking-tight">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
              <BlinkText text="Tạ Trần" />
              <BlinkText text="Gia Bảo" />
            </div>
          </h1>
          <h1 className="font-bold text-lg md:text-xl mb-12 text-gray-400  tracking-[0.3em]">
            Front-end Developer
          </h1>

          <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-8">
            <a
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-red-500 transition-all duration-300 bg-[#111111] shadow-[4px_4px_8px_#070707,-4px_-4px_8px_#1b1b1b] hover:shadow-[inset_4px_4px_8px_#070707,inset_-4px_-4px_8px_#1b1b1b] md:bg-[#f8f9fa] md:shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,1)] md:hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,1)]"
              href="https://www.youtube.com/@BaoA-pl9co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl md:text-3xl group-hover:scale-90 transition-transform duration-300" />
            </a>
            <a
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-blue-500 transition-all duration-300 bg-[#111111] shadow-[4px_4px_8px_#070707,-4px_-4px_8px_#1b1b1b] hover:shadow-[inset_4px_4px_8px_#070707,inset_-4px_-4px_8px_#1b1b1b] md:bg-[#f8f9fa] md:shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,1)] md:hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,1)]"
              href="https://www.facebook.com/ta.tran.gia.bao?locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl md:text-3xl group-hover:scale-90 transition-transform duration-300" />
            </a>
            <a
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-blue-600 transition-all duration-300 bg-[#111111] shadow-[4px_4px_8px_#070707,-4px_-4px_8px_#1b1b1b] hover:shadow-[inset_4px_4px_8px_#070707,inset_-4px_-4px_8px_#1b1b1b] md:bg-[#f8f9fa] md:shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,1)] md:hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,1)]"
              href="https://www.linkedin.com/in/bao-ta-tran-gia-054a20395/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl md:text-3xl group-hover:scale-90 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden fixed inset-0 bg-[#111111] z-40 transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-12 text-white text-3xl font-black">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => scrollToSection(item.id)} className="group cursor-pointer">
              <span className="group-hover:text-[#ff6200] transition-colors uppercase tracking-widest">{item.label}</span>
              <div className="w-0 h-1 bg-[#ff6200] group-hover:w-full transition-all duration-300"></div>
            </li>
          ))}
          <li className="pt-10">
            <a 
              href="https://www.facebook.com/ta.tran.gia.bao?locale=vi_VN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ff6200] text-white px-12 py-4 rounded-full text-xl shadow-2xl shadow-[#ff6200]/40"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
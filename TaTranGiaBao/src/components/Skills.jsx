import React, { useEffect } from "react";
import CSS from "../assets/Group 13.svg";
import HTML from "../assets/Group 12.svg";
import FIGMA from "../assets/figma.svg";
import BOOTSTRAP from "../assets/bootstrap.svg";
import JS from "../assets/Group.svg";
import REACT from "../assets/Group 14.svg";
import GIT from "../assets/git.svg";
import TS from "../assets/ts.png";
import SQL from "../assets/sql.svg";
import NODEJS from "../assets/node.png";
import MONGO from "../assets/Mongo.png";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-20");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative flex flex-col space-y-12 md:space-y-16 py-10 md:py-20 justify-center items-center w-full bg-[#050810] text-gray-200 px-4 overflow-hidden">
      {/* Space Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Nebulae */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[50%] rounded-full bg-blue-900/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
        
        {/* Stars Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNCkiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjcpIi8+PGNpcmNsZSBjeD0iODAiIGN5PSIxODAiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+PGNpcmNsZSBjeD0iMTgwIiBjeT0iNTAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-60"></div>
      </div>

      <div id="about-me" className="scroll-mt-20 relative z-10"></div>
      <button className="relative z-10 text-white font-bold text-xl md:text-2xl border-b-4 border-white pb-2 px-8 md:px-10 uppercase tracking-widest hover:text-[#ff6200] hover:border-[#ff6200] transition-all duration-300 hover:px-12 drop-shadow-md">
        About Me
      </button>

      <p className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out relative z-10 text-gray-400 text-center max-w-2xl px-4 leading-relaxed italic">
        "Studied at Thu Duc College of Technology"
      </p>

      <h3 className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out delay-100 relative z-10 font-bold border-x-4 border-white text-xl px-8 uppercase tracking-wider text-white">
        Explore
      </h3>

      <div className="relative z-10 flex flex-wrap justify-center items-start w-full gap-10 md:gap-16 px-4 md:px-10">
        <div className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out delay-200 max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-white underline decoration-[#ff6200] underline-offset-8">DESIGN</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            First, I will consult with you about the website. Once your needs are met and proposals are approved, I will proceed to implement the project.
          </p>
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out delay-300 max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-white underline decoration-[#ff6200] underline-offset-8">DEVELOPMENT</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
           After gathering enough information, I will deploy the project and deliver the final version to you.
          </p>
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out delay-400 max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-white underline decoration-[#ff6200] underline-offset-8">MAINTENANCE</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Rest assured, as we always have software maintenance processes in place for you when using our services.
          </p>
        </div>
      </div>

      <div id="skills" className="scroll-mt-20 relative z-10"></div>
      <button className="relative z-10 text-white font-bold text-xl md:text-2xl border-b-4 border-white pb-2 px-12 md:px-16 uppercase tracking-widest mt-10 hover:text-[#ff6200] hover:border-[#ff6200] transition-all duration-300 hover:px-20 drop-shadow-md">
        Skills
      </button>

      <div className="w-full max-w-4xl px-6 relative z-10">
        {/* Background Decorative Blobs specific to the cards are removed since we now have the global space nebulae */}
        <div className="relative overflow-hidden rounded-2xl p-[3px] mb-16 w-full shadow-2xl group">
          <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ff6200_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 w-full h-full rounded-[13px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
            <h1 className="text-xl font-bold mb-8 text-center uppercase text-gray-200 tracking-widest drop-shadow-sm">Using Now</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-20">
              {[
                { img: HTML, name: "HTML5" },
                { img: CSS, name: "CSS3" },
                { img: JS, name: "JavaScript" },
                { img: FIGMA, name: "Figma" },
                { img: BOOTSTRAP, name: "Bootstrap" },
                { img: REACT, name: "React" },
                { img: GIT, name: "Git" },
                { img: TS, name: "TypeScript" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center group/skill cursor-pointer">
                  <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain group-hover/skill:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                  <p className="mt-4 font-medium text-sm text-gray-300 group-hover/skill:text-[#ff6200] transition-colors">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-[3px] mb-16 w-full shadow-2xl group">
          <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#ff6200_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 w-full h-full rounded-[13px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
            <h1 className="text-xl font-bold mb-8 text-center uppercase text-gray-200 tracking-widest drop-shadow-sm">Learning</h1>
            <div className="grid grid-cols-3 gap-10 justify-items-center relative z-20">
              {[
                { img: NODEJS, name: "Node.js" },
                { img: MONGO, name: "MongoDB" },
                { img: SQL, name: "MySQL" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center group/skill cursor-pointer">
                  <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain group-hover/skill:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                  <p className="mt-4 font-medium text-sm text-gray-300 group-hover/skill:text-[#ff6200] transition-colors">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
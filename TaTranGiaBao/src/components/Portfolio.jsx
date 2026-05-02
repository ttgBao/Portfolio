import React from "react";
import bgc from "../assets/image 12.png";
import baibao from "../assets/baibao.jpeg";
import docu from "../assets/docu.png";
import money from "../assets/tien4.jpeg";
import quanao from "../assets/quanao.png";
import quizz from "../assets/quizz.jpeg";
import kfc from "../assets/kfc.jpeg";

export default function Portfolio() {
  // Thêm thuộc tính link vào từng object trong mảng
  const projects = [
    { 
        img: kfc, 
        title: "Đồ án FE về website KFC", 
        link: "https://ttgbao.github.io/DoAn_Fe1/" 
    },
    { 
        img: baibao, 
        title: "Đồ án fullstack về website báo trí", 
        link: "https://github.com/ttgBao/doAn_Be1" 
    },
    { 
        img: money, 
        title: "Đồ án python nhận dạng tiền Việt Nam", 
        link: "https://github.com/ttgBao/DoAn_python-NhanDangTienVN" 
    },
  ];

  return (
    <div id="portfolio" className="w-full scroll-mt-20">
      {/* Banner Section */}
      <div
        style={{ backgroundImage: `url(${bgc})` }}
        className="w-full h-64 md:h-80 bg-cover bg-center flex justify-center items-center relative overflow-hidden shadow-2xl"
      >
     <div className="relative z-3 w-60 h-20 overflow-hidden">
        <button className="absolute bg-black text-white text-3xl z-2 inset-0.5 ">
          Portfolio
        </button>
          <div className=" -inset-30 z-1 absolute bg-[conic-gradient(red,_yellow,_lime,_cyan,_blue,_magenta,_red)]  animate-spin [animation-duration:1.5s]"></div>

      </div>
     </div>
      

      {/* Projects Section */}
      <div className="w-full bg-[#1A1A1A] py-16 flex flex-col items-center">
        {/* Tabs */}
        <div className="flex w-full max-w-2xl px-4">
          {["ALL", "CODED", "DESIGNED"].map((tab, i) => (
            <div
              key={tab}
              className={`flex-1 text-center font-bold tracking-widest cursor-pointer transition-all duration-300 hover:scale-110 ${
                i === 0 ? "text-white" : "text-gray-500 hover:text-white"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Decor Line */}
        <div className="relative w-full max-w-2xl mt-6">
          <div className="w-full h-[2px] bg-gray-800"></div>
          <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-[#ff6200] transition-all duration-500"></div>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-w-7xl">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video shadow-lg hover:shadow-[#ff6200]/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <p className="text-[#ff6200] text-sm mt-1">View Project &rarr;</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
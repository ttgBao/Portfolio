import CV from "../assets/cv/Ta-Tran-Gia-Bao-TopCV.vn-270426.95410.pdf";

export default function AboutMe({ Me, Open }) {
  return (
    <div className="hidden md:flex flex-col items-center justify-center absolute right-[8%] top-1/2 -translate-y-1/2 z-40 w-full max-w-[340px]">
      {/* Floating Circular Image */}
      <div className="relative mb-8 animate-float group/img">
        <img
          src={Me}
          alt="Tạ Trần Gia Bảo"
          className="h-[220px] w-[220px] rounded-full object-cover shadow-[0_0_40px_rgba(255,98,0,0.5)] border-[5px] border-[#ff6200] transition-transform duration-500 group-hover/img:scale-105"
        />
        {/* Glow inner effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-white drop-shadow-lg">
          About Me
        </h2>
        <p className="text-gray-400 text-sm leading-[1.8] mb-8 line-clamp-3 text-justify">
          As an enthusiastic Front-end Developer, I am always passionate about creating modern, smooth web interfaces and optimizing user experiences across all platforms.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center space-x-5 relative z-50">
          <a
            href={CV}
            download="Ta-Tran-Gia-Bao-CV.pdf"
            className="flex-1 px-4 py-3 rounded-full border-2 border-[#ff6200] text-[#ff6200] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#ff6200] hover:text-white shadow-lg hover:shadow-[#ff6200]/40 text-center cursor-pointer"
          >
            Download CV
          </a>
          <a
            href="https://github.com/ttgBao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 rounded-full bg-[#ff6200] border-2 border-[#ff6200] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,98,0,0.4)] hover:shadow-[0_0_30px_rgba(255,98,0,0.6)] text-center cursor-pointer"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
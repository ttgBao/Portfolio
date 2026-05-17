import BlinkText from "./BlinkText";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex-1 space-y-4">
          <h1 className="text-white font-bold text-2xl tracking-widest">
            <BlinkText text="IT Tạ Trần Gia Bảo" />
          </h1>
          <p className="text-gray-400 max-w-md leading-relaxed italic">
            "Life is meant to be conquered. You must have tried to have failed. Try again, fail again, fail better."
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end space-y-4">
          <button className="text-white text-sm font-bold border-x-2 border-[#ff6200] px-6 py-2 hover:bg-[#ff6200] hover:text-white transition-all uppercase tracking-widest">
            Read More
          </button>
          <p className="text-gray-600 text-xs">
            © 2026 Tạ Trần Gia Bảo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
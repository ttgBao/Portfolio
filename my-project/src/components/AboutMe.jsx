export default function AboutMe({ Me, Open }) {
  return (
    <div className="hidden md:absolute md:right-[5%] md:bottom-10 z-10 md:group md:flex justify-center">
      <div className="relative">
        <img
          src={Me}
          alt="Tạ Trần Gia Bảo"
          className="
            h-[300px] w-[250px] md:h-[450px] md:w-[350px] cursor-pointer object-cover 
            transition-all duration-700 ease-in-out
            [clip-path:polygon(50%_2.45%,100%_38.77%,80.9%_97.55%,19.1%_97.55%,0%_38.77%)]
            group-hover:[clip-path:polygon(50%_0%,100%_0%,100%_100%,0%_100%,0%_0%)]
            shadow-2xl
          "
        />

        <button
          onClick={Open}
          className="
            text-white font-bold
            absolute bottom-4
            left-1/2 -translate-x-1/2
            bg-[#ff6200] p-3 px-6 rounded-full border border-white/20 z-10
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
            hover:scale-110 active:scale-95 shadow-xl
            uppercase text-[10px] md:text-xs tracking-widest
          "
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}
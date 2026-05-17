import { FaXmark } from "react-icons/fa6";

export default function SeeMore({ isPacked, Me, Off }) {
  if (!isPacked) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={Off}
          className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-[#ff6200] transition-colors z-10"
        >
          <FaXmark className="text-xl" />
        </button>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-black mb-8 text-center uppercase tracking-wider underline decoration-[#ff6200] decoration-4 underline-offset-8">
            Chua Chan Mountain
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-gray-100 hover:border-[#ff6200] transition-colors">
                <img 
                  src={Me} 
                  alt={`Gallery item ${i}`}  
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-600 text-center leading-relaxed">
            Explore the majestic beauty of Chua Chan Mountain - Gia Lao, a place filled with unforgettable memories and experiences from my journey.
          </p>
        </div>
      </div>
    </div>
  );
}

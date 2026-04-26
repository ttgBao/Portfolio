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
  return (
    <div className="flex flex-col space-y-12 md:space-y-16 py-10 md:py-20 justify-center items-center w-full bg-white text-gray-800 px-4">
      <div id="about-me" className="scroll-mt-20"></div>
      <button className="text-black font-bold text-xl md:text-2xl border-b-4 border-black pb-2 px-8 md:px-10 uppercase tracking-widest hover:text-[#ff6200] hover:border-[#ff6200] transition-all duration-300 hover:px-12">
        About Me
      </button>

      <p className="text-gray-600 text-center max-w-2xl px-4 leading-relaxed italic">
        "Học tại Trường Cao Đẳng Công Nghệ Thủ Đức (Thu Duc College of Technology)"
      </p>

      <h3 className="font-bold border-x-4 border-black text-xl px-8 uppercase tracking-wider">
        Explore
      </h3>

      <div className="flex flex-wrap justify-center items-start w-full gap-10 md:gap-16 px-4 md:px-10">
        <div className="max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-black underline decoration-[#ff6200] underline-offset-8">DESIGN</h3>
          <p className="text-sm text-gray-500">
            Trước tiên tôi sẽ tư vấn website cho bạn khi đã đáp ứng được nhu cầu và đề xuất tôi sẽ tiến hành triển khai dự án.
          </p>
        </div>
        <div className="max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-black underline decoration-[#ff6200] underline-offset-8">DEVELOPMENT</h3>
          <p className="text-sm text-gray-500">
           Sau khi thu thập đủ thông tin tôi sẽ triển khai dự án và đưa ra bản final version để bàn giao cho bạn.
          </p>
        </div>
        <div className="max-w-xs text-center">
          <h3 className="font-bold text-xl mb-4 text-black underline decoration-[#ff6200] underline-offset-8">MAINTENANCE</h3>
          <p className="text-sm text-gray-500">
            Yên tâm vì chúng tôi sẽ luôn có các quy trình bảo trì phần mềm cho bạn khi sử dụng dịch vụ phía công ty.
          </p>
        </div>
      </div>

      <div id="skills" className="scroll-mt-20"></div>
      <button className="text-black font-bold text-xl md:text-2xl border-b-4 border-black pb-2 px-12 md:px-16 uppercase tracking-widest mt-10 hover:text-[#ff6200] hover:border-[#ff6200] transition-all duration-300 hover:px-20">
        Skills
      </button>

      <div className="w-full max-w-4xl px-6">
        <div className="mb-16">
          <h1 className="text-xl font-bold mb-8 text-center uppercase text-gray-400 tracking-tighter">Using Now</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
              <div key={index} className="flex flex-col items-center group">
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                <p className="mt-3 font-semibold text-sm group-hover:text-[#ff6200] transition-colors">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-xl font-bold mb-8 text-center uppercase text-gray-400 tracking-tighter">Learning</h1>
          <div className="grid grid-cols-3 gap-10 justify-items-center">
            {[
              { img: NODEJS, name: "Node.js" },
              { img: MONGO, name: "MongoDB" },
              { img: SQL, name: "MySQL" },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                <p className="mt-3 font-semibold text-sm group-hover:text-[#ff6200] transition-colors">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
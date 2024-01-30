import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import "./skills.css";

const Skills = () => {
  return (
    <div className="h-screen overflow-hidden  ">
      <div className=" max-w-md mx-auto text-center py-4">
        <h1 className="text-xl sm:text-3xl underline text-[#0a3f3d] font-extrabold lg:text-4xl uppercase  tracking-[4px]">
          Skills
        </h1>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-4   justify-evenly gap-8 content-center h-[80vh] ">
        <div className="flex flex-col  gap-2  items-center">
          <FaHtml5 className="text-blue-500 lg:text-8xl md:text-6xl text-4xl " />
          <p className="text-lg sm:text-3xl ">HTML</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <FaCss3 className="text-blue-500 lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">CSS</p>
        </div>
        <div className="flex flex-col gap-2  items-center">
          <IoLogoJavascript className="text-yellow-500 lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">Javascript</p>
        </div>
        <div className="flex flex-col gap-2  items-center">
          <SiTailwindcss className="text-sky-500 lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">Tailwindcss</p>
        </div>
        <div className="flex flex-col gap-2  items-center">
          <FaReact className="text-blue-500 lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">React</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <FaGithub className="bg-[#333333] rounded-full lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">Github</p>
        </div>
        <div className="   flex flex-col  gap-2 items-center">
          <SiRedux className="text-purple-500 lg:text-8xl md:text-6xl text-4xl" />
          <p className="text-lg sm:text-3xl ">Redux </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

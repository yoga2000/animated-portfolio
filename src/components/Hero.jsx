import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWavingHand } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./hero.css";
import { Parallax } from "react-parallax";

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="h-screen bg-[#0a3f3d] text-white relative   p-4   ">
      <nav className="flex justify-between  items-center  max-w-lg md:max-w-3xl lg:max-w-5xl cursor-pointer  mx-auto">
        <h1 className="name">Yogaraj</h1>
        <ul className="  hidden md:flex justify-evenly items-center w-[60%] list-none   text-2xl">
          <li className="btnn">Home</li>
          <li className="btnn">About</li>
          <li className="btnn">Skills</li>
          <li className="btnn">Work</li>
          <li className="btnn">Contact</li>
        </ul>
        {/* mobile menu */}
        <div
          onClick={handleClick}
          className="md:hidden z-50 bg-pink-500 px-2 py-1 rounded-md "
        >
          {!nav ? <GiHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 w-full h-screen z-10 left-0 bg-pink-500 flex flex-col justify-center items-center gap-8 sm:text-4xl text-xl  "
          }
        >
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </nav>

      <main className="max-w-8xl mx-auto   h-[80%] flex flex-col items-center justify-center gap-5 mt-8">
        <span className="  text-xl sm:text-3xl lg:text-4xl flex gap-2 items-center ">
          Hi
          <MdOutlineWavingHand className="text-amber-500" />,
          <span>Iam Yogaraj.</span>
        </span>
        <h1 className=" text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold uppercase ">
          frontend developer
        </h1>
        <h2 className=" text:xl sm:text-2xl lg:text-3xl">
          Proficient in Reactjs
        </h2>
        <p className="  text-sm text-center sm:text-xl lg:text-2xl">
          A Passionate Frontend Web Developer, Crafting engaging and intuitive
          user experiences for web applications and websites
        </p>
        <button className="btn text-md sm:text-xl lg:text-2xl lg:mt-4">
          Resume
        </button>
      </main>
    </div>
  );
};

export default Hero;

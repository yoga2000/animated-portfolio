import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Parallax } from "react-parallax";
const About = () => {
  return (
    <div className=" md:h-screen  relative bg-[#ff73b5] overflow-hidden ">
      <div class="custom-shape-divider-top-1704368323">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="    justify-evenly relative items-center h-80vh md:h-full flex flex-col-reverse md:flex-row  ">
        <div className="  px-8 max-w-lg lg:max-w-3xl text-[#0a3f3d]  flex flex-col justify-center gap-4 ">
          <h1 className="uppercase text-xl sm:text-3xl font-extrabold lg:text-4xl tracking-[4px] ">
            about
          </h1>
          <p className="font-medium pb-4 text-sm sm:text-lg text-wrap lg:text-xl  ">
            My journey into frontend development started as a personal curiosity
            that quickly evolved into a full-fledged passion. Despite not having
            a traditional tech education, I've immersed myself in the world of
            coding, design principles, and user interfaces, finding joy in
            bringing ideas to life through code.
          </p>
        </div>
        <div className=" w-[70%]   ">
          <Lottie animationData={animationData} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default About;

import "./contact.css";
import Lottie from "lottie-react";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import animationData from "../assets/contactanimation.json";
const Contact = () => {
  return (
    <div className="h-screen bg-[#0a3f3d] relative overflow-hidden">
      <div className="custom-shape-divider-top-1704523173">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="       mx-auto justify-between relative items-center h-80vh md:h-full flex flex-col-reverse md:flex-row  ">
        <div className="  px-8 max-w-lg lg:max-w-2xl  text-white  flex flex-col justify-center gap-4 ">
          <h1 className="uppercase text-xl sm:text-3xl font-extrabold lg:text-4xl tracking-[4px] ">
            Contact
          </h1>
          <p className="font-medium pb-4 text-sm sm:text-lg text-wrap lg:text-xl  ">
            Feel free to get in touch for projects, opportunities, or just to
            say hello.
          </p>
          <div className="flex justify-evenly cursor-pointer hover:scale-125 duration-100 ">
            <FaLinkedin className="text-xl md:text-3xl lg:text-5xl text-blue-500" />
            <CiMail className="text-xl md:text-3xl lg:text-5xl" />
            <FaGithub className="bg-[#333333] rounded-full lg:text-5xl md:text-3xl text-xl" />
          </div>
        </div>
        <div className=" max-w-3xl ">
          <Lottie
            className="mx-auto"
            animationData={animationData}
            loop={true}
            style={{ width: "70%" }}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default Contact;

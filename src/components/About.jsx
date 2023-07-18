import React from "react";
import { Link } from "react-scroll";
import profile from "../assets/Profile_pic.png";

const About = () => {
  return (
    <div name="About" className="h-screen bg-black text-white">
      <div className="max-w-screen-xl h-full mx-auto flex flex-col items-center justify-center md:ml-auto gap-5">
        <div className="py-5">
          <h1 className="text-2xl mt-10 md:mt-4 font-[algerian]">Readme.md</h1>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="w-2/3 md:w-1/2 md:mb-0 mb-5 flex justify-center items-center">
            <img
              className="w-3/5 rounded-full shadow-slate-300 shadow-lg hover:border-4 hover:border-[#d9cfcf] duration-300"
              src={profile}
            />
          </div>
          <div className="flex flex-col pt-8 md:pt-0 w-4/5 text-lg md:text-xl font-serif md:w-1/2 md:ml:auto  pr-4">
            <div className="text-justify justify-center items-center">
              I am a passionate and skilled full stack developer with good
              experience in creating user friend web applications. With a strong
              foundation in front-end. I have gained expertise working with
              technologies and frameworks such as HTML, CSS, JavaScript,
              ReactJS, TailwindCSS etc. In addition to my skills, I am an
              effective communicator and a good problem solver. I am always
              eager to learn new technologies and stay up to date with industry
              best practices.
            </div>
            <Link to="Skills" smooth duration={500}>
              <button
                type="button"
                class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 py-2 px-2 mt-3 rounded-[0.5rem] md:rounded-xl w-20 md:w-[7rem] text-[1.2rem] md:text-lg md:font-bold text-white font-semibold "
              >
                More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Developer from "../assets/developer.gif";
import github from "../assets/git.jpg";
import ReactTyped from "react-typed";
import linkedin from "../assets/linkedin.png";

const Home = () => {
  const works = ["Frontend Developer", "Leetcoder", "Competitive Programmer"];
  return (
    <div name="home" className="h-screen bg-black text-white home">
      <div className=" max-w-screen-lg h-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:ml-auto">
        <div className="py-[2rem] px-4 md:mt-[6rem] mt-[5rem] items-center justify-center">
          <p className="text-2xl md:my-3 font-bold md:text-4xl">
            SARVESH CHOUDHARY
          </p>
          <p className="text-[#efe268] font-sans text-sm md:text-xl">
            I'm <ReactTyped strings={works} typeSpeed={100} loop />
          </p>
          <div className="flex flex-row">
            <a href="https://github.com/sarvesh018" target="_blank">
              <img
                src={github}
                className="md:w-[3.5rem] md:h-[3.5rem] w-[3rem] h-[3rem] cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sarveshchoudhary/"
              target="_blank"
            >
              <img
                src={linkedin}
                className="md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] cursor-pointer mt-[.85rem]"
              />
            </a>
          </div>
        </div>
        <img
          className="w-5/6 sm:w-2/4 lg:w-2/5 shadow-2xl py-4 rounded-[2rem] md:ml-auto mt-10"
          src={Developer}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

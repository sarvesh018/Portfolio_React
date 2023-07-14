import React from "react";
import Developer from "../assets/developer.gif";
import github from "../assets/github.svg";
import ReactTyped from "react-typed";
import linkedin from "../assets/linkedin.svg";

const Home = () => {
  const works = ["Frontend Developer", "Leetcoder", "Competitive Programmer"];
  return (
    <div name="home" className="h-screen bg-black text-white home">
      <div className=" max-w-screen-lg h-full mx-auto flex flex-col sm:flex-row items-center justify-center md:ml-auto">
        <div className="py-[2rem] px-4 md:mt-[6rem] mt-[5rem] items-center justify-center w-3/4 md:w-2/4">
          <p className="lg:text-4xl pt-2 md:text-3xl text-2xl font-bold ">
            Hey, I am
          </p>
          <p className="text-5xl md:text-6xl md:my-3 font-bold lg:text-8xl py-1 text-[#fff068] ">
            SARVESH
          </p>
          <p className="font-semibold py-1 text-[1.2rem] md:text-2xl">
            I'm <ReactTyped strings={works} typeSpeed={100} loop />
          </p>
          <div className="flex flex-col md:flex-row py-4 gap-2">
            <button
              type="button"
              class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-[0.5rem] md:rounded-xl w-20 md:w-[7rem] text-[1.2rem] md:text-lg md:font-bold text-white font-semibold"
            >
              <p className="px-1 py-1">Resume</p>
            </button>
            <div className="flex flex-row gap-3 py-1">
              <a href="https://github.com/sarvesh018" target="_blank">
                <img
                  src={github}
                  className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem]  cursor-pointer invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sarveshchoudhary/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="w-5/6 sm:w-2/4 lg:w-2/5 shadow-2xl md:py-4 rounded-[2rem] md:ml-auto mt-1 md:mt-10"
          src={Developer}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

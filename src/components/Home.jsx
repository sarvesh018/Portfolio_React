import React from "react";
import { useEffect, useState } from "react";
import Developer from "../assets/developer.gif";
import github from "../assets/github.svg";
import ReactTyped from "react-typed";
import linkedin from "../assets/linkedin.svg";
import leetcode from "../assets/leetcodeDark.svg";
import { works } from "./Constants";

const Home = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-text');
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div name="Home" className="h-screen bg-black text-white home">
      <div className=" max-w-screen-lg h-full mx-auto flex flex-col sm:flex-row items-center justify-center md:ml-auto">
        <div className="py-[2rem] px-4 md:mt-[6rem] mt-[5rem] items-center justify-center w-3/4 md:w-2/4">
          <p className="lg:text-4xl pt-2 md:text-3xl text-2xl font-bold ">
            Hey, I am
          </p>
          <p id="name" className={`text-5xl md:text-6xl md:my-3 font-extrabold lg:text-8xl py-1 text-[#fff] text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text `}>
            SARVESH</p>
          <p className="font-semibold py-1 text-[1.2rem] md:text-2xl text-[#d2d0d0]">
            I'm <ReactTyped strings={works} typeSpeed={100} loop />
          </p>
          <div className="flex flex-col md:flex-row py-4 gap-2">
            <button
              type="button" 
              class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 ... rounded-[0.5rem] md:rounded-xl w-20 md:w-[7rem] text-[1.2rem] md:text-lg md:font-bold text-white font-semibold "
            >
              <a className="px-1 py-1" href="https://drive.google.com/file/d/1_L-JCKVCP5rp3YfR6iBRjrgqj39zB5m5/view?usp=sharing" target="_blank">Resume</a>
            </button>
            <div className="flex flex-row gap-3 py-1 ">
              <a href="https://github.com/sarvesh018" target="_blank">
                <img
                  src={github}
                  className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] cursor-pointer invert hover:scale-125 duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sarveshchoudhary/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] cursor-pointer hover:scale-125 duration-200"
                />
              </a>
              <a
                href="https://leetcode.com/sarvesh33/"
                target="_blank"
              >
                <img
                  src={leetcode}
                  className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] cursor-pointer hover:scale-125 duration-200"
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

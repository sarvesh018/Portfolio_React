import React from "react";
import { projects } from "./Constants";
import github from "../assets/github.svg";

const Projects = () => {

  return (
    <div name="Projects" className="h-full bg-black py-28">
      <div className="flex h-full flex-col justify-center items-center">
        <div className="font-[algerian] h-1/3 text-2xl pb-20 pt-8 font flex items-center text-white justify-center">
          <div>PROJECTS</div>
        </div>
        <div className="h-4/5  visible">
          <div className="flex flex-col lg:flex-row justify-center items-center font-sans gap-4">
            {projects.map(({ id, title, technologies, desc, code, srcImg }) => (
              <li
                key={id}
                className="flex lg:w-2/3 w-3/4 max-sm:w-[90%] gap-16"
              >
                <div className="bg-[#0b1b36] border-[#585757b8] border-[1px] mx-4 px-2 py-4 rounded-2xl text-white hover:shadow-2xl hover:shadow-[#44597d]">
                  <div className="flex justify-center items-center pb-4">
                    <img
                      className="w-[20rem] h-[15rem] max-sm:w-[15rem] max-sm:h-[15rem] rounded-xl"
                      src={srcImg}
                    />
                  </div>
                  <div className="px-8 max-sm:px-4">
                    <div className="">
                      <h3 className="font-bold max-sm:text-[0.6rem] text-transparent text-[0.8rem] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {technologies}
                      </h3>
                    </div>
                    <div className="">
                      <h1 className="text-2xl max-sm:text-xl font-extrabold font-sans">
                        {title}
                      </h1>
                      <p className="pt-2 text-[1rem] max-sm:text-sm text-[#c8c8c8]">{desc}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <a
                        href={code}
                        target="_blank"
                        className="flex items-center justify-center pt-6 max-sm:pt-4 flex-row gap-4 cursor-pointer hover:scale-105 duration-500"
                      >
                        <img
                          src={github}
                          className="w-8 h-8 invert max-sm:w-6 max-sm:h-6"
                        />
                        <div className="font-bold max-sm:text-sm">
                          Source code
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
        {/* <div className="h-4/5 lg:hidden visible text-8xl text-white">
              <div>

              </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

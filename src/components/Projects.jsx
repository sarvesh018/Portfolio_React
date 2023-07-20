import React from "react";
import { projects } from "./Constants";

const Projects = () => {
  return (
    <div name="Projects" className="h-screen overflow-visible">
      <div className="flex h-full flex-col justify-center items-center bg-black text-white">
        <div className="font-[algerian] h-1/3 text-2xl font flex items-center justify-center">
          <div>PROJECTS</div>
        </div>
        <div className="h-2/3">
          <div className="flex justify-center items-center h-full flex-wrap font-sans">
            {projects.map(({ id, title, technologies, desc, code, srcImg }) => (
              <li key={id} className="flex md:w-1/3 w-2/3 ">
                <div className="bg-[#371B58] mx-4 px-2 py-4 md:h-[90%]">
                  <div className="flex justify-center items-center pb-4">
                    <img className="md:w-[20rem] md:h-[15rem] w-[10rem] h-[10rem]" src={srcImg} />
                  </div>
                  <div className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <h3>{technologies}</h3>
                  </div>
                  <div className="">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

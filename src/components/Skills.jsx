import React from "react";
import { skills } from "./Constants";

const Skills = () => {
  return (
    <div name="Skills" className="h-full py-28 bg-black text-white">
      <div className="mx-auto h-full flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center h-1/4">
          <h1 className="text-2xl mt-10 font-[algerian]">Skills</h1>
        </div>
        <div className="flex flex-wrap md:w-2/3 justify-center items-center h-2/3 py-10">
          {skills.map(({ link, id, logoSrc}) => (
            <li key={id} className="flex md:py-4 md:px-4 px-2 py-2">
              <div className="px-2 py-2 md:px-4 md:py-4 mx-4 my-2 w-[8rem] bg-[#0b1b36] shadow-[#4a6490] shadow-lg  flex justify-center items-center flex-col gap-3 rounded-lg hover:scale-110 duration-300">
                <div className="hover:animate-spin  duration-100">
                  <img className="lg:w-[3rem] lg:h-[3rem] w-10 h-10" src={logoSrc} />
                </div>
                {link}
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

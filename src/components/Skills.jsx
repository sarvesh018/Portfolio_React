import React from "react";
import { skills } from "./Constants";

const Skills = () => {
  return (
    <div name="Skills" className="h-screen bg-black text-white z-0">
      <div className="mx-auto h-full flex flex-col items-center justify-center ">
        <div className=" top-0 font-extrabold">
          <h1 className="text-2xl mt-4">Skills</h1>
        </div>
        <div className="flex justify-center items-center md:flex-row flex-col gap-4 ">
          {skills.map(({ id, link }) => (
            <li key={id} className="flex ">
              <div className="px-2 py-2 w-[8rem] bg-slate-400 flex justify-center items-center">
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

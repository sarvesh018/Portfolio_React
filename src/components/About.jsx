import React from "react";
import profile from "../assets/Profile_pic.png";

const About = () => {
  return (
    <div name="About" className="h-screen bg-black text-white">
      <div className="max-w-screen-xl h-full mx-auto flex flex-col items-center justify-center md:ml-auto gap-5">
        <div className="font-extrabold py-5">
          <h1 className="text-2xl mt-4">Readme.md</h1>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="w-2/3 md:w-1/2 md:mb-0 mb-5 flex justify-center items-center ">
            <img className="w-3/5 rounded-3xl shadow-2xl" src={profile}/>
          </div>
          <div className="flex pt-8 md:pt-0 w-4/5 text-lg md:text-xl font-serif md:w-1/2 md:ml:auto text-justify justify-center items-center pr-4">
            I am a passionate and skilled full stack developer with good
            experience in creating user friend web applications. With a strong
            foundation in front-end. I have gained expertise working with
            technologies and frameworks such as HTML, CSS, JavaScript, ReactJS,
            TailwindCSS etc. In addition to my skills, I am an effective
            communicator and a good problem solver. I am always eager to learn
            new technologies and stay up to date with industry best practices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

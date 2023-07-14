import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(!open);
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return(
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#1f1e1e] fixed nav">

        <div to="home" className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer">
          Portfolio
        </div>

        <ul className="hidden md:flex ml-auto">
          {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer font-sans text-white hover:animate-pulse text-[1.25rem]">
              <Link to="link" smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={handleSubmit} className="cursor-pointer pr-4 z-10 text-white md:hidden">
          {open ? <FaTimes size={30}/> : <FaBars size={30}/>}

          {open && (
          <ul className="absolute right-0 shadow-2xl mr-2 mt-2 rounded-lg flex flex-col justify-center items-center text-black bg-[#fff] ">
            {links.map(({id, link}) =>(
              <li key={id} className="px-10 cursor-pointer py-2 text-xl hover:bg-[#494848] font-[600] font-serif hover:text-white w-full justify-center items-center rounded-lg border-[0.01px]">
                <Link onClick={handleSubmit} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>
  );
}
import React from "react";
import { contact } from "./Constants";

const Contact = () => {
  return (
    <div name="Contact" className="h-full bg-black">
      <div className="text-white flex flex-col items-center justify-center w-full">
        <div className="pt-12 h-1/3 text-2xl font-extralight font-[algerian]">
          Contact Me
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly w-full pt-16">
          <div className="md:w-1/2 w-full">
            <div className="lg:px-20 md:px-12">
              {contact.map(({ id, src, head, text }) => (
                <div key={id} className="py-4">
                  <div className="flex flex-row pl-[5rem] gap-8">
                    <img src={src} className="md:w-16 md:h-16 w-10 h-10" />
                    <div className="flex flex-col">
                      <p className="white text-lg font-semibold">{head}</p>
                      <p className="text-[#d1d0d0]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full m-auto">
            <div>
              <form action="">
                <div className="flex flex-col gap-4 p-8  text-white">
                  <div className="md:w-4/5">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                      <input
                        className="p-4 md:w-1/2 rounded-xl bg-[#0b1b36] placeholder-[#959494] border-[#585757b8] border"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                      <input
                        className="p-4 md:w-1/2 rounded-xl bg-[#0b1b36] placeholder-[#959494] border-[#585757b8] border"
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <input
                        className="p-4 rounded-xl bg-[#0b1b36] placeholder-[#959494] border-[#585757b8] border"
                        type="text"
                        placeholder="Enter Subject"
                      />
                      <textarea
                        className="p-4 rounded-xl bg-[#0b1b36] placeholder-[#959494] border-[#585757b8] border hover:resize-y"
                        type="text"
                        placeholder="Your Message"
                      />
                    </div>
                    <div className="my-4">
                      <button
                        type="button"
                        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 py-2 px-2 rounded-[0.5rem] md:rounded-xl w-20 md:w-[7rem] text-[1.2rem] md:text-lg md:font-bold text-white font-semibold "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center pt-20 pb-6 max-sm:pt-6 max-sm:pb-2 max-sm:text-sm">
            © 2023 All rights reserved | Made with ❤️ by Sarvesh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

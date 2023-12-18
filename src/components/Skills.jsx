import React from "react";
import Tools from "../data/tools";

export default function Skills() {
  return (
    <>
      <div
        className="h-screen bg-skill-img flex flex-col items-center"
        id="Skills"
      >
        <h1 className="text-h2 lg:text-h1 text-gray-100 font-extrabold lg:pt-[8rem] pt-[6rem]">
          SKILLS
        </h1>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-7 w-[30rem] lg:w-[56rem] mt-5 lg:mt-10">
          {Tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl w-[6rem] h-[8rem] lg:w-[8rem] lg:h-[10rem] hover:animate-bounce hover:scale-110 duration-200"
            >
              <img src={tool.icon} className="w-[3rem] lg:w-[4rem]" />
              <p className="text-b3 lg:text-b2 text-gray-100 font-semibold">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

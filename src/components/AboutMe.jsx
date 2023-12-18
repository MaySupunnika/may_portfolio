import React from "react";
import Picture from "../assets/S__4874242.jpg";

export default function AboutMe() {
  return (
    <>
      <div className=" flex justify-between bg-about-img h-screen" id="About">
        <div className=" text-white font-bold  text-h2 lg:text-h1 leading-tight ml-[5rem] pt-[11rem]">
          A<br />B<br />O<br />U<br />T<br className="lg:hidden" />
          <span className="lg:ml-5 ml-[-0.35rem]">
            M<br className="lg:hidden" />
            <span className="lg:ml-4">E</span>
          </span>
        </div>
        <div className="ml-[1rem] pt-[13rem] lg:pt-[15rem] relative">
          <img
            className="w-0 absolute z-20 top-[32%] left-[-6%] lg:w-[39rem]"
            src="https://media3.giphy.com/media/MA0vkDWZNtO9vPfkUC/giphy.gif?cid=ecf05e470fb74ez5twyw3birqx4pfm14d0yadhgxmtij8gyb&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
          <img
            src={Picture}
            className="mr-[2rem] w-[12rem] h-[16rem] rounded-full lg:w-[15rem] lg:h-[15rem] lg:rounded-full object-cover"
          />
        </div>
        <div className="relative pr-[5rem] w-[45rem] lg:w-[41rem] h-screen bg-gradient-to-l from-gray-100">
          <h2 className="pl-[2.5rem] md:pl-[1.5rem] pt-[17rem] lg:pt-[17rem] text-b2 lg:text-b1 font-semibold text-white w-[100%] lg:w-[80%]">
            <span className="text-h1 lg:text-[6rem] absolute top-[38%] lg:top-[31%] left-[-4%] lg:left-[-11%]">
              ❝
            </span>
            My name is Supunnika Poklin. I graduated with a bachelor's degree
            from Thammasat University with a major in materials science, but I
            have a passion for coding. And then I started to learn about
            Full-Stack Developers.
            <span className="text-h1 lg:text-[6rem] absolute top-[73%] md:top-[60%] md:right-[12%] lg:top-[58%] right-[20%]">
              ❞
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import Women from "../assets/working.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const clickHamburger = () => {
    setIsActive(!isActive);
  };

  const clickClose = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`w-screen h-[5rem] fixed top-0 left-0 right-0 transition ease-linear z-50 bg-orange-100 ${
          scrolled ? "lg:bg-orange-100" : "lg:bg-transparent"
        }`}
      >
        <div className="flex justify-between lg:justify-between mx-[4rem] h-[100%]">
          <div className="flex" id="women-name">
            <div className="h-[100%] flex items-center">
              <img src={Women} alt="women-icon" className="w-[3rem] h-[3rem]" />
            </div>
            <Link to="Home" smooth={true} className="flex items-center">
              <h2 className="text-h2 font-bold text-white cursor-pointer hover:tracking-[3px] duration-200">
                SUPUNNIKA
              </h2>
            </Link>
          </div>
          <div className="lg:flex hidden">
            <Link to="About" smooth={true} className="flex items-center">
              <h2 className="text-b1 font-bold text-white cursor-pointer hover:underline">
                ABOUT ME
              </h2>
            </Link>
            <Link
              to="Skills"
              smooth={true}
              className="flex items-center ml-[2rem]"
            >
              <h2 className="text-b1 font-bold text-white cursor-pointer hover:underline">
                SKILLS
              </h2>
            </Link>
            <Link
              to="Projects"
              smooth={true}
              className="flex items-center ml-[2rem]"
            >
              <h2 className="text-b1 font-bold text-white cursor-pointer hover:underline">
                PROJECTS
              </h2>
            </Link>
            <Link
              to="Contact"
              smooth={true}
              className="flex items-center ml-[2rem]"
            >
              <h2 className="text-b1 font-bold text-white cursor-pointer hover:underline">
                CONTACT
              </h2>
            </Link>
          </div>
          <div
            onClick={clickHamburger}
            className="flex flex-col mt-6 gap-1 lg:hidden cursor-pointer"
          >
            <div className=" bg-white w-[2rem] h-[5px]"></div>
            <div className="bg-white w-[2rem] h-[5px]"></div>
            <div className="bg-white w-[2rem] h-[5px]"></div>
          </div>
        </div>
        {isActive ? (
          <>
            <div className="w-screen h-[10rem] bg-orange-100 fixed top-0 flex flex-col gap-4 justify-center items-center lg:hidden ">
              <Link
                to="About"
                smooth={true}
                className="flex items-center"
                onClick={clickClose}
              >
                <h2 className="text-b2 font-bold text-white cursor-pointer hover:text-gray-100">
                  ABOUT ME
                </h2>
              </Link>
              <Link
                to="Skills"
                smooth={true}
                className="flex items-center"
                onClick={clickClose}
              >
                <h2 className="text-b2 font-bold text-white cursor-pointer hover:text-gray-100">
                  SKILLS
                </h2>
              </Link>
              <Link
                to="Projects"
                smooth={true}
                className="flex items-center"
                onClick={clickClose}
              >
                <h2 className="text-b2 font-bold text-white cursor-pointer hover:text-gray-100">
                  PROJECTS
                </h2>
              </Link>
              <Link
                to="Contact"
                smooth={true}
                className="flex items-center"
                onClick={clickClose}
              >
                <h2 className="text-b2 font-bold text-white cursor-pointer hover:text-gray-100">
                  CONTACT
                </h2>
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

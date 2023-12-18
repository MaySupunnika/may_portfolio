import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="h-[12rem] lg:h-[20rem] bg-contact-img flex"
          id="Contact"
        >
          <img
            src="https://media.tenor.com/0yADMmDCnt0AAAAi/call-me-contact.gif"
            alt="calling-me"
            className="lg:w-[17rem] w-0"
          />
          <div className="flex flex-col ml-[1rem] lg:ml-[3rem] mt-[1rem] lg:mt-[3rem]">
            <div className="flex flex-col">
              <h3 className="text-b2 lg:text-h3 text-white font-bold">
                Email:
              </h3>
              <a
                className="text-b3 lg:text-b1 text-white font-semibold"
                href="mailto:supunnika.PKN@gmail.com"
                target="_blank"
              >
                Supunnika.pkn@gmail.com
              </a>
            </div>
            <div className="flex flex-col mt-[2rem]">
              <h3 className="text-b2 lg:text-h3 text-white font-bold">
                Phone:
              </h3>
              <a
                className="text-b3 lg:text-b1 text-white font-semibold"
                href="tel:+66928479885"
              >
                092-847-9885
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-[3rem] mt-[1rem] lg:mt-[3rem]">
            <div className="flex flex-col">
              <h3 className="text-b2 lg:text-h3 text-white font-bold">
                Github:
              </h3>
              <a
                className="text-b3 lg:text-b1 text-white font-semibold"
                href="https://github.com/MaySupunnika"
                target="_blank"
              >
                https://github.com/MaySupunnika
              </a>
            </div>
            <div className="flex flex-col mt-[2rem]">
              <h3 className="text-b2 lg:text-h3 text-white font-bold">
                LinkedIn:
              </h3>
              <a
                className="text-b3 lg:text-b1 text-white font-semibold"
                href="https://www.linkedin.com/in/supunnika-poklin-088b40287/"
                target="_blank"
              >
                https://www.linkedin.com/in/supunnika-poklin-088b40287/
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs">Copyright © 2023. All rights are reserved.</p>
      </div>
    </>
  );
}

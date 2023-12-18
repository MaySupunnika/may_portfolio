import React from "react";
export default function Home() {
  return (
    <>
      <div id="Home">
        <video
          className="lg:w-screen lg:h-screen object-cover bg-center"
          src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/video-home.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby92aWRlby1ob21lLm1wNCIsImlhdCI6MTcwMjkxMjg5NywiZXhwIjoxNzM0NDQ4ODk3fQ.3ThYRzDlwt4-2lz8iKrGSAkfwdE4WD-ZqRjv936-t7s&t=2023-12-18T15%3A21%3A37.393Z"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute md:top-[35%] md:right-[18%] lg:top-[35%] lg:left-[12%] top-[25%] right-[11%] z-10 flex flex-col justify-center items-center">
          <h1 className="lg:text-[5rem] text-h2 font-bold text-white">
            <span className="hover:text-orange-100">H</span>
            <span className="hover:text-orange-100">e</span>
            <span className="hover:text-orange-100">l</span>
            <span className="hover:text-orange-100">l</span>
            <span className="hover:text-orange-100">o</span>
            <span className="hover:text-orange-100 mr-4">,</span>
            <span className="hover:text-orange-100">I</span>
            <span className="hover:text-orange-100">'</span>
            <span className="hover:text-orange-100 mr-4">m</span>
            <span className="hover:text-orange-100">M</span>
            <span className="hover:text-orange-100">A</span>
            <span className="hover:text-orange-100">Y</span>
            <span className="hover:text-orange-100">.</span>
          </h1>
          <h1 className="font-bold text-white text-h2 lg:text-[5rem]">
            <span className="hover:text-orange-100">W</span>
            <span className="hover:text-orange-100">e</span>
            <span className="hover:text-orange-100">l</span>
            <span className="hover:text-orange-100">c</span>
            <span className="hover:text-orange-100">o</span>
            <span className="hover:text-orange-100">m</span>
            <span className="hover:text-orange-100 mr-8">e</span>
            <span className="hover:text-orange-100">t</span>
            <span className="hover:text-orange-100 mr-8">o</span>
            <span className="hover:text-orange-100">m</span>
            <span className="hover:text-orange-100 mr-8">y</span>
            <span className="hover:text-orange-100">w</span>
            <span className="hover:text-orange-100">e</span>
            <span className="hover:text-orange-100">b</span>
            <span className="hover:text-orange-100">s</span>
            <span className="hover:text-orange-100">i</span>
            <span className="hover:text-orange-100">t</span>
            <span className="hover:text-orange-100">e</span>
          </h1>
        </div>
      </div>
    </>
  );
}

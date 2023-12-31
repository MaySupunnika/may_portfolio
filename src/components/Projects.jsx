import React, { useState } from "react";
import CourseFlow from "../assets/course-flow.png";
import PizzaCafe from "../assets/pizza-cafe.png";
import MerryMatch from "../assets/merry-match.png";

export default function Projects() {
  const [current, setCurrent] = useState(1);

  const clickBack = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };
  const clickNext = () => {
    if (current >= 3) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <>
      <div
        id="Projects"
        className="flex bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/bg-project.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYmctcHJvamVjdC5wbmciLCJpYXQiOjE3MDI5MTc0NDIsImV4cCI6MTczNDQ1MzQ0Mn0.iBj4bfaAVI8CpRWlBRND81s2bPC73y7DmCXRJ2dvbnI&t=2023-12-18T16%3A37%3A22.671Z')] h-screen object-cover bg-left pt-[3rem] lg:pt-[7rem] pl-[2rem] lg:pl-[5rem]"
      >
        <div className="flex flex-col w-[26rem]">
          <h1 className="text-h2 lg:text-h1 font-extrabold text-white mt-[2rem] mb-[3rem]">
            PROJECTS
          </h1>
          <div className=" max-[1024px]:ml-[-2rem] max-[1024px]:mt-[12rem] md:scale-[65%] lg:scale-100 scale-[60%] flex items-center gap-5  max-[640px]:ml-[-8rem] ml-[-6rem] md:ml-[-2rem] lg:ml-[3rem] mt-[8rem] max-[640px]:mt-[12rem] md:mt-[9rem] lg:mt-[4rem]">
            <p
              onClick={clickBack}
              className=" text-white text-[5rem] hover:text-orange-100 cursor-pointer"
            >
              &#10094;
            </p>
            {current === 1 && (
              <>
                <div className="flex flex-col items-center">
                  <div className="flex bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/bg-portfolio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYmctcG9ydGZvbGlvLmpwZyIsImlhdCI6MTcwMjkxNzUxMiwiZXhwIjoxNzM0NDUzNTEyfQ.MOR6h7oVV-4Xq6F-3Own_IeNwo-zilOeRKeVSRvpkmg&t=2023-12-18T16%3A38%3A32.721Z')] w-[40rem] h-[17rem] rounded-full">
                    <div className="flex flex-col">
                      <h2 className="text-h2 font-extrabold text-white mt-3 ml-[5rem]">
                        Course Flow
                      </h2>
                      <p className="text-b2 text-white w-[21rem] pl-[4.5rem]">
                        The one-stop online class management system that caters
                        to all your educational needs Our system facilitates
                        classroom management for both admins and users. Users
                        can see all available class contents and materials.
                      </p>
                    </div>
                    <img
                      className="h-[15.5rem] w-[15.5rem] mt-[0.7rem] ml-[2.5rem] rounded-full object-cover bg-center"
                      src={CourseFlow}
                      alt="course-flow"
                    />
                  </div>
                  <div className="flex gap-2 mt-5">
                    <div className="w-4 h-4 rounded-full bg-orange-100"></div>
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                  </div>
                </div>
              </>
            )}
            {current === 2 && (
              <>
                {" "}
                <div className="flex flex-col items-center">
                  <div className="flex bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/bg-portfolio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYmctcG9ydGZvbGlvLmpwZyIsImlhdCI6MTcwMjkxNzUxMiwiZXhwIjoxNzM0NDUzNTEyfQ.MOR6h7oVV-4Xq6F-3Own_IeNwo-zilOeRKeVSRvpkmg&t=2023-12-18T16%3A38%3A32.721Z')] w-[40rem] h-[17rem] rounded-full">
                    <div className="flex flex-col">
                      <h2 className="text-h2 font-extrabold text-white mt-3 ml-[5rem]">
                        Pizza Cafe
                      </h2>
                      <p className="text-b2 text-white w-[22.5rem] pl-[3.2rem]">
                        A delightful pizza cafe specializing in a delectable
                        array of pizzas and gourmet hamburgers. Our esteemed
                        customers can indulge in the pleasure of placing
                        personalized orders, with each culinary masterpiece
                        expertly crafted by our skilled in-house chef.
                      </p>
                    </div>
                    <img
                      className="h-[15.5rem] w-[15.5rem] mt-[0.7rem] ml-[0.8rem] rounded-full object-cover bg-center"
                      src={PizzaCafe}
                      alt="pizza-cafe"
                    />
                  </div>
                  <div className="flex gap-2 mt-5">
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-orange-100"></div>
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                  </div>
                </div>
              </>
            )}
            {current === 3 && (
              <>
                <div className="flex flex-col items-center">
                  <div className="flex bg-[url('https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/images/bg-portfolio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pbWFnZXMvYmctcG9ydGZvbGlvLmpwZyIsImlhdCI6MTcwMjkxNzUxMiwiZXhwIjoxNzM0NDUzNTEyfQ.MOR6h7oVV-4Xq6F-3Own_IeNwo-zilOeRKeVSRvpkmg&t=2023-12-18T16%3A38%3A32.721Z')] w-[40rem] h-[17rem] rounded-full">
                    <div className="flex flex-col">
                      <h2 className="text-h2 font-extrabold text-white mt-3 ml-[5rem]">
                        Merry Match
                      </h2>
                      <p className="text-b2 text-white w-[21rem] pl-[2.3rem]">
                        Merry Match is a new generation of online dating website
                        for everyone, whether you’re committed to dating,
                        meeting new people, expanding your social network,
                        meeting locals while traveling, or even just making a
                        small chat with strangers.
                      </p>
                    </div>
                    <img
                      className="h-[15.5rem] w-[15.5rem] mt-[0.7rem] ml-[2.3rem] rounded-full object-cover bg-center"
                      src={MerryMatch}
                      alt="merry-match"
                    />
                  </div>
                  <div className="flex gap-2 mt-5">
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-orange-100"></div>
                  </div>
                </div>
              </>
            )}

            <p
              onClick={clickNext}
              className="text-white text-[5rem] hover:text-orange-100 cursor-pointer"
            >
              &#10095;
            </p>
          </div>
        </div>
        {current === 1 && (
          <>
            <div className=" w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] lg:absolute lg:right-[4rem] lg:flex flex-col items-center hidden">
              <video
                className=" w-[100%] h-auto object-cover bg-center"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/course-flow.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9jb3Vyc2UtZmxvdy5tcDQiLCJpYXQiOjE3MDI5MTM5MDQsImV4cCI6MTczNDQ0OTkwNH0.uDB6WSRZU2pB0J2Z8UgSqoSkbZa3UGsfNsEmUY2bLTY&t=2023-12-18T15%3A38%3A25.113Z"
                type="video/mp4"
                autoPlay
                muted
                loop
              />
              <a
                className="text-b2 text-orange-100 font-semibold mt-3 "
                href="https://github.com/MaySupunnika/CourseFlowProject"
                target="_blank"
              >
                Go to Github
              </a>
              <p className=" text-[0.7rem] text-orange-100 font-semibold ">
                (STATUS: SUCCESS)
              </p>
            </div>
          </>
        )}
        {current === 2 && (
          <>
            <div className="w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] lg:absolute lg:right-[4rem] lg:flex flex-col items-center hidden">
              <video
                className=" lg:w-[100%] lg:h-auto object-cover bg-center"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/pizza-cafe-compression.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9waXp6YS1jYWZlLWNvbXByZXNzaW9uLm1wNCIsImlhdCI6MTcwMjkxNDQxNSwiZXhwIjoxNzM0NDUwNDE1fQ.Tyuy1ifrN1aalLD9OCskwa2IZ4jQngZ2Ju34_ssCXyg&t=2023-12-18T15%3A46%3A55.990Z"
                type="video/mp4"
                autoPlay
                muted
                loop
              />
              <a
                className="text-b2 text-orange-100 font-semibold mt-3 "
                href="https://github.com/MaySupunnika/pizza-shop"
                target="_blank"
              >
                Go to Github
              </a>
              <p className="text-[0.7rem] text-orange-100 font-semibold ">
                (STATUS: IN PROCESS)
              </p>
            </div>
          </>
        )}
        {current === 3 && (
          <>
            <div className="w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] lg:absolute lg:right-[4rem] lg:flex flex-col items-center hidden">
              <video
                className="lg:w-[100%] lg:h-auto object-cover bg-center"
                src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/merry-match.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9tZXJyeS1tYXRjaC5tcDQiLCJpYXQiOjE3MDI5MTQxMDMsImV4cCI6MTczNDQ1MDEwM30.Xc-joVymGA4irvETAYtGRMcJOEZMT1JbjyxJRaW_DPU&t=2023-12-18T15%3A41%3A43.646Z"
                type="video/mp4"
                autoPlay
                muted
                loop
              />
              <a
                className=" text-b2 text-orange-100 font-semibold mt-3 "
                href="https://github.com/MaySupunnika/merry-match"
                target="_blank"
              >
                Go to Github
              </a>
              <p className="text-[0.7rem] text-orange-100 font-semibold ">
                (STATUS: IN PROCESS)
              </p>
            </div>
          </>
        )}
      </div>
      {current === 1 && (
        <>
          <div className="lg:hidden w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] absolute md:top-[101.5rem] max-[1024px]:top-[110rem]  md:left-[10.5rem] top-[99rem] max-[640px]:top-[104rem] max-[640px]:left-[2rem] left-[6rem] flex flex-col items-center ">
            <video
              className="md:w-[80%] w-[75%] h-auto object-cover bg-center"
              src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/course-flow.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9jb3Vyc2UtZmxvdy5tcDQiLCJpYXQiOjE3MDI5MTY2NDEsImV4cCI6MTczNDQ1MjY0MX0.sjugXWa0_Nbjt75TGx6twcoEJqYsnv2sklo_8Htgz8A&t=2023-12-18T16%3A24%3A01.649Z"
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <a
              className="text-b3 text-orange-100 font-semibold mt-3 "
              href="https://github.com/MaySupunnika/CourseFlowProject"
              target="_blank"
            >
              Go to Github
            </a>
            <p className="text-[0.7rem] text-orange-100 font-semibold ">
              (STATUS: SUCCESS)
            </p>
          </div>
        </>
      )}
      {current === 2 && (
        <>
          <div className="lg:hidden w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] absolute md:top-[101.5rem] max-[1024px]:top-[110rem] md:left-[10.5rem] max-[640px]:top-[104rem] max-[640px]:left-[2rem] top-[97rem] left-[6rem] flex flex-col items-center">
            <video
              className="md:w-[80%] w-[75%] h-auto object-cover bg-center"
              src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/pizza-cafe-compression.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9waXp6YS1jYWZlLWNvbXByZXNzaW9uLm1wNCIsImlhdCI6MTcwMjkxNjczMSwiZXhwIjoxNzM0NDUyNzMxfQ._kF9XAOC8F2Z1h9rBJE4YFUuAY9KldjDeeeld461Vlw&t=2023-12-18T16%3A25%3A31.910Z"
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <a
              className="text-b3 text-orange-100 font-semibold mt-3"
              href="https://github.com/MaySupunnika/pizza-shop"
              target="_blank"
            >
              Go to Github
            </a>
            <p className="text-[0.7rem] text-orange-100 font-semibold">
              (STATUS: IN PROCESS)
            </p>
          </div>
        </>
      )}
      {current === 3 && (
        <>
          <div className="lg:hidden w-[22rem] h-[22rem] mt-[10rem] ml-[2rem] absolute md:top-[101.5rem] max-[1024px]:top-[110rem] md:left-[10.5rem] max-[640px]:top-[104rem] max-[640px]:left-[2rem] top-[97rem] left-[6rem] flex flex-col items-center">
            <video
              className="md:w-[80%] w-[75%] h-auto object-cover bg-center"
              src="https://pisulwuqrrzwvivwrwva.supabase.co/storage/v1/object/sign/dev-storage/video/merry-match.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS92aWRlby9tZXJyeS1tYXRjaC5tcDQiLCJpYXQiOjE3MDI5MTY2NzUsImV4cCI6MTczNDQ1MjY3NX0.HZLU4tqd0tIfalIQHIAfdwDDg29ranGR-tqTTYGbMWw&t=2023-12-18T16%3A24%3A35.524Z"
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <a
              className="text-b3 text-orange-100 font-semibold mt-3"
              href="https://github.com/piyawaleesn/Merry-Match"
              target="_blank"
            >
              Go to Github
            </a>
            <p className="text-[0.7rem] text-orange-100 font-semibold">
              (STATUS: IN PROCESS)
            </p>
          </div>
        </>
      )}
    </>
  );
}

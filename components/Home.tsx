import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import Social from "./Social";
import Navbar from "./Navbar";

export default function landingpagebanner() {
  useEffect(() => {
    Aos.init({
      offset: 50,
    });
  }, []);

  return (
    <div className="mt-0  bg-[url('../public/bg7.svg')] sm:bg-[url('../public/bg.svg')]  fixed w-full bg-hero h-screen bg-no-repeat bg-cover bg-center">
      <div className="right-0 hidden l-0 bottom-[30%] absolute h-full sm:flex mr-4 items-end pb-8">
        <Social />
      </div>{" "}
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 opacity-40 w-screen h-screen object-cover max-w-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>{" "}
      <div className="w-full z-40 absolute min-h-screen font-sans text-gray-900">
        <div className="h-screen bg2 flex justify-center bg-[#00000086]  ">
          {/* <Model /> */}
          <div className="px-0 absolute w-full h-full  flex justify-center py-2 sm:px-12 mx-auto sm:max-w-7xl 2xl:max-w-7xl">
            <div
              data-aos="zoom-in"
              className="flex w-full flex-col-reverse gap-1 sm:gap-8 items-center justify-start md:flex-row lg:items-center"
            >
              <div className="pt-4 sm:px-5 pr-0 w-full items-center sm:pr-8 pb-24 text-left px-10 md:pb-12 md:w-2/3 sm:text-left">
                <h1 className="relative fonts  font-body2 font-normal z-10 text-white font-display">
                  Innovations for a Better Tomorrow{" "}
                </h1>
                {/* <p className="pt-4 sm:pt-8 font-body1 text-sm sm:text-[1.3rem] leading-relaxed text-white md:max-w-md md:text-xl">
                  Learn how to ride the interchain highway ⏩️{" "}
                </p> */}
                {/* <div className="flex flex-col sm:flex-row gap-5 justify-center  items-start pt-5 sm:pt-5 space-x-6 md:justify-start">
                  <Link
                    href="#start"
                    className="flex justify-center font-semibold font-body1 text-md items-center py-3 px-9 hover:bg-[#441350] tracking-wide leading-7 text-white bg-[#bad4ff77]	rounded-3xl hover:shadow-xl z-50"
                  >
                   Register Now
                  </Link>
                </div> */}
              </div>
              <div className="flex p-2 sm:p-0 items-center sm:w-2/3 w-full mt-3 border-gray-400">
                <img
                  className="  scale-95 accent-neutral-100"
                  src="/hero.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

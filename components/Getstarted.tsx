import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Getstarted() {

    
  return (
    <div className="relative  bg-[#ffffff] rounded-t-[12%]  ">
      <div className="w-full bg4 font-sans  text-gray-900">
        <div className="h-full  bg3 flex bg-white justify-center  rounded-t-[12%] ">
          <section className="py-12 w-full bg-base-900 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:max-w-6xl 2xl:max-w-7xl sm:px-6 lg:px-8">
              <div
                data-aos="zoom-in"
                className="relative   overflow-hidden bg-gradient-to-b from-[#435686ad] to-[#000c27bd] md:flex rounded-3xl"
              >
                <div className="absolute right-0 transform -translate-y-1/2 translate-x-80 md:translate-x-36 top-1/2 md:top-0 md:-translate-y-24">
                  <svg
                    className="blur-3xl backdrop-blur-65 opacity-40 filter"
                    width="518"
                    height="337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M297.629 36.521C425.034 36.521 518-55.783 518 53.097S184.03 337 56.625 337c-127.406 0 0-175.023 0-283.903 0-108.88 113.599-16.576 241.004-16.576Z"
                      fill="url(#a)"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="0"
                        y1="337"
                        x2="36.01"
                        y2="-45.389"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" className="colo" />
                        <stop className="colo1" offset="100%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute min-w-7xl inset-0">
                  <img
                    className="object-cover w-full h-full opacity-50"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                    alt=""
                  />
                </div>

                <div className="absolute inset-y-0  pr-12 right-0 hidden md:block">
                  <img
                    className="w-full max-w-md scale-125 mr-24 pr-12 transform translate-y-20"
                    src="https://ibetofrontend.pages.dev/static/media/ibetologo.89112a3a.svg"
                    alt=""
                  />
                </div>

                <div className="relative  w-full p-6 sm:pl-10 lg:py-24 lg:pl-20 md:w-1/2 lg:w-2/3">
                  <h2 className="text-4xl font-body2 font-normal text-white sm:text-4xl lg:text-5xl">
                    About{" "}
                  </h2>
                  <p className="max-w-sm mt-6 font-body1 text-base font-normal text-gray-300 sm:text-lg">
                    As part of the annual national-level technical symposium,
                    Excel 2022, Govt. Model Engineering College, Kochi hosts
                    Innovations for a Better Tomorrow (IBeTo), a competition
                    that fosters technical innovation. Ideas that reimagine the
                    technology we have and create meaningful impacts on a social
                  </p>
                  <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                    <div className="absolute w-1/2 transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#7383d3] to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-400/20"></div>
                    <Link
                      href="https://www.hyperlane.xyz/"
                      target="_blank"
                      title=""
                      className="relative text-md font-body1 font-semibold inline-flex items-center justify-center px-8 py-2 text-base text-white bg-black/40 border border-transparent rounded-full"
                      role="button"
                    >
                      Regiater Now
                    
                    </Link>{" "}
                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#7383d3] to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-400/20"></div>
                    <Link
                      href="https://www.hyperlane.xyz/"
                      target="_blank"
                      title=""
                      className="relative text-md font-body1 font-semibold inline-flex items-center justify-center px-8 py-2 text-base text-white bg-black/40 border border-transparent rounded-full"
                      role="button"
                    >
                      Register now
                     
                    </Link>
                  </div>
                </div>

                <div className="relative md:hidden">
                  <img
                    className="hidden lg:block w-full h-[70%]"
                    src="https://ibetofrontend.pages.dev/static/media/ibetologo.89112a3a.svg"
                    alt=""
                  />
                  <img
                    className="lg:hidden p-4 block w-full h-[70%]"
                    src="https://ibetofrontend.pages.dev/static/media/ibetologo.89112a3a.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Rewards() {


  return (
    <div className="relative  bg-gradient-to-b  from-[#5a7cd4] to-[#6f21ffe5]   ">
      <div className="w-full  flex flex-col items-center font-sans  text-gray-900">
        <div className="h-full   justify-center   ">
          <section className="py-12 w-full  sm:py-16">
            <div className="w-fit ">
              <div
                data-aos="zoom-in"
                className="relative  overflow-hidden bg-gradient-to-b  from-[#ff7dfb] to-[#0f007d] md:flex rounded-3xl"
              >
                <div className="absolute right-0 transform translate-x-80 md:translate-x-36 top-1/2 md:top-0 md:-translate-y-24">
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

                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full opacity-50"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                    alt=""
                  />
                </div>

                <div className="relative  w-full p-6 sm:pl-10 lg:py-15 flex flex-col items-center ">
                  <h2 className="text-4xl font-body2 font-normal  text-white sm:text-4xl lg:text-5xl">
                    Rewards{" "}
                  </h2>
                  <div className="backdrop-blur-sm m-5 bg-white/30 p-20 rounded-lg text-center ">
                    <h1 className="text-white text-2xl font-medium">Prize Worth</h1>
                    <h1 className="text-white text-4xl font-semibold">₹1,00,000</h1>
                  </div>
                  <ul className="text-white p-5 text-center">
                    <li>Internship opportunities for selected participants.</li>
                    <li>Certificate of Participation for all teams upon reaching the Create phase.</li>
                    <li>As per KTU regulations, socially relevant projects can avail upto 50 activity points.</li>
                    <li>Exclusive perks for all the 30 shortlisted teams.</li>
                  </ul>
                </div>


              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

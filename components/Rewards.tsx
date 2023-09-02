import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Rewards() {


  return (
    <div className="py-2 z-10 rounded-b-[66px]  drop-shadow-lg flex flex-col items-center relative bg-gradient-to-b from-[#c2beff] to-[#ece0ff]  sm:py-16 lg:py-20 lg:pb-28 px-16">
   
      <div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-[15%]"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "}
      <h2 className="font-body2 text-black text-center pb-3 sm:pb-12  text-3xl font-normal  sm:text-4xl lg:text-5xl">
           Rewards
          </h2>
      <div className="  rounded-[30px] bg-opacity-25 drop-shadow-2xl bg-[url('https://img.freepik.com/free-vector/colorful-confetti-background-with-text-space_1017-32374.jpg?w=1380&t=st=1693680001~exp=1693680601~hmac=856d36eff52df9d55cbfa01e43706cc8d225af99380dd40e9fa05f4e32a3004a')]  w-fit  ">
        <div className=" font-body2 text-black  font-normal rounded-[30px] drop-shadow-2xl    backdrop-blur-sm py-24  px-48  w-fit ">
          <h1 className=" text-7xl text-center">Prize Worth</h1>
          <h1 className="text-7xl text-center">₹1,00,000</h1>
          <ul className="mt-7 text-center">
            <li className="pb-2">Internship opportunities for selected participants.</li>
            <li className="pb-2">Certificate of Participation for all teams upon reaching the Create phase.</li>
            <li className="pb-2">As per KTU regulations, socially relevant projects can avail upto 50 activity points.</li>
            <li >Exclusive perks for all the 30 shortlisted teams.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

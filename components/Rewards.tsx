import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';

export default function Rewards() {


  return (
    <div className=" z-10 rounded-[66px]   flex flex-col items-center relative bg-gradient-to-b from-[#B6C6FF] to-[#e7d2f4]  sm:py-16 lg:py-10 lg:pb-28 px-16">

<div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-10"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "}
      <h2 className="font-body2 text-black text-center pb-3 sm:pb-12  text-3xl font-normal  sm:text-4xl lg:text-5xl">
        Rewards
      </h2>
      <Tilt gyroscope>
      <div className="  rounded-[30px] bg-[#ffffff1a] border-t-[1px] border-l-[1px] border-[#ffffff80] border-solid shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  font-body2  backdrop-blur-lg py-24  px-48  w-fit  ">
          <h1 className=" text-5xl text-center font-100 z-100 drop-shadow-2xl">Prize Worth</h1>
    
    <h1 className="text-7xl text-center drop-shadow-2xl   font-semibold" >
    <CountUp
start={0}
  end={100}
  duration={8}
  separator=" "
  decimals={3}
  decimal=","
prefix="₹">
{({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
    </h1>
   
          <ul className="mt-7 text-center">
            <li className="pb-2">Internship opportunities for selected participants.</li>
            <li className="pb-2">Certificate of Participation for all teams upon reaching the Create phase.</li>
            <li className="pb-2">As per KTU regulations, socially relevant projects can avail upto 50 activity points.</li>
            <li >Exclusive perks for all the 30 shortlisted teams.</li>
          </ul>
        </div>
        </Tilt>
      </div>

  );
}


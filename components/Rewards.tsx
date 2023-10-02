import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";

export default function Rewards() {
  return (
    <div className=" z-10 rounded-b-[66px] rounded-t-[-166px]  flex flex-col items-center relative bg-gradient-to-b from-[#fcfaff] to-[#f9eeff]  py-3 pb-6 lg:py-10 lg:pb-28 px-16 ">
      <div className="absolute inset-0 min-w-7xl">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-10"
          src="./noise.png"
          style={{
            pointerEvents: "none",
          }}
          alt=""
        />
      </div>{" "}
      {/* <h2 className="pb-3 text-3xl font-normal text-center text-black font-body2 sm:pb-12 sm:text-4xl lg:text-5xl">
        Rewards
      </h2> */}
      <Tilt gyroscope className="hidden lg:block" >
        <div className="rounded-[30px] bg-[#ffffff1a] border-t-[1px] border-l-[1px] border-[#ffffff80] border-solid shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  font-body2  backdrop-blur-lg lg:py-24 py-20  lg:px-48 px-12  w-fit mb-6 ">
          <h1 className="text-xl mb-3 text-center lg:text-5xl font-100 z-100 drop-shadow-2xl">
            <img
              className="inline-block mr-2 w-10 lg:w-12"
              src="https://img.icons8.com/3d-fluency/94/confetti.png"
              alt="confetti"
            />
            Prize Worth{" "}

          </h1>

          <h1 className="text-4xl font-semibold text-center hidden lg:block lg:text-7xl drop-shadow-2xl">
            <CountUp
              start={0}
              end={100000}
              redraw={true}
              duration={2}
              separator=","
              decimal=","
              prefix="₹"
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="from-purple-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1 >
          <h1 className="text-4xl from-purple-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  font-800 text-center lg:hidden  drop-shadow-2xl">
            ₹1,00,000
          </h1>

          <div className="mt-6   text-xs text-center lg:text-base ">
            <li className="pb-4">
            Internship opportunities for selected participants.
            </li>
            <li className="pb-4 ">
              Certificate of Participation for all teams upon reaching the
              Create phase.
            </li>
            <li className="pb-4">
              As per KTU regulations, socially relevant projects can avail upto
              50 activity points.
            </li>
            <li>Exclusive perks for all the 30 shortlisted teams.</li>
          </div>
        </div>
      </Tilt>
      <div className="rounded-[30px] bg-[#ffffff1a] border-t-[1px] border-l-[1px] border-[#ffffff80] border-solid shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] lg:hidden  font-body2  backdrop-blur-lg lg:py-24 py-20 max-[300px]:px-5 max-[300px]:py-12 lg:px-48 px-12  w-fit mb-6 ">
          <h1 className="text-xl  mb-3 text-center lg:text-5xl font-100 z-100 drop-shadow-2xl">
            <img
              className="inline-block mr-2 w-10 lg:w-12"
              src="https://img.icons8.com/3d-fluency/94/confetti.png"
              alt="confetti"
            />
            Prize Worth{" "}

          </h1>

          <h1 className="text-4xl font-semibold text-center hidden lg:block lg:text-7xl drop-shadow-2xl ">
            <CountUp
              start={0}
              end={100000}
              redraw={true}
              duration={2}
              separator=","
              decimal=","
              prefix="₹"
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="from-purple-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1 >
          <h1 className="text-4xl from-purple-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  font-800 text-center lg:hidden  drop-shadow-2xl">
            ₹1,00,000
          </h1>

          <div className="mt-6  md:text-center text-xs  lg:text-base ">
            <li className="pb-4">
            Internship opportunities for selected participants.
            </li>
            <li className="pb-4 ">
              Certificate of Participation for all teams upon reaching the
              Create phase.
            </li>
            <li className="pb-4">
              As per KTU regulations, socially relevant projects can avail upto
              50 activity points.
            </li>
            <li>Exclusive perks for all the 30 shortlisted teams.</li>
          </div>
        </div>
    </div>
  );
}

import React from 'react'
import { FiPhoneCall, FiLinkedin, FiMail } from "react-icons/fi";


export default function Contact() {
  return (
    <section className="py-12 rounded-[40px] sm:rounded-[66px] -mt-24 border-t-4 border-b-2 border-slate-600 sm:-mt-32 z-30 relative w-full bg-[#f7efff] sm:py-16 lg:py-20">
      <div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-10"
          src="./noise.png"
          alt=""
        />
      </div>{" "}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center lg:text-center">
          <h2 className="mt-4 font-body2 text-3xl font-normal text-blcak sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-32 mt-12 mb-24 px-12  sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 sm:gap-6">
          <div className="relative h-full  bg-white m-2 rounded-[10px]  shadow-lg group">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-52 transition-all rounded-[10px]  duration-300 group-hover:scale-110"
                src="https://ibeto.excelmec.org/static/media/nasreen.851a68c4332fc7496ddb.png"
                alt=""
              />
            </div>
            <div className="px-5 py-5   text-center bg-white -mt-6 absolute w-full rounded-t-[23px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
                Mathew Davis{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal mt-1 font-body1 text-gray-600">
                Chairperson
              </h4>
              <div className="flex mt-2 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919496573224"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:mathewdavis.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mathew-davis-855002211"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-52  transition-all rounded-t-[10px] duration-300 group-hover:scale-110"
                src="/Vishnu.jpg"
                alt=""
              />
            </div>
            <div className="px-5 py-5 text-center bg-white -mt-6 absolute w-full rounded-t-[23px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
              Vishnu S{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal mt-1 font-body1 text-gray-600">
              General Secretary
              </h4>
              <div className="flex mt-2 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+917736897653"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:vishnusarath.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vishnu-s-89300920b"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-52 transition-all rounded-[10px] duration-300 group-hover:scale-110"
                src="/Abhishek.jpg"
                alt=""
              />
            </div>
            <div className="px-5 py-5   text-center bg-white -mt-6 absolute w-full rounded-t-[23px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
              Abhishek P{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal mt-1 font-body1 text-gray-600">
              Joint Secretary
              </h4>
              <div className="flex mt-2 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+917025715130"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:abhishek07.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abhishek-p-6b2336214"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="relative h-full  bg-white m-2 rounded-[10px] shadow-lg group">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-52 transition-all rounded-[10px] duration-300 group-hover:scale-110"
                src="https://ibeto.excelmec.org/static/media/nasreen.851a68c4332fc7496ddb.png"
                alt=""
              />
            </div>
            <div className="px-5 py-5   text-center bg-white -mt-6 absolute w-full rounded-t-[23px]">
              <h3 className="text-base font-semibold font-body1 text-gray-900">
              Cijo Jose{" "}
              </h3>{" "}
              <h4 className="text-sm font-normal mt-1 font-body1 text-gray-600">
                Social Initiatives Manager
              </h4>
              <div className="flex mt-2 justify-center">
                <ul className="flex px-3 z-50 gap-2  items-center md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="tel:+919496993697"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiPhoneCall className="contact_social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:cijojose.mec@gmail.com"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiMail className="contact_social_icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cijo-jose-01b59425a"
                      title=""
                      target="_blank"
                      className="flex items-center justify-center  transition-all duration-200 bg-transparent border border-gray-300 rounded-[8px] w-7 h-7 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800"
                    >
                      <FiLinkedin className="contact_social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

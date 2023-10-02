import React, {useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


export default function Faq() {
  const [state1, setState1] = useState(false); 
  const [state2, setState2] = useState(false); 
  const [state3, setState3] = useState(false); 
  const [state4, setState4] = useState(false); 
  const [state5, setState5] = useState(false); 
  const [state6, setState6] = useState(false); 
  const items= [
      {
        uuid: 1,
        question: "When will the event be conducted ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 2,
        question: "Where will the event be held ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 3,
        question: "Lorem ipsum dolor sit ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 4,
        question: "Lorem ipsum dolor sit ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      // {
      //   uuid: 5,
      //   question: "Lorem ipsum dolor sit ?",
      //   answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      // },
      // {
      //   uuid: 6,
      //   question: "Lorem ipsum dolor sit ?",
      //   answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      // },
  ]
  return (
    <section
      id="faq"
      className="py-14 pt-14 bg-[#fdf1fa] rounded-t-[40px] sm:rounded-t-[66px] relative -mt-12 sm:py-16 lg:py-24"
    >
      {/* <div className="absolute inset-0 min-w-7xl">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-[15%]"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "} */}
      <div className="max-w-5xl px-8 mx-auto pr-9 sm:pr-0 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mt-4 text-3xl font-normal text-black font-body2 text-blcak sm:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>
          <p className="hidden max-w-xl mx-auto mt-4 text-base font-normal leading-relaxed text-gray-800 sm:block font-body1">
            Explore the common questions and answers about IBeTo
          </p>
        </div>

       {/* ----------------For mobile view---------------- */}
        <div className="flex sm:hidden w-full">
          <div className="pb-2 grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-20">

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[0].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState1(!state1)}>
                      {state1 ? "-" : "+"}
                  </p>
                </div>
                {state1 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[0].answer}</p>
                )} 
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[1].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState2(!state2)}>
                      {state2 ? "-" : "+"}
                  </p>
                </div>
                {state2 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[1].answer}</p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[2].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState3(!state3)}>
                      {state3 ? "-" : "+"}
                  </p>
                </div>
                {state3 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[2].answer}</p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[3].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState4(!state4)}>
                      {state4 ? "-" : "+"}
                  </p>
                </div>
                {state4 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[3].answer}</p>
                )}
              </div>
            </div>

            {/*-------------   IF THERE ARE QNS 5 AND 6    ----------------*/}
            {/* <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[4].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState5(!state5)}>
                      {state5 ? "-" : "+"}
                  </p>
                </div>
                {state5 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[4].answer}</p>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex">
                  <p className="mr-2 text-base font-semibold text-gray-600 font-body1">
                    {items[5].question}
                  </p>
                  <div className="flex-1"></div>
                  <p className="ml-1 text-xl font-body1 font-semibold text-gray-600" onClick={()=>setState6(!state6)}>
                      {state6 ? "-" : "+"}
                  </p>
                </div>
                {state6 && (
                  <p className="mt-3 mr-3 text-sm font-light text-gray-500 sm:text-base font-body1">{items[5].answer}</p>
                )}
              </div>
            </div> */}

          </div>
        </div> 
        
        {/* ----------------For Desktop View---------------- */}
        <div className="hidden sm:flex">
          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-14 sm:gap-y-16 gap-x-20">
            {items.map((item)=>( 
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-600 font-body1">
                    {item.question}
                  </p>
                  <p className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>  

        <div className="relative z-40 flex items-center justify-center mt-12 md:mt-28">
          <div className="px-10 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-sm text-gray-50 font-body2">
              Didn’t find the answer you are looking for?{" "}
              <a
                href="#"
                title=""
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

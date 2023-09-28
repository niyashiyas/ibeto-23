import React from "react";
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
  const items= [
      {
        uuid: 1,
        heading: "Lorem ipsum dolor sit ?",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 2,
        heading: "Lorem ipsum dolor sit ?",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 3,
        heading: "Lorem ipsum dolor sit ?",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
      {
        uuid: 4,
        heading: "Lorem ipsum dolor sit ?",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      },
  ]
  return (
    <section
      id="faq"
      className="py-14 pt-14 bg-[#dedef5] rounded-t-[40px] sm:rounded-t-[66px] relative -mt-12 sm:py-16 lg:py-24"
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

        <div className="flex sm:hidden">
          <Accordion allowZeroExpanded allowMultipleExpanded className="grid pb-2 grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-14 sm:gap-y-16 gap-x-20">
            {items.map((item) => (
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                  <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <AccordionItem key={item.uuid}>
                      <AccordionItemHeading>
                          <AccordionItemButton className="text-xl font-semibold text-gray-600 font-body1">
                              {item.heading}
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                        {item.content}
                      </AccordionItemPanel>
                    </AccordionItem>
                </div>
              </div>
            ))}
          </Accordion>
        </div> 
        
        <div className="hidden sm:flex">
          <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-14 sm:gap-y-16 gap-x-20">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-600 font-body1">
                  Lorem ipsum dolor sit?
                </p>
                <p className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-600 font-body1">
                  Lorem ipsum dolor sit?
                </p>
                <p className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-600 font-body1">
                  Lorem ipsum dolor sit?
                </p>
                <p className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-600 font-body1">
                  Lorem ipsum dolor sit?
                </p>
                <p className="mt-4 text-sm font-light text-gray-500 sm:text-base font-body1">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
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

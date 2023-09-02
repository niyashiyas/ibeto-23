import React from "react";

export default function Faq() {
  return (
    <section className="py-10 bg-[#dedef5]  rounded-t-[66px] relative -mt-12 sm:py-16 lg:py-24">
      <div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-[15%]"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "}
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mt-4 font-body2 text-black text-3xl font-normal text-blcak sm:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>
          <p className="max-w-xl font-normal font-body1 mx-auto mt-4 text-base leading-relaxed text-gray-800">
            Explore the common questions and answers about IBeTo
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-body1 font-semibold text-gray-600">
                Lorem ipsum dolor sit?
              </p>
              <p className="mt-4 text-base font-body1 font-light text-gray-500">
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
              <p className="text-xl font-body1 font-semibold text-gray-600">
                Lorem ipsum dolor sit?
              </p>
              <p className="mt-4 text-base font-body1 font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                repudiandae quo, iusto porro similique nisi earum ducimus.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-body1 font-semibold text-gray-600">
                Lorem ipsum dolor sit?
              </p>
              <p className="mt-4 text-base font-body1 font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                repudiandae quo, iusto porro similique nisi earum ducimus..
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-body1 font-semibold text-gray-600">
                Lorem ipsum dolor sit?
              </p>
              <p className="mt-4 text-base font-body1 font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                repudiandae quo, iusto porro similique nisi earum ducimus.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center z-40 relative justify-center mt-12 md:mt-28">
          <div className="px-10 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50 font-body2">
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

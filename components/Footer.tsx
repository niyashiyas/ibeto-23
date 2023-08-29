import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="px-3 sm:px-0py-10 rounded-t-[66px] -mt-16 absolute w-full  bg1 bg-[#ebd9ff] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:max-w-6xl 2xl:max-w-7xl">
        <div className="flex justify-between flex-col sm:flex-row gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <Link href="">
              <img
                className="w-auto h-16"
                src="https://ibeto.excelmec.org/static/media/excellogowithtext.5937280d5965b8c122a0.png"
                alt=""
              />
            </Link>

            {/* <p className="text-base font-body1 leading-relaxed text-white mt-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p> */}
          </div>

          <div className="col-start-6 lg:col-span-2 col-end">
            {/* <p className="text-base font-semibold text-gray-900">Links</p> */}

            {/* <ul className="mt-6 space-y-5">
              <li>
                <Link
                  href="#"
                  title=""
                  className="flex text-sm text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Programs{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  title=""
                  className="flex text-sm text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Donate{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="/volunteer"
                  title=""
                  className="flex text-sm text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Volunteer{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  title=""
                  className="flex text-sm text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Collaboration{" "}
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex pb-8 sm:items-center sm:justify-between">
          <p className="text-sm font-body1 text-white">
            © Copyright 2021, All Rights Reserved by Excel MEC
          </p>
        </div>
      </div>
    </section>
  );
}

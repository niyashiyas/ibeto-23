import React from "react";
import Link from "next/link";
import Image from "next/image";
import heart from '../public/heart.svg'
export default function Footer() {
  return (
    <>
      <footer className="py-12  z-40 bg11 -mt-8 sm:-mt-16 bg-[#fffafd] sm:pt-28 lg:pt-32">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center space-y-10 lg:justify-between lg:space-y-0 lg:flex-row">
            <div className="shrink-0 px-4 pt-6 pb-3 flex justify-between  w-full sm:w-fit ">
              <a href="https://excelmec.org" title="" className="flex">
                <img className="w-auto h-16" src="./excellogo.png" alt="" />
              </a>
              <div className=" sm:hidden block">
                <a href="https://mec.ac.in" title="" className="flex">
                  <img className="w-auto h-16" src="./meclogo.png" alt="" />
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <div className="flex items-center justify-end space-x-3">
                <div>
                  <a
                    href="https://twitter.com/excelmec"
                    title=""
                    className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-rose-500"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src="./xlogo.png" alt="logo" width={15} height={15} />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.facebook.com/excelmec/"
                    title=""
                    className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-rose-500"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.instagram.com/excelmec/"
                    title=""
                    className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-rose-500"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/company/excelmec/mycompany/"
                    title=""
                    className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-rose-500"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      className="w-3 h-3"
                      src="https://img.icons8.com/metro/52/FFFFFF/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>
              </div>
              <div className=" text-center">
                <p className="inline-flex gap-1 font-normal text-black text-2sm font-body1">
                  Made with{" "}
                  <svg width="20" height="20" viewBox="0 0 242 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="teenyicons:heart-solid">
                      <path id="Vector" d="M65.8449 16.2C53.0193 16.1992 40.4814 20.0335 29.817 27.2178C19.1526 34.4022 10.8406 44.6139 5.93237 56.5616C1.02409 68.5093 -0.260064 81.6563 2.24231 94.3399C4.74468 107.023 10.9212 118.674 19.9907 127.818L115.812 224.435C116.559 225.189 117.445 225.788 118.421 226.196C119.397 226.604 120.443 226.814 121.5 226.814C122.557 226.814 123.603 226.604 124.579 226.196C125.555 225.788 126.441 225.189 127.187 224.435L223.009 127.802C234.841 115.474 241.394 98.9515 241.255 81.7969C241.115 64.6423 234.295 48.2301 222.264 36.0996C210.233 23.969 193.956 17.092 176.943 16.9515C159.929 16.811 143.543 23.4182 131.317 35.3484L121.5 45.2304L111.699 35.3484C105.675 29.2752 98.524 24.4582 90.6535 21.1727C82.7829 17.8871 74.3634 16.1974 65.8449 16.2Z" fill="url(#paint0_linear_526_2)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_526_2" x1="121.126" y1="16.2" x2="121.126" y2="226.814" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C21D05" />
                        <stop offset="1" stop-color="#29304D" />
                      </linearGradient>
                    </defs>
                  </svg>


                  <Link href="https://www.excelmec.org/"> Excel 2023</Link>
                </p>
              </div>
            </div>
            <div className="shrink-0 hidden sm:block">
              <a href="https://mec.ac.in" title="" className="flex">
                <img className="w-auto h-16" src="./meclogo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

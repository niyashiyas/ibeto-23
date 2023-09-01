import React from "react";

export default function Sponsors() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="absolute -mt-12 z-0 opacity-[14%] w-full h-fit object-cover max-w-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <section className="py-12 -mt-12   bg-[#0f0416] sm:py-18 lg:py-24 xl:py-28">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center sm:text-center">
              <p className="text-base font-normal text-white sm:text-lg">
                Lorem ipsum dolor sit amet{" "}
              </p>
              <h2 className="mt-4 font-body2 text-3xl font-normal text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                Collaborators{" "}
              </h2>
            </div>

            <hr className="mt-8 border-gray-800 sm:mt-12" />
            <div className="flex mb-8 w-full justify-center">
              <div className="inline-grid grid-cols-2 gap-8 mt-8 sm:gap-x-12 sm:gap-y-10 sm:grid-cols-4 sm:mt-12">
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-waverio.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-logoipsum.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-alterbone.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-carbonia.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-tinygone.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-preso.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-ridoria.svg"
                  alt=""
                />
                <img
                  className="object-contain h-8 max-w-full sm:h-10 w-44"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-incanto.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

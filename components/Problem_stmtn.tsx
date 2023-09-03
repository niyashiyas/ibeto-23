import React from "react";





export default function Problem_stmnt() {
    return (
        <section className="py-12 bg-[#EAE9FF] rounded-t-[60px] relative w-full -mt-14 sm:py-16 lg:py-20  sm:pb-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-left sm:text-center">
                <h2 className="mt-4 font-body2 text-3xl text-black font-normal text-blcak sm:text-3xl lg:text-4xl">
                        Problem statement</h2>
                    {/* <p className="mt-4 text-base font-medium text-gray-500">In a creative workplace, employees responsibly try different solutions</p> */}
                </div>

                <div className="grid grid-cols-1 g gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-14 ">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 font-body2">Towards Zero Carbon Emission</h3>
                        <hr className="mt-4 border-t-2 border-slate-800" />

                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">

                                <img src="./carbon.svg" alt="co2 logo" className="  w-6 aspect-square" />
                                <span className="ml-3 text-sm font-medium text-gray-500">How can we reduce transmission/distribution losses in the power grid? Wait, how is this related to Carbon Emissions? </span>
                            </li>

                            <li className="flex items-start">
                            <img src="./carbon.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                <span className="ml-3 text-sm font-medium text-gray-500"> Is it possible for local bodies to go completely off-grid?
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 transition ease-in-out delay-150 cursor-pointer  hover:text-blue-900  font-body2">Waste management</h3>
                        <hr className="mt-4 border-t-2 border-gray-900" />

                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">
                            <img src="./waste.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                <span className="ml-3 text-sm font-medium text-gray-500">Can we easily segregate food waste from plastic waste? </span>
                            </li>

                            <li className="flex items-start">
                            <img src="./waste.svg" alt="co2 logo" className="  w-5 aspect-square" />

                                <span className="ml-3 text-sm font-medium text-gray-500">What products can be created from waste materials? </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 font-body2">Disaster Management</h3>
                        <hr className="mt-4 border-t-2 border-gray-900" />

                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">
                            <img src="./disaster.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                <span className="ml-3 text-sm font-medium text-gray-500"> 
                                What can be done to quickly establish a communication network in disaster-stricken areas?                                
                                 </span>
                            </li>

                            <li className="flex items-start">
                            <img src="./disaster.svg" alt="co2 logo" className="  w-6 aspect-square" />

                                <span className="ml-3 text-sm font-medium text-gray-500"> 
                                How would we control large-scale fire outbreaks like forest fires?                                 </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Phase 4</h3>
                        <hr className="mt-4 border-t-2 border-gray-900" />

                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 shrink-0 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-3 text-sm font-medium text-gray-500"> Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ac et adipiscing nulla quam nulla pharetra lacus mi. Integer id quis. </span>
                            </li>

                            <li className="flex items-start">
                                <svg className="w-6 h-6 shrink-0 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-3 text-sm font-medium text-gray-500"> Ace et adipiscing nulla quam nulla pharetra lacus mi. Integer id quis. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

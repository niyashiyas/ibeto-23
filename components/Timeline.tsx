import React from 'react';
import { useEffect } from "react";
import Aos from "aos";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  useEffect(() => {
        Aos.init({ duration: 1100 });
  }, []);
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold text-white">Timeline</h2>
          <p className="max-w-xs mx-auto mt-4 text-base font-medium text-gray-400 lg:mx-0 lg:mt-0">
            In a creative workplace, employees with responsibly try different
            solutions
          </p>
        </div>

        <div className="mt-12 sm:px-16 lg:px-0">
          <div className="grid grid-cols-1 overflow-hidden border border-gray-700 divide-y divide-gray-700 lg:divide-y-0 lg:divide-x lg:grid-cols-3 rounded-xl">
            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                Phase 1
              </p>
              <p className="mt-3 text-xl font-bold text-white">Launch</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Launching Time{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Social Launch{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Giveways & Promos{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                Phase 2
              </p>
              <p className="mt-3 text-xl font-bold text-white">Investment</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Publish Whitepaper{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Website Launch{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Mega Advertisement{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:px-10">
              <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                Phase 3
              </p>
              <p className="mt-3 text-xl font-bold text-white">Growing</p>

              <ul className="space-y-3 mt-7">
                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Opening Collections{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Influencer Marketing{" "}
                  </span>
                </li>

                <li className="flex items-center px-4 py-3 bg-gray-800 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.5"
                      cy="11.5"
                      r="8.75"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <span className="flex-1 ml-2 text-base font-medium text-white">
                    {" "}
                    Public Release{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <div className="timeline" id="timeline">
      <div className="timeline__container">
        <h2 className="ps__header">Timeline</h2>

        <div className="timeline__section" data-aos="zoom-in">
          <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              // contentStyle={{ color: "#ffff", background: "#ffff" }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="7th October"
            >
              <h3 className="vertical-timeline-element-title">
                IBeTo Launch - Registration Opens
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              IBeTo registration opens. Students can register by submitting their ideas by filling the form in the website.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="21st October"
            >
              <h3 className="vertical-timeline-element-title">
              Detailed Abstract Submission Open
              </h3>

              <p className="timeline__para">
              Detailed Abstract Submission opens for registered IBeTo participants. 
              The registration is still open via the form in the website.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              // contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="24th October"
            >
              <h3 className="vertical-timeline-element-title">
              IBeTo Registration Closes
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              IBeTo registration closes. Teams selected for detailed abstract submission will be announced.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="29th October"
            >
              <h3 className="vertical-timeline-element-title">
              Detailed Abstract Submission Closes
              </h3>

              <p className="timeline__para">
              Detailed Abstract Submission closes. 
              This marks the end of the ideate phase.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              // contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="3rd November"
            >
              <h3 className="vertical-timeline-element-title">
              Announcement of Shortlisted Teams
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              30 teams are shortlisted with 15 from each track.
              Teams are assigned mentors.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="4th November "
            >
              <h3 className="vertical-timeline-element-title">
              Project Development Begins
              </h3>

              <p className="timeline__para">
              Create Phase begins. Teams are encouraged to start working on 
              their projects.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              // contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="1st - 10th December"
            >
              <h3 className="vertical-timeline-element-title">
                Meet The Mentor Session
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              The teams are given an opportunity to interact with their mentors 
              and obtain advice on how to further develop their project.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="23rd December"
            >
              <h3 className="vertical-timeline-element-title">Project Plan</h3>

              <p className="timeline__para">
              The teams are required to submit their project plan - detailing
              their project creation process.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              // contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="Final Day"
            >
              <h3 className="vertical-timeline-element-title">IBeTo Finale</h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              Teams should give a presentation on their project along with a demonstration of their working prototype 
              in front of the judges on the finale of the event. The winners will be
                announced on the same day.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
    </section>
  );
}

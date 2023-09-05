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

  const timeline = [
    {
      date:"7th October",
      title: "IBeTo Launch - Registration Opens",
      para: "IBeTo registration opens. Students can register by submitting their ideas by filling the form in the website.",

    },
    {
      date:"21st October",
      title: "Detailed Abstract Submission Open",
      para: "Detailed Abstract Submission opens for registered IBeTo participants. The registration is still open via the form in the website.",

    },
    {
      date:"24th October",
      title: "IBeTo Registration Closes",
      para: "IBeTo registration closes. Teams selected for detailed abstract submission will be announced.",

    },
    {
      date:"29th October",
      title: "Detailed Abstract Submission Closes",
      para: "Detailed Abstract Submission closes. This marks the end of the ideate phase.",

    },
    {
      date:"3rd November",
      title: "Announcement of Shortlisted Teams",
      para: "Announcement of Shortlisted Teams.",

    },
    {
      date:"4th November",
      title: "Project Development Begins",
      para: "Create Phase begins. Teams are encouraged to start working on their projects..",

    },
    {
      date:"1st - 10th December",
      title: "Meet The Mentor Session",
      para: "The teams are given an opportunity to interact with their mentors and obtain advice on how to further develop their project.",

    },
    {
      date:"23rd December",
      title: "Project Plan",
      para: "The teams are required to submit their project plan - detailing their project creation process.",
    },
    {
      date:"Final Day",
      title: "IBeTo Finale",
      para: "Teams should give a presentation on their project along with a demonstration of their working prototype in front of the judges on the finale of the event. The winners will be announced on the same day.",
    },
  ]
  return (
    <section id="timeline" className="py-4 z-10 relative rounded-b-[40px] sm:rounded-b-[60px]  bg-[#EAE9FF]  sm:py-16 lg:py-20 px-16">
      <div 
        className="timeline border-t-1 border-slate-300/60"
      >
        <div className="timeline__container">
          <h2 className="font-body2 text-black text-center pb-3 sm:pb-12  mt-24 text-3xl font-normal text-blcak sm:text-4xl lg:text-5xl">
            Timeline
          </h2>

          {/* <div className="timeline__section" data-aos="zoom-in">
            <div className="ml-2 mr-4 sm:mx-0">
              <VerticalTimeline lineColor="white" className="rounded-full">
                {timeline.map((t, i) => {
                  return (
                    <VerticalTimelineElement
                      key={i}
                      contentStyle={{ borderRadius: "25px" }}
                      className="vertical-timeline-element--work"
                      contentArrowStyle={{
                        borderRight: "7px solid  black",
                        borderRadius: "66px",
                      }}
                      date={t.date}
                    >
                      {t.title ? (
                        <React.Fragment>
                          <h3 className="vertical-timeline-element-title font-bold">
                            {t.title}
                          </h3>
                          <div className=""></div>
                          <h6 className="py-3">{t.para}</h6>
                        </React.Fragment>
                      ) : undefined}
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "HRM Application Dashboard",
    description:
      "A human resource management system (HRMS) is a set of software applications that assists HR professionals in managing HR functions efficiently.",
    imgUrl: "/images/hrm-application-dashboard-ui.png",
    projectUrl:
      "https://dribbble.com/shots/24603923-HRM-Application-Dashboard-UI",
  },
  {
    id: 2,
    title: "Harley Davidson Website Hero",
    description: "Harley Davidson Website Hero Section",
    imgUrl: "/images/harley-davidson-website-hero-section.png",
    projectUrl: "https://dribbble.com/shots/24300709-Harley-Davidson-Website-Hero-Section",
  },
  {
    id: 3,
    title: "Freight Website Landing Page",
    description: "Freight Website: Navigating the Digital Logistics Landscape",
    imgUrl: "/images/freight-website-landing-page.png",
    projectUrl: "https://dribbble.com/shots/23511452-Freight-Website-Landing-Page-Design",
  },
  {
    id: 4,
    title: "Video Game Streaming Mobile App",
    description: "Video Game Streaming Mobile App",
    imgUrl: "/images/video-game-streaming-mobile-app.png",
    projectUrl: "https://dribbble.com/shots/24297950-Video-Game-Streaming-Mobile-App-UI",
  },
];

const WorksGallery = () => {
  return (
    <section className="custom-container mt-[20px]">
      <div className="rounded-2xl bg-[#131a29] border border-[var(--color-tertiary)]">
        <h3 className="text-base font-semibold laptop:hidden p-[20px]">
          Works Gallery
        </h3>
        <div className="hidden laptop:flex justify-between items-center p-[20px]">
          <h3 className="text-lg font-semibold text-[#9BA1A6]">Works</h3>
          <Link href="/https://dribbble.com/ibrahimuix" className="text-white text-base underline">
            View All
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-col laptop:flex-row">
              {works.map((work) => (
                <div
                  key={work.id}
                  onClick={() => window.open(work.projectUrl, "_blank")}
                  className={`group rounded-2xl cursor-pointer flex flex-col flex-shrink-0 laptop:w-3/12 tablet:pb-[20px] pr-[20px] pb-[20px] pl-[20px]`}
                >
                  <div className="h-56 laptop:h-64 relative overflow-hidden rounded-xl">
                    <Image
                      src={work.imgUrl}
                      alt={work.title}
                      className="rounded-xl object-cover transition-transform duration-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                      layout="fill"
                    />
                    <div className="text-content absolute flex flex-col items-center justify-center bg-[#131a29] bg-opacity-80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                      <h2 className="text-lg font-semibold break-words">{work.title}</h2>
                      <p className="text-base text-[#9BA1A6] text-center">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;

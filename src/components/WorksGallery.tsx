"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1",
    imgUrl: "/images/work-1.jpg",
    projectUrl: "/images/work-1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2",
    imgUrl: "/images/work-1.jpg",
    projectUrl: "/images/work-2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3",
    imgUrl: "/images/work-1.jpg",
    projectUrl: "/images/work-3.png",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4",
    imgUrl: "/images/work-1.jpg",
    projectUrl: "/images/work-4.png",
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
          <Link href="/works" className="text-white text-base underline">
            View All
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-col laptop:flex-row">
              {works.map((work) => (
                <div
                  key={work.id}
                  onClick={() => location.replace(work.projectUrl)}
                  className={`group rounded-2xl cursor-pointer flex flex-col flex-shrink-0 laptop:w-3/12 tablet:pb-[20px] pr-[20px] pb-[20px] tablet:pl-0 tablet:pr-0 ${
                    work.id == 1 ? "pl-[20px] tablet:pt-0" : ""
                  } ${work.id == works.length ? "tablet:pr-0" : ""}`}
                >
                  <div className="h-56 laptop:h-64 relative overflow-hidden rounded-xl">
                    <Image
                      src={work.imgUrl}
                      alt={work.title}
                      className="rounded-xl object-cover transition-transform duration-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                      layout="fill"
                    />
                    <div className="text-content absolute flex flex-col items-center justify-center bg-[#131a29] bg-opacity-80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                      <h2 className="text-lg font-semibold">{work.title}</h2>
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

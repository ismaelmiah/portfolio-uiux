"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Project 1",
    imgUrl: "/images/work-1.png",
    projectUrl: "/images/work-1.png",
  },
  {
    id: 2,
    title: "Project 2",
    imgUrl: "/images/works-2.png",
    projectUrl: "/images/work-2.png",
  },
  {
    id: 3,
    title: "Project 3",
    imgUrl: "/images/work-3.png",
    projectUrl: "/images/work-3.png",
  },
  {
    id: 4,
    title: "Project 4",
    imgUrl: "/images/work-3.png",
    projectUrl: "/images/work-4.png",
  },
];

const WorksGallery = () => {
  return (
    <section className="custom-container mt-5">
      <div className="rounded-2xl bg-[#131a29] border border-[var(--color-tertiary)]">
      <h3 className="text-base font-semibold md:hidden p-5">Works Gallery</h3>
        <div className="hidden md:flex justify-between items-center p-5 pb-3">
          <h3 className="text-lg font-semibold text-[#9BA1A6]">Works</h3>
          <Link href="/works" className="text-[#3833D7] text-base underline">
            View All
          </Link>
        </div>
        <div className="relative">
        <div className="overflow-hidden">
            <div
              className="flex flex-col md:flex-row"
            >
              {works.map((work) => (
                <div key={work.id} onClick={() => location.replace(work.projectUrl)} className={`cursor-pointer flex flex-col flex-shrink-0 w-full md:w-3/12 p-3 ${work.id == 1 ? 'md:pl-0' : ''} ${work.id == works.length ? 'md:pr-0' : ''}`}>
                  <div className="w-full h-56 md:h-64 relative">
                    <Image src={work.imgUrl} alt={work.title} className="rounded-xl" layout="fill" objectFit="cover" />
                  </div>
                  <p className="m-2 text-base text-[#9BA1A6] text-center">
                    {work.title}
                  </p>
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

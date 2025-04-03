"use client"

import Marquee from "react-fast-marquee";
import { ScrollButton, ScrollCard } from "./ScrollCard";
import scrollBg from "@/assets/scrollBg.svg?url";
import Image from "next/image";

const ExploreCurriculum = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden">
      <Image src={scrollBg} alt="Background" layout="fill" objectFit="cover" />
      <div className="container z-10 flex flex-1 flex-col items-center justify-between">
        <div className="mt-16 text-center font-['Nunito'] text-4xl font-black capitalize leading-[60px] text-white">
          Explore Our Curriculum
        </div>

        <div className="small-scroll mt-10">
          <div className="relative h-20 w-full justify-between overflow-hidden">
            <Marquee pauseOnHover={true} direction="right" speed={100}>
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
            </Marquee>
          </div>
          <div className="relative h-20 w-full justify-between overflow-hidden">
            <Marquee pauseOnHover={true} direction="left" speed={100}>
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
              <ScrollButton />
            </Marquee>
          </div>
          <div className="scroll mt-20 justify-between">
            <Marquee>
              <ScrollCard />
              <ScrollCard />
              <ScrollCard />
              <ScrollCard />
            </Marquee>
          </div>
        </div>

        {/* Center-bottom button with relative positioning */}
        <div className="relative mb-10 mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
          <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
            <div className="text-center font-['Nunito'] text-lg font-black leading-normal text-white">
              See All
            </div>
            <div className="relative h-5 w-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCurriculum;

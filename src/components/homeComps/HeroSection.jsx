"use client";

import Button from "@/components/miniComps/Button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-4 mt-16 grid grid-cols-1 gap-6 md:mx-8 md:mt-24 md:pt-10 lg:mx-20 lg:mt-20 lg:grid-cols-2">
      <div className="maintext flex flex-col">
        <div className="max-w-full font-Nunito text-3xl font-black leading-tight text-slate-700 sm:text-4xl md:leading-snug lg:text-5xl lg:leading-[60px]">
          Empower Your Child with Essential Life Skills for the Digital Age.
        </div>
        <div className="mb-4 mt-2 max-w-full font-['Nunito'] text-base font-bold text-stone-500 sm:text-lg">
          Interactive, Activity based modules designed to foster emotional
          intelligence, resilience, and social skills in children.
        </div>
        <Button
          href="/survey"
          text="Start Your Child's Journey"
          icon="star"
          fullWidth
          className="max-w-xs"
          textSize="text-md"
        />
      </div>
      <div className="relative mx-auto h-64 w-full max-w-full overflow-hidden rounded-[20px] bg-slate-700 sm:h-80 md:h-96 lg:h-96 lg:max-w-[634px]">
        <iframe
          src="https://www.youtube.com/embed/IDGiY6r2HOw?autoplay=1&rel=0"
          className="absolute left-0 top-0 h-full w-full"
          allow="autoplay"
          allowFullScreen
          preload
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;

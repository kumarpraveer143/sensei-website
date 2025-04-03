
import React from "react";
import Background from "@/components/miniComps/BackGround.jsx";
import Image from "next/image";
import Flower from "@/assets/flower.svg";
import personality from "@/assets/personality.png";
import heromobile from "@/assets/mobileHero.png";
import tic from "@/assets/tick.svg?url";
import google from "@/assets/google.svg?url";
import Whatsapp from "@/assets/whatsapp.svg";
import userround from "@/assets/user-round.svg?url";
import bgtopo from "@/assets/bgtopo.svg?url";
import TypingAni from "@/components/miniComps/TypingAni";
import { Herotexts } from "@/utils/data";
import HeroImageAny from "./HeroImageAny";
import FreeActivityBtn from "@/components/activityComps/FreeActivityBtn";
import Magic from "@/assets/magic.svg" ;

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 mx-20 mt-20">
        <div className="maintext">
          <div className="w-[618px] justify-center text-slate-700 text-5xl font-black font-['Nunito'] leading-[60px]">
            Empower Your Child with Essential Life Skills for the Digital Age.
          </div>
          <div className="w-[618px] justify-center text-stone-500 text-lg font-bold font-['Nunito'] mt-2 mb-4">
            Interactive, Activity based modules designed to foster emotional
            intelligence, resilience, and social skills in children.
          </div>
          <div className="w-72 px-5 py-3.5 bg-amber-500 rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)] inline-flex flex-col justify-center items-start">
            <div className="self-stretch relative inline-flex justify-end items-center gap-2">
              <div className="text-center justify-start text-white text-md font-black font-['Nunito'] leading-snug">
                Start Your Child’s Journey
              </div>
              <Magic />
            </div>
          </div>
        </div>
        <div className="w-[634px] h-96 relative bg-slate-700 rounded-[30px] overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/IDGiY6r2HOw?autoplay=1&rel=0"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
  );
};

export default HeroSection;

"use client"

import Image from "next/image";
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/image2.jpg";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.jpg";
import BrainIcon from "@/assets/brainIcon.svg?url";
import BlockIcon from "@/assets/blockIcon.svg?url";
import BulbIcon from "@/assets/bulbIcon.svg?url";
import TargetIcon from "@/assets/targetIcon.svg?url";

const WhatIsSenseiSection = () => {
  return (
    <>
      <div className="mt-10 flex justify-center items-center w-full">
        <div className="w-[853px] inline-flex flex-col justify-start items-center gap-4">
          <div className="text-center justify-center text-amber-500 text-2xl font-bold font-['Nunito'] uppercase leading-loose">
            What is sensei
          </div>
          <div className="text-center justify-center text-slate-700 text-4xl font-black font-['Nunito'] capitalize leading-10">
            Building the Skills That Matter Beyond Academics
          </div>
          <div className="w-[743px] text-center justify-center text-stone-500 text-lg font-bold font-['Nunito'] leading-loose">
            Sensei is an innovative learning platform dedicated to nurturing
            your child’s emotional and social development through engaging,
            AI-driven, gamified modules.
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center mt-20">
        <div className="grid grid-cols-2 gap-10 max-w-6xl">
          {/* Row 1 */}
          <div className="w-[529.52px] h-[517.63px] relative">
            <Image src={Image1} alt="img" />
          </div>
          <div className="w-96 flex flex-col justify-center items-start gap-2">
            <Image src={BrainIcon} alt="icon" className="w-14 h-14" />
            <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10">
              Psychologist-Backed Curriculum
            </div>
            <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose">
              Expert-validated, research-backed modules crafted to develop life
              skills, ethical reasoning, and emotional well-being in a
              structured, engaging way.
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-96 flex flex-col justify-center items-start gap-2">
            <Image src={BlockIcon} alt="icon" className="w-14 h-14" />
            <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10">
              DIY Activities with Gamified Engagement
            </div>
            <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose">
              Interactive (DIY), reward-driven activities transform screen time
              into engaging, hands-on experiences that foster emotional growth
              and essential life skills.
            </div>
          </div>
          <div className="w-[529.52px] h-[517.63px] relative">
            <Image src={Image2} alt="img" />
          </div>

          {/* Row 3 */}
          <div className="w-[529.52px] h-[517.63px] relative">
            <Image src={Image3} alt="img" />
          </div>
          <div className="w-96 inline-flex flex-col justify-center items-start gap-2">
            <Image src={BulbIcon} alt="icon" />
            <div className="self-stretch justify-center text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10">
              AI-Driven Personalized SEL
            </div>
            <div className="self-stretch justify-center text-stone-500 text-lg font-bold font-['Nunito'] leading-loose">
              Leverages advanced psychometric modeling to pinpoint each child&apos;s
              strengths and growth areas, delivering personalized activities
              that nurture essential SEL competencies.
            </div>
          </div>

          {/* Row 4 */}
          <div className="inline-flex flex-col justify-center items-start gap-2">
            <Image src={TargetIcon} alt="icon" />
            <div className="justify-center text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10">
              Early Detection & Intervention
            </div>
            <div className="self-stretch justify-center text-stone-500 text-lg font-bold font-['Nunito'] leading-loose">
              Monthly behavioral assessments uncover hidden emotional challenges
              early, enabling timely support and personalized growth strategies.
            </div>
          </div>
          <div className="w-[529.52px] h-[517.63px] relative">
            <Image src={Image4} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsSenseiSection;

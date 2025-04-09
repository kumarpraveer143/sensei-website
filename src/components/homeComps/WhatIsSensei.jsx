import Image from "next/image";
import Image1 from "@/assets/image1.svg?url";
import Image2 from "@/assets/image2.svg?url";
import Image3 from "@/assets/image3.svg?url";
import Image4 from "@/assets/image4.svg?url";
import BrainIcon from "@/assets/brainIcon.svg?url";
import BlockIcon from "@/assets/blockIcon.svg?url";
import BulbIcon from "@/assets/bulbIcon.svg?url";
import TargetIcon from "@/assets/targetIcon.svg?url";
import ExploreCurriculum from "./ExploreCurriculum";

const WhatIsSenseiSection = () => {
  return (
    <>
      <div className="mt-10 flex justify-center items-center w-full px-4">
        <div className="w-full max-w-5xl inline-flex flex-col justify-start items-center gap-4">
          <div className="text-center justify-center text-[#ff8b13] text-2xl font-bold font-['Nunito'] uppercase leading-loose">
            What is sensei
          </div>
          <div className="text-center justify-center text-slate-700 text-4xl font-black font-['Nunito'] capitalize leading-10 px-4">
            Building the Skills That Matter Beyond Academics
          </div>
          <div className="w-full max-w-3xl text-center justify-center text-stone-500 text-lg font-bold font-['Nunito'] leading-loose px-4">
            Sensei is an innovative learning platform dedicated to nurturing
            your child&apos;s emotional and social development through engaging,
            AI-driven, gamified modules.
          </div>
        </div>
      </div>
      <ExploreCurriculum />
      <div className="w-full flex justify-center items-center mt-20 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 w-full max-w-6xl">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 order-1 md:order-2">
              <Image src={BrainIcon} alt="icon" className="w-14 h-14" />
              <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10 text-center md:text-left">
                Psychologist-Backed Curriculum
              </div>
              <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose text-center md:text-left">
                Expert-validated, research-backed modules crafted to develop life
                skills, ethical reasoning, and emotional well-being in a
                structured, engaging way.
              </div>
            </div>
            <div className="w-full flex justify-center order-2 md:order-1">
              <div className="w-full max-w-md">
                <Image src={Image1} alt="img" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 order-1">
              <Image src={BlockIcon} alt="icon" className="w-14 h-14" />
              <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10 text-center md:text-left">
                DIY Activities with Gamified Engagement
              </div>
              <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose text-center md:text-left">
                Interactive (DIY), reward-driven activities transform screen time
                into engaging, hands-on experiences that foster emotional growth
                and essential life skills.
              </div>
            </div>
            <div className="w-full flex justify-center order-2">
              <div className="w-full max-w-md">
                <Image src={Image2} alt="img" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 order-1 md:order-2">
              <Image src={BulbIcon} alt="icon" className="w-14 h-14" />
              <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10 text-center md:text-left">
                AI-Driven Personalized SEL
              </div>
              <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose text-center md:text-left">
                Leverages advanced psychometric modeling to pinpoint each child&apos;s
                strengths and growth areas, delivering personalized activities
                that nurture essential SEL competencies.
              </div>
            </div>
            <div className="w-full flex justify-center order-2 md:order-1">
              <div className="w-full max-w-md">
                <Image src={Image3} alt="img" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-2 order-1">
              <Image src={TargetIcon} alt="icon" className="w-14 h-14" />
              <div className="text-zinc-800 text-3xl font-black font-['Nunito'] capitalize leading-10 text-center md:text-left">
                Early Detection & Intervention
              </div>
              <div className="text-stone-500 text-lg font-bold font-['Nunito'] leading-loose text-center md:text-left">
                Monthly behavioral assessments uncover hidden emotional challenges
                early, enabling timely support and personalized growth strategies.
              </div>
            </div>
            <div className="w-full flex justify-center order-2">
              <div className="w-full max-w-md">
                <Image src={Image4} alt="img" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsSenseiSection;
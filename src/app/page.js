
import FAQS from "@/components/homeComps/FAQS";
import Footer from "@/components/Footer";
import GetStarted from "@/components/homeComps/GetStarted";
import Journey from "@/components/homeComps/Journey";

import Comments from "../components/homeComps/Comments";
import HeroSection from "../components/homeComps/HeroSection";
import Rating from "@/components/homeComps/Rating";
import WhatIsSenseiSection from "@/components/homeComps/WhatIsSensei";
import ExploreCurriculum from "@/components/homeComps/ExploreCurriculum";

export default function Home() {
  return (
    <div className="mt-3 bbg-[#FEF5F3] flex flex-col gap-20 overflow-x-hidden pb-20 md:gap-40 md:pb-40">
      <HeroSection />
      <Rating />
      <WhatIsSenseiSection />
      <ExploreCurriculum />
      <Comments />
      <GetStarted />
      <Journey />
      <FAQS />
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className="w-screen h-screen">
//       <HeroSectionUpdated />
//     </div>
//   )
// }
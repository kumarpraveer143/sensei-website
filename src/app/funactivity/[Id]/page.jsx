"use client"
import React, { useEffect, useState } from "react";
import EmotionNav from "@/components/activityComps/EmotionNav";
import Intro from "@/components/activityComps/Intro";
import Navbar from "@/components/Modules/Navbar";
import Process from "@/components/activityComps/Process";
import BackToTop from "@/components/activityComps/BackToTop";
import Bookm from "@/components/activityComps/bookm";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/Images/introbg.svg?url";
import Print from "@/components/miniComps/Print";
// import { gamifiedActivities, interactivieActivities } from "@/utils/data";
export const Home = ({ params: { Id } }) => {
  const [activities, setactivities] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/submodules/${Id}`,
        );
        setactivities(await response.json());
        console.log(await response.json());
        
      } catch (error) {
        console.log(error, "error vachindi ra");
      }
    };
    fetchData();
  },[]);

  // console.log(activities);
  return (
    <div
      style={{
        backgroundImage: `url(${introbg.src})`,
        backgroundSize: "cover",
      }}
      className="container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
    >
      {/* <Print data={activities} /> */}
      {/* <Print data={interactivieActivities} /> */}
      <EmotionNav name={activities?.subModuleName} />
      <div className="flex w-full flex-col gap-10 md:px-24 px-6 py-24">
        {!!activities?.interactiveActivities?.length && (
          <div className="nmd:max-w-[45%] flex flex-col gap-4">
            <h4 className="h4 text-left uppercase text-black">
              Interactive Activities
            </h4>

            <div className="flex gap-4 overflow-x-scroll">
              {activities?.interactiveActivities?.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        )}
        {!!activities?.digitalActivities?.length && (
          <div className="nmd:max-w-[45%] flex flex-col gap-4">
            <h4 className="h4 text-left uppercase text-black">
              Gamified Activities
            </h4>

            <div className="flex gap-4 overflow-x-scroll">
              {activities?.digitalActivities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* <Intro />
      <Process />
      <BackToTop />
      <Bookm />  */}
    </div>
  );
};
export default Home;

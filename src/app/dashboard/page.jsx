"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import addchild from "@/Images/addchild.png";
import Subject from "@/components/Modules/Subject";
import Background1 from "@/components/miniComps/BackGround.jsx";
import { getSubColour } from "@/utils/logic";
import Activities from "@/components/Modules/Activities";
import axios from "axios";
import { useSession } from "next-auth/react";

const UserDashboard = () => {
  const { data: session, status } = useSession();
  const [modules, setModules] = useState([]);
  const [colours, setColours] = useState({});
  const [locked, setLocked] = useState(true);
  const [subjectId, setSubjectId] = useState(0);
  const [subjectData, setSubjectData] = useState([]);
  const [customUserData, setCustomUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjectData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (status === "loading") return; // Wait until session is loaded
      
      if (status === "unauthenticated") {
        throw new Error("User not authenticated");
      }

      console.log("Fetching subject data...");
      const email = session?.user?.email;
      if (!email) throw new Error("No email found in session");

      // Try to get user-specific data first
      try {
        const res = await axios.get(`/parent-users/getPricingPlan?email=${email}`);
        console.log("Pricing plan response:", res?.data);
        
        if (res?.data?.subjects) {
          setSubjectData(res.data.subjects);
          setCustomUserData(true);
          setLocked(false);
          setModules(res.data.subjects[0]?.modules || []);
          setColours(getSubColour(res.data.subjects[0]?.subject?.subjectName || ""));

          // console.log("\n\n")   //debug
          // console.log(subjectData)    //debug
          // console.log(customUserData)   //debug
          // console.log(locked)   //debug
          // console.log(modules)    //debug
          // console.log(colours)    //debug
          // console.log("\n\n")   //debug
          return;
        }
      } catch (userDataError) {
        console.log("No user-specific data found, falling back to general subjects");
      }

      // Fallback to general subjects if no user-specific data

      const res = await axios.get("/subjects");
      // console.log("Subjects response:", res?.data);
      
      if (res?.data) {
        setSubjectData(res.data);
        setLocked(true);
        setModules(res.data[0]?.modules || []);
        setColours(getSubColour(res.data[0]?.subjectName || ""));
      }
    } catch (error) {
      console.error("Error fetching subject data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const selectModule = (sid) => {
    setSubjectId(sid);
    setModules(subjectData[sid]?.modules || []);
    const col = getSubColour(subjectData[sid]?.subject?.subjectName || subjectData[sid]?.subjectName || "");
    setColours(col);
    
    // Update UI for selected subject
    document.querySelectorAll(".subject").forEach(element => {
      // element.style.filter = "saturate(0%)";
    });
    const selectedElement = document.getElementById(`subject-${sid}`);
    if (selectedElement) {
      // selectedElement.style.filter = "saturate(100%)";
    }
  };

  useEffect(() => {
    fetchSubjectData();
  }, [status, session]);

  if (status === "loading" || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated" || error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl text-red-500">
          {error || "Please sign in to access this page"}
        </div>
      </div>
    );
  }

  return (
    <div className="hh-screen container relative mx-auto flex w-fit flex-col items-center gap-10 from-gray-200 to-white p-4 py-10 sm:py-20">
      <Background1 />
      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        <div className="flex flex-col items-start gap-1 py-4">
          <p className="h4 text-grey_1">Hello!</p>
          <Link className="no-underline" href="/familypage">
            <p className="h3 font-bold text-black">
              {session?.user?.name?.split(" ")[0]}
            </p>
          </Link>
          <p className="body-1 text-grey_1">
            Let&apos;s start your journey to a brighter future.
          </p>
        </div>
        <div className="relative h-fit max-w-[min(650px,90vw)] rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-4 shadow-lg">
          <h1 className="h3 mb-4 w-[80%] text-left font-Nunito font-bold text-white">
            Teach your kid the Life-skill education they need.{" "}
          </h1>
          <Link
            href={"/child-details"}
            className="mr-auto flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-2 px-4 font-Nunito text-base font-bold text-black md:px-8 md:py-6 md:text-xl"
          >
            Enroll at Rs.99{" "}
          </Link>
          <Image
            src={addchild}
            alt="addchild"
            sizes="auto"
            className="absolute -right-5 bottom-0 -z-[0] max-h-full max-w-[min(298px,50%)] object-contain"
          />
        </div>
      </div>
      <div className="flex w-full gap-10">
        {subjectData?.length > 0 ? (
          <div className="flex grow flex-col">
            <h4 className="h4 px-4 text-left uppercase text-black">
              Subjects
            </h4>
            <div className="scrollbar flex w-full flex-col gap-5 px-4 sm:h-[500px] sm:overflow-y-auto">
              {subjectData.map((item, i) => (
                <React.Fragment key={i}>
                  <Subject
                    id={`subject-${i}`}
                    subject={item}
                    selected={i === subjectId}
                    action={() => selectModule(i)}
                  />
                  {i === subjectId && (
                    <Activities
                      customUserData={customUserData}
                      locked={locked}
                      hidden={"sm:hidden"}
                      colours={colours}
                      modules={modules}
                      subjectId={item.subjectId}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center py-10">
            <p className="text-lg">No subjects available</p>
          </div>
        )}
        {modules.length > 0 && (
          <Activities
            customUserData={customUserData}
            locked={locked}
            hidden={"max-sm:hidden"}
            colours={colours}
            modules={modules}
            subjectId={subjectData[subjectId]?.subjectId || ""}
          />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
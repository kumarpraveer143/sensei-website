"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [plan, setPlan] = useState("");
  const [childName, setChildName] = useState("");

  const selectModule = (sid) => {
    setSubjectId(sid);
    setModules(subjectData[sid]?.modules || []);
    const col = getSubColour(
      subjectData[sid]?.subject?.subjectName ||
        subjectData[sid]?.subjectName ||
        "",
    );
    setColours(col);
  };

  const fetchSubjectData = async () => {
    setLoading(true);
    setError(null);

    try {
      if (status === "loading") return; 

      if (status === "unauthenticated") {
        throw new Error("User not authenticated");
      }

      console.log("Fetching subject data...");
      const email = session?.user?.email;
      if (!email) throw new Error("No email found in session");

      //get user-specific data
      let hasUserData = false;
      try {
        const res = await axios.get(
          `/parent-users/getPricingPlan?email=${email}`,
        );
        console.log("User data response:", res.data);
        
        if(res.data?.pricingPlan) {
          if(res.data.pricingPlan.name === "No active plan found for this user."){
            setPlan("Upgrade Now!");
          } else {
            setPlan(res.data.pricingPlan.name);
          }
        }
        
        if(res.data.childName){
          setChildName(res.data.childName);
        } else {
          setChildName(session?.user?.name || "User");
        }

        // Check for subjects in res.data.pricingPlan.subjects
        if (res?.data?.pricingPlan?.subjects && res.data.pricingPlan.subjects.length > 0) {
          console.log("Setting user-specific subjects from pricingPlan:", res.data.pricingPlan.subjects);
          setSubjectData(res.data.pricingPlan.subjects);
          setCustomUserData(true);
          setLocked(false);
          setModules(res.data.pricingPlan.subjects[0]?.modules || []);
          setColours(
            getSubColour(res.data.pricingPlan.subjects[0]?.subject?.subjectName || ""),
          );
          hasUserData = true;
        }
      } catch (userDataError) {
        console.error("Error fetching user-specific data:", userDataError);
      }
      
      // If no user-specific subjects, fetch general subjects
      if (!hasUserData) {
        try {
          console.log("Fetching general subjects");
          const res = await axios.get("/subjects");
          console.log("General subjects response:", res?.data);

          if (res?.data && res.data.length > 0) {
            console.log("Setting general subjects:", res.data);
            setSubjectData(res.data);
            setLocked(true);
            setModules(res.data[0]?.modules || []);
            setColours(getSubColour(res.data[0]?.subjectName || ""));
          } else {
            console.log("No general subjects found in response");
          }
        } catch (generalSubjectsError) {
          console.error("Error fetching general subjects:", generalSubjectsError);
          throw new Error("Failed to fetch any subject data");
        }
      }
      
    } catch (error) {
      console.error("Error in fetchSubjectData:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjectData();
  }, [status, session]);

  // Debug logging for subject data changes
  // useEffect(() => {
  //   console.log("Updated subjectData:", subjectData);
  // }, [subjectData]);

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
    <div className="h-screen container relative mx-auto flex w-fit flex-col items-center gap-10 from-gray-200 to-white p-4 py-10 sm:py-20 my-4 md:my-8 mb-4">
      <Background1 />
      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        <div className="flex flex-col items-start gap-1 py-4">
          <p className="h4 text-grey_1">Hello!</p>
          <Link className="no-underline" href="/familypage">
            <p className="h3 font-bold capitalize text-[#2C3D68]">
              {childName}
            </p>
          </Link>
          <p className="body-1 text-grey_1">
            Let&apos;s start your journey to a brighter future.
          </p>
          <div className="active-button inline-flex items-center justify-start gap-4 self-stretch">
            <div className="justify-start font-['Nunito'] text-2xl font-semibold text-[#2C3D68]">
              {plan}
            </div>
            {plan !== "Upgrade Now!" ? (
              <div className="inline-flex flex-col items-start justify-center gap-2 overflow-hidden rounded-lg bg-green-100 px-2 py-[3px]">
                <div className="inline-flex items-center justify-center gap-[5px] self-stretch overflow-hidden">
                  <div className="relative h-3 w-3 overflow-hidden">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="z-10"
                    >
                      <circle cx="6" cy="6" r="4" fill="#3AA176" />
                    </svg>
                  </div>
                  <div className="justify-start text-center font-['Inter'] text-sm font-medium leading-tight text-green-500">
                    Active
                  </div>
                </div>
              </div>
            ) : null}
          </div>
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
            src={"/images/addchild.png"}
            width={298}
            height={298}
            alt="addchild"
            sizes="auto"
            className="absolute -right-5 bottom-0 -z-[0] max-h-full max-w-[min(298px,50%)] object-contain"
          />
        </div>
      </div>
      <div className="flex w-full gap-10">
        {subjectData && subjectData.length > 0 ? (
          <div className="flex grow flex-col">
            <h4 className="h4 px-4 text-left uppercase text-black">Subjects</h4>
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
                      subjectId={item.subjectId || item.subject?.subjectId}
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
            subjectId={
              subjectData[subjectId]?.subjectId ||
              subjectData[subjectId]?.subject?.subjectId ||
              ""
            }
          />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
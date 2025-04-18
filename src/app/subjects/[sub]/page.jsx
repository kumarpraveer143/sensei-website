"use client";
import { useState } from "react";
// import Image from "next/image";

import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
import { notFound } from "next/navigation";
import { SubjectSection } from "@/components/SubjectSection";

const Page = ({ params: { sub } }) => {
  const subject = subjects.find((s) => slug(s?.slug || s?.title) === sub);
  if (!subject) return notFound();

  return (
    <div className="container mx-auto p-4 py-10 md:py-20 xl:max-w-[1300px]">
      <SubjectSection sub={sub} />
      <div className="md:mt-25 mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {subject.concerns.map((concern, index) => (
          <SubjectCard key={index} concern={concern} />
        ))}
      </div>
    </div>
  );
};

const SubjectCard = ({ concern }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-6 flex h-full w-full flex-col rounded-[20px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)]">
      {/* Header section - fixed height */}
      <div className="p-4">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          {/* <Image src={concern.icon} alt={concern.title} width={40} height={40} className="w-10 h-10" /> */}
          <h1 className="justify-start font-Nunito text-xl font-extrabold text-[#ff8b13] md:text-2xl">
            {concern.title}
          </h1>
        </div>
        
        {/* Description section - fixed height with ellipsis for overflow */}
        <div className="h-24 overflow-hidden relative mb-2">
          <p className="text-sm text-gray-700 md:text-base">
            {concern.description}
          </p>
          {!expanded && <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>}
        </div>
      </div>
      
      {/* Expandable content - only visible when expanded */}
      {expanded && (
        <div className="px-4 pb-4">
          {concern.subdevision?.map((s, index) => (
            <div key={index} className="mb-4 flex flex-col gap-2">
              {s.title && (
                <p className="text-sm font-semibold md:text-base">{s.title}</p>
              )}
              {s.description && (
                <p className="font-Nunito text-sm font-medium text-neutral-400 md:text-base">
                  {s.description}
                </p>
              )}
              <ul className="ml-3 list-inside list-disc md:ml-5">
                {s.subpoints?.map((p, index) => (
                  <li key={index} className="mb-1 text-sm md:text-base">
                    {p.title && <span className="font-medium">{p.title}: </span>}
                    {p.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {/* Button section - fixed at bottom */}
      <div className="mt-auto border-t border-neutral-200 p-4">
        <div
          onClick={toggleExpand}
          className="flex items-center gap-2 text-sm font-medium text-[#ff8b13] hover:cursor-pointer"
        >
          {expanded ? "Show Less" : "Read More"}
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
          >
            <path
              d="M11.75 3.75L18 10M18 10L11.75 16.25M18 10H3"
              stroke="#FF8B13"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page;

// const Description = ({ className, concern }) => {
//   // console.log(concern);
//   return (
//     <div
//       className={
//         className +
//         " scrollbar h5 flex max-h-[658px] grow flex-col gap-3 overflow-y-scroll rounded-[10px] bg-white p-5 text-primary shadow-cs sm:max-h-[408px] sm:w-1/2 lg:p-10"
//       }
//     >
//       {/* <p>{concern?.title}</p> */}
//       <p>{concern?.description}</p>
//       {concern?.subdevision?.map((s, index) => (
//         <div key={index} className="flex-flex-col gap-2">
//           {s?.title && <p>{s?.title}: </p>}
//           <p>{s?.description}</p>
//           <ul className="llist-inside ml-3 list-disc md:ml-5">
//             {s?.subpoints?.map((p, index) => (
//               <li key={index} className="h5">
//                 {p?.title && p?.title + ": "}
//                 {p?.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       {/* <p>Preventive Measures for {concern?.title} :</p>
//     <ul className="llist-inside ml-3 flex list-disc flex-col gap-1 md:ml-5">
//       {concern?.preventions.map((s, index) => (
//         <li key={index} className="h5">
//           {s?.title && <h6>{s?.title} :</h6>}
//           <h6>{s?.description}</h6>
//         </li>
//       ))}
//     </ul>
//     {concern?.conclusion && (
//       <>
//         <p>Conclusion :</p>
//         <p>{concern?.conclusion}</p>
//       </>
//     )} */}
//     </div>
//   );
// };

"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const ArticlesSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-10">
      <div className="justify-center self-stretch text-center font-Nunito text-4xl font-black capitalize leading-10 text-[#2c3d68]">
        For Principal, Educator & Parent
      </div>
      <Carousel>
        <ArcticlesCard />
        <ArcticlesCard />
        <ArcticlesCard />   
        <ArcticlesCard />
      </Carousel>
    </div>
  );
};

const ArcticlesCard = () => {
  return (
    <div className="inline-flex w-96 flex-col items-start justify-center gap-4 overflow-hidden rounded-[20px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)]">
      <Image
        className="h-60 self-stretch rounded-2xl"
        src={"https://placehold.co/358x238"}
        alt="Article"
        width={358}
        height={238}
      />
      <div className="flex h-full flex-col items-start justify-start gap-2 self-stretch">
        <div className="justify-start self-stretch font-['Nunito'] text-lg font-extrabold text-amber-500">
          Education News
        </div>
        <div className="justify-start self-stretch font-['Nunito'] text-2xl font-extrabold text-neutral-900">
          23% kids have mental wellness issue
        </div>
        <div className="h-full justify-start self-stretch font-['Nunito'] text-base font-medium text-neutral-400">
          Studies indicate a substantial percentage of children and adolescents
          struggle with mental health problems, with some research suggesting
          23% of school children in India have mental health issue
        </div>
        <div className="mt-2 inline-flex items-center justify-start gap-4">
          <Image
            className="h-9 w-9 rounded-[30px] outline outline-2 outline-amber-500"
            src={"https://placehold.co/36x36"}
            alt="Author"
            width={36}
            height={36}
          />
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="justify-start font-['Nunito'] text-base font-bold text-slate-700">
              Indian Journal of Psychiatry
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-between border-t border-neutral-200 py-2">
        <div className="inline-flex flex-col items-start justify-center gap-2 overflow-hidden rounded-lg px-1">
          <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
            <div className="justify-center text-center font-['Nunito'] text-base font-bold leading-normal text-amber-500">
              Learn more
            </div>
            <div className="relative h-5 w-5 overflow-hidden">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 4.00586L17.5 10.2559M17.5 10.2559L11.25 16.5059M17.5 10.2559H2.5"
                  stroke="#FF8B13"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="flex h-8 w-8 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-[3px] py-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.21721 9.24703C4.83295 8.60993 4.096 8.17894 3.25 8.17894C2.00736 8.17894 1 9.10881 1 10.2559C1 11.4029 2.00736 12.3328 3.25 12.3328C4.096 12.3328 4.83295 11.9018 5.21721 11.2647M5.21721 9.24703C5.39737 9.54573 5.5 9.88973 5.5 10.2559C5.5 10.622 5.39737 10.966 5.21721 11.2647M5.21721 9.24703L14.7828 4.34161M5.21721 11.2647L14.7828 16.1701M14.7828 16.1701C14.6026 16.4688 14.5 16.8128 14.5 17.1789C14.5 18.326 15.5074 19.2559 16.75 19.2559C17.9926 19.2559 19 18.326 19 17.1789C19 16.0319 17.9926 15.102 16.75 15.102C15.904 15.102 15.1671 15.533 14.7828 16.1701ZM14.7828 4.34161C15.1671 4.97871 15.904 5.40971 16.75 5.40971C17.9926 5.40971 19 4.47984 19 3.33278C19 2.18573 17.9926 1.25586 16.75 1.25586C15.5074 1.25586 14.5 2.18573 14.5 3.33278C14.5 3.69891 14.6026 4.04291 14.7828 4.34161Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex h-8 w-8 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-[5px] py-[3px]">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5933 1.57827C15.6939 1.706 16.5 2.65486 16.5 3.76285V19.2559L9 15.5059L1.5 19.2559V3.76285C1.5 2.65486 2.30608 1.706 3.40668 1.57827C5.24156 1.36532 7.108 1.25586 9 1.25586C10.892 1.25586 12.7584 1.36533 14.5933 1.57827Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};



export const Carousel = ({ children }) => {
  const [curr, setCurr] = useState(0);
  const slideInterval = useRef(null);

  const startInterval = () => {
    slideInterval.current = setInterval(next, 5000);
  };

  const stopInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const prev = () => {
    stopInterval();
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    startInterval();
  };

  const next = () => {
    stopInterval();
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Carousel Container */}
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Positioned Below */}
      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
        >
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.25"
              cx="31"
              cy="31"
              r="31"
              transform="matrix(-1 0 0 1 62 0)"
              fill="#FF8B13"
            />
            <path
              d="M35.6793 43.2832L23.3962 31.0002L35.6793 18.7172"
              stroke="#FF8B13"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50"
        >
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.25" cx="31" cy="31" r="31" fill="#FF8B13" />
            <path
              d="M26.3207 43.2832L38.6038 31.0002L26.3207 18.7172"
              stroke="#FF8B13"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
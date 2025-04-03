import Image from "next/image";
import CardImage from "@/assets/scrollAssets/cardImage.svg?url";
import BookIcon from "@/assets/scrollAssets/bookIcon.svg?url";

export const ScrollCard = () => {
  return (
    <div className="mx-6 self-stretch inline-flex flex-col">
      <Image src={CardImage} alt="card-image" />
      <div className="self-stretch p-3.5 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-1.5">
        <div className="justify-start text-neutral-500 text-xs font-semibold font-['Nunito']">
          5-7 years
        </div>
        <div className="justify-start text-neutral-500 text-xs font-semibold font-['Nunito']">
          546
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="justify-start text-neutral-900 text-base font-bold font-['Nunito']">
            Emotions Charades
          </div>
          <div className="text-right justify-start text-amber-500 text-xs font-bold font-['Nunito_Sans'] uppercase leading-none">
            30 mins
          </div>
        </div>
        <div className="self-stretch p-[5px] bg-orange-100 rounded-md shadow-[0px_2px_5px_0px_rgba(0,0,0,0.12)] inline-flex justify-between items-center">
          <div className="p-[5px] rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex flex-col justify-center items-start">
            <div className="self-stretch justify-start text-amber-500 text-xs font-black font-['Nunito'] leading-none">
              120+
            </div>
            <div className="justify-start text-black text-[10px] font-medium font-['Nunito'] leading-3">
              Interactive Activity
            </div>
          </div>
          <div className="p-[5px] rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex flex-col justify-center items-start">
            <div className="justify-start text-amber-500 text-xs font-black font-['Nunito'] leading-none">
              12+
            </div>
            <div className="justify-start text-black text-[10px] font-medium font-['Nunito'] leading-3">
              Gamified Activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ScrollButton = () => {
  return (
    <div className="mx-3 w-80 pl-10 pr-6 py-2 bg-white rounded-[58px] outline outline-[3px] outline-offset-[-3px] outline-amber-500 backdrop-blur-[1px] inline-flex justify-start items-center gap-3">
      <Image src={BookIcon} alt="book" className="w-12 h-12" />
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
        <div className="inline-flex justify-center items-center gap-1">
          <div className="w-6 h-6 p-px rounded-[3px] flex justify-center items-center gap-1 overflow-hidden">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M9 4.10417V9.4375H13M17 9.4375C17 13.8558 13.4183 17.4375 9 17.4375C4.58172 17.4375 1 13.8558 1 9.4375C1 5.01922 4.58172 1.4375 9 1.4375C13.4183 1.4375 17 5.01922 17 9.4375Z"
                stroke="#FF8B13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="justify-start text-amber-500 text-sm font-extrabold font-['Nunito'] leading-none">
            30 Mins.
          </div>
        </div>
        <div className="justify-start text-slate-700 text-md font-extrabold font-['Nunito'] capitalize leading-snug">
          Understanding Emotions
        </div>
      </div>
    </div>
  );
};

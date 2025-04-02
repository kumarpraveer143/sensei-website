export const HeroSectionUpdated = () => {
  return (
    <>
      <div className="flex justify-between py-12 px-6">
        <div className="inline-flex flex-col items-start justify-start gap-4">
          <div className="w-[618px] justify-center font-['Nunito'] text-5xl font-black leading-[60px] text-slate-700">
            Empower Your Child with Essential Life Skills for the Digital Age.
          </div>
          <div className="w-[618px] justify-center font-['Nunito'] text-lg font-bold leading-loose text-stone-500">
            Interactive, AI-driven modules designed to foster emotional
            intelligence, resilience, and social skills in children.
          </div>
          <div className="flex flex-col items-start justify-center gap-2 overflow-hidden rounded-2xl bg-amber-500 px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
            <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
              <div className="justify-center text-center font-['Nunito'] text-lg font-black leading-snug text-white">
                Start Your Child’s Journey
              </div>
              <div className="relative h-5 w-5 overflow-hidden">
                <div className="absolute left-[2.50px] top-[3.75px] h-3 w-3.5 outline outline-[2.40px] outline-offset-[-1.20px] outline-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-[634px] h-96">
        <iframe src={"https://www.youtube.com/embed/IDGiY6r2HOw?autoplay=1&rel=0"}
            allow="autoplay"
            className=""></iframe>
        </div>
      </div>
    </>
  );
};

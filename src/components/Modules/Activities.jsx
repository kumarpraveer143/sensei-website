import { useState, useEffect } from "react";
import Varroww from "@/assets/varroww.svg";
import Lock from "@/assets/lock.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Print from "../miniComps/Print";
import Free from "@/assets/free.gif";
import Image from "next/image";

const Activities = ({ modules, hidden, colours, subjectId, locked, customUserData }) => {
  const [moduleId, setModuleId] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setSelectedModule(null);
    setModuleId(null);
  }, [modules]);

  const getSubModules = (id) => {
    setSelectedModule(id);
    setModuleId(id);
  };

  const toggle = (i) => {
    setSelectedModule(selectedModule === i ? null : i);
  };

  return (
    <div className={hidden + " sm:grow"}>
      <h4 className="h4 pb-4 text-left uppercase text-black">Modules</h4>
      <div
        style={{ background: colours?.innerSubjectDivColor }}
        className="animate-fade-in flex rounded-[10px] sm:w-[min(632px,100%)]"
      >
        {modules && modules.length ? (
          <ol className="body1_b flex h-[500px] w-full list-decimal flex-col gap-4 overflow-y-auto p-4 no-scrollbar">
            {modules.map((module, index) => {
              const isFreeModule = module.moduleId === "ff80818195387c6d0195387d8ce80001";
              const isDisabled = locked && !isFreeModule;
              const isActive = !isDisabled && selectedModule === index;
              
              return (
                <div
                  key={index}
                  className={`${isDisabled ? "text-grey_2" : "text-primary"} flex flex-col gap-2`}
                >
                  <button
                    onClick={() => !isDisabled && toggle(index)}
                    className={`flex w-full items-center rounded-2xl bg-white px-4 py-2 ${isDisabled ? "text-grey_2" : "text-primary"} md:gap-2`}
                    disabled={isDisabled}
                    aria-expanded={isActive}
                    aria-controls={`submodules-${index}`}
                  >
                    {isDisabled && (
                      <Lock className="mr-2 min-w-10 max-w-10 max-sm:min-w-7 max-sm:max-w-7" />
                    )}
                    <li className="list-inside pr-2">
                      {module.moduleName}
                    </li>
                    {!isDisabled && (
                      <>
                        {isFreeModule && (
                          <Image
                            src={Free}
                            alt="free"
                            width={40}
                            height={40}
                            className="mx-auto"
                          />
                        )}
                        <Varroww
                          className={`mr-1 w-2 transition-all sm:w-4 md:mr-4 ${
                            isActive ? "rotate-90" : "rotate-180"
                          }`}
                        />
                      </>
                    )}
                  </button>

                  {isActive && (
                    <ol 
                      id={`submodules-${index}`} 
                      className="flex list-decimal flex-col gap-2 w-full"
                    >
                      {module?.subModules?.map((subModule, subIndex) => (
                        <Link
                          href={`/funactivity/${subModule.subModuleId}`}
                          key={subIndex}
                          className="flex items-center justify-between gap-2 ml-12 rounded-2xl bg-white p-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-primary whitespace-normal break-words w-full">
                            {subModule.subModuleName}
                          </span>
                        </Link>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </ol>
        ) : (
          <span className="rw-full ounded-2xl block h-full bg-primary/20" />
        )}
      </div>
    </div>
  );
};

export default Activities;
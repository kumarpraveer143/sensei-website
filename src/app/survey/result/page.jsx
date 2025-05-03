"use client";
import React, { useState } from "react";

import Image from "next/image";
import { useLifeSkills } from "@/context/LifeSkillContext";
import { useRouter } from "next/navigation";

const Result = () => {
    const { getAllSkills } = useLifeSkills();
    const userSkills = getAllSkills();
    const [showFullResult, setShowFullResult] = useState(false);

    const allSkills = [
        "Decision Making", "Creativity", "Communication", "Coping with Emotions",
        "Stress Management", "Self-awareness", "Interpersonal Communication",
        "Empathy", "Problem Solving", "Critical Thinking"
    ];

    const router = useRouter();
    const strongSkills = allSkills.filter(skill => userSkills.includes(skill));
    const needAttentionSkills = allSkills.filter(skill => !userSkills.includes(skill));
    localStorage.setItem("SenseiNeedAttentionSkills", JSON.stringify(needAttentionSkills));
    localStorage.setItem("SenseiStrongSkills", JSON.stringify(strongSkills));
    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4 py-6">
            <div className=" bg-[#fdf5ef] w-full max-w-[848px] max-h-[95vh] h-auto rounded-2xl shadow-xl relative overflow-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* Close Button */}
            <button onClick={() => router.push("/")} className="absolute right-3 sm:top-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-800 shadow text-xl font-bold text-gray-700 hover:bg-gray-200 transition">
                ×
            </button>

            {/* Top Content: V-Stacked on Mobile */}
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start gap-10 mt-16 lg:mt-12">
                {/* Skills Section */}
                <div className="w-full max-w-md lg:max-w-sm transition-all duration-500">
                    <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                        Life-skills your child shows:
                    </h2>

                    {/* Legend */}
                    <div className="flex justify-center lg:justify-start items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-green-600"></span>
                            <span className="text-sm">Strong</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="text-sm">Need Attention</span>
                        </div>
                    </div>

                    {/* Skills Display */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                        {/* Strong */}
                        <div className="flex flex-col gap-2 items-start">
                            {strongSkills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1 h-6 bg-green-600 rounded"></div>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>

                        {/* Needs Attention */}
                        <div className={`flex flex-col gap-2 items-start transition-all duration-500 ${showFullResult ? 'opacity-100 blur-0' : 'opacity-95 blur-sm'}`}>
                            {needAttentionSkills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1 h-6 bg-red-400 rounded"></div>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="flex flex-col items-center gap-4">
                    <button
                        onClick={() => router.push("/login")}
                        className="bg-orange-500 text-white px-6 py-3 lg:mt-36 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-orange-600 transition"
                    >
                        {showFullResult ? 'Hide Results ❌' : 'View Full Results 🚀'}
                    </button>
                </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 w-full max-w-md rounded-xl shadow-md relative">
                    <div className="absolute top-[-20px] left-4 text-4xl text-orange-400">❝</div>
                    <p className="text-sm mb-6">
                        Sensei&apos;s activity-based learning modules are a fantastic addition to my classroom. The social-emotional learning focus is refreshing, and I&apos;ve seen a positive difference in how students interact with each other.
                    </p>
                    <div className="flex items-center gap-3">
                        <Image
                            src={"/images/Roma Kaushik.jpg"}
                            alt="Dr. Roma Kaushik"
                            className="w-10 h-10 rounded-full"
                            width={40}
                            height={40}
                        />
                        <div>
                            <div className="text-sm font-semibold text-blue-600">Dr. Roma Kaushik</div>
                            <div className="text-xs text-gray-500">Clinical Psychologist, Raipur</div>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 w-full max-w-md rounded-xl shadow-md relative">
                    <div className="absolute top-[-20px] left-4 text-4xl text-orange-400">❝</div>
                    <p className="text-sm mb-6">
                        As a practicing psychologist, I&apos;m impressed by Sensei&apos;s commitment to well-being. This can be a game changer for Indian parenting specially the introduction of SEL modules
                    </p>
                    <div className="flex items-center gap-3">
                        <Image
                            src={"/images/Bhamini Sachar.jpg"}
                            alt="Bhamini Sachar"
                            className="w-10 h-10 rounded-full"
                            width={40}
                            height={40}
                        />
                        <div>
                            <div className="text-sm font-semibold text-blue-600">Bhamini Sachar</div>
                            <div className="text-xs text-gray-500">Counselling Psychologist, Pune</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Result;
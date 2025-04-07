"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import DownArrow from "@/assets/varroww.svg";
import MainLogo from "@/assets/mainlogo.svg";
import User from "@/assets/user.svg";
import Logout from "@/assets/logoutnavbar.svg?url";
import Useraccount from "@/assets/useraccount.svg";
import { usePathname } from "next/navigation";
import { navLinks } from "@/utils/data";
import { useSession } from "next-auth/react";
// import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // let status = "authenticated";
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubjectDropdown = () => {
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
  };

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubjectDropdownOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-[#2C3C68] px-4 md:px-10">
        <div className="m-2 md:m-4">
          <Link href={"/"}>
            <MainLogo className="relative h-10 w-20 overflow-hidden text-white md:h-14 md:w-28" />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <ul className="m-6 inline-flex gap-6 font-['Nunito'] text-lg font-bold text-white">
            {navLinks.map((link) =>
              link.title === "Curriculum" ? (
                // Curriculum with dropdown
                <li key={link.index} className="group/sub relative">
                  <Link
                    href={link.link}
                    className={`${
                      pathname.startsWith(link.link) ? "text-primary" : ""
                    } button_text`}
                  >
                    {link.title}
                  </Link>

                  {/* Dropdown */}
                  <div className="flex max-h-0 flex-col overflow-hidden whitespace-nowrap rounded-lg bg-[#2C3D68] text-white transition-all group-hover/sub:max-h-fit group-hover/sub:p-2 min-[850px]:absolute">
                    {subjects.map((subject, index) => (
                      <Link
                        key={index}
                        href={`/subjects/${slug(subject.slug || subject.title)}`}
                        className={`px-2 py-2 ${
                          pathname.endsWith(slug(subject.slug || subject.title))
                            ? "text-primary"
                            : "hover:text-white"
                        }`}
                      >
                        {subject.title}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                // Other nav links
                <li key={link.index}>
                  <Link
                    href={link.link}
                    className={`${
                      pathname === link.link ? "text-primary" : ""
                    } button_text`}
                  >
                    {link.title}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="ml-2 block rounded-md bg-[#FF8B13] p-2 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop user section */}
        <div className="hidden md:block">
          {status === "authenticated" ? (
            <div className="flex items-center justify-between gap-2">
              <div className="relative flex items-center">
                <User className="mr-7 h-8 min-w-8 rounded-full bg-white p-1 text-[#FF8B13]" />
                <div className="group absolute left-7 flex align-middle">
                  <DownArrow className="m-4 h-4 -rotate-90 cursor-pointer text-primary transition-all group-hover:rotate-90" />
                  <div className="absolute -right-4 top-10 z-[100] hidden w-max flex-col gap-6 rounded-xl bg-[#FF8B13] md:bg-[#2C3D68] p-2 group-hover:flex md:px-4 md:py-3">
                    <Link
                      href={"/dashboard"}
                      className="flex w-full cursor-pointer items-center gap-5"
                    >
                      <Useraccount />
                      <h1 className="cursor-pointer text-lg text-white">
                        Dashboard
                      </h1>
                    </Link>
                    <div
                      onClick={() => signOut()}
                      className="flex w-full cursor-pointer items-center gap-5"
                    >
                      <Image src={Logout} alt="Logout" />
                      <h1 className="cursor-pointer text-lg text-white">
                        Logout
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="m-4 inline-flex flex-col items-start justify-center gap-2 overflow-hidden rounded-2xl bg-[#FF8B13] px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]"
            >
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                <div className="justify-center text-center font-['Nunito'] text-lg font-black leading-normal text-white">
                  Login
                </div>
                <svg
                  className="relative h-5 w-5 overflow-hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="heroicons-outline/arrow-right">
                    <path
                      id="Vector"
                      d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-[72px] z-50 w-full bg-[#FF8B13] md:hidden">
            <ul className="flex flex-col px-4 py-2 font-['Nunito'] text-lg font-bold text-white">
              {navLinks.map((link) =>
                link.title === "Curriculum" ? (
                  // Mobile Curriculum with dropdown
                  <li key={link.index} className="py-2">
                    <div
                      className={`flex items-center justify-between ${
                        pathname.startsWith(link.link) ? "text-primary" : ""
                      } cursor-pointer`}
                      onClick={toggleSubjectDropdown}
                    >
                      <span>{link.title}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          isSubjectDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Mobile Subjects Dropdown */}
                    {isSubjectDropdownOpen && (
                      <div className="mt-2 flex flex-col rounded-lg bg-[#2C3C68] pl-4">
                        {subjects.map((subject, index) => (
                          <Link
                            key={index}
                            href={`/subjects/${slug(subject.slug || subject.title)}`}
                            className={`px-2 py-2 ${
                              pathname.endsWith(
                                slug(subject.slug || subject.title),
                              )
                                ? "text-primary"
                                : ""
                            }`}
                            onClick={handleMobileLinkClick}
                          >
                            {subject.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  // Other mobile nav links
                  <li key={link.index} className="py-2">
                    <Link
                      href={link.link}
                      className={`${
                        pathname === link.link ? "text-primary" : ""
                      } block`}
                      onClick={handleMobileLinkClick}
                    >
                      {link.title}
                    </Link>
                  </li>
                ),
              )}

              {/* Mobile user section */}
              {status === "authenticated" ? (
                <>
                  <li className="border-t border-slate-600 py-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 py-2"
                      onClick={handleMobileLinkClick}
                    >
                      <Useraccount className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        signOut();
                        handleMobileLinkClick();
                      }}
                      className="flex w-full items-center gap-2 py-2 text-left"
                    >
                      <Image src={Logout} alt="Logout" width={20} height={20} />
                      <span>Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <li className="border-t border-slate-600 py-2">
                  <Link
                    href="/login"
                    className="flex items-center justify-between rounded-xl bg-amber-500 px-4 py-3 text-white"
                    onClick={handleMobileLinkClick}
                  >
                    <span className="font-black">Login</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

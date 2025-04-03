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
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  // let status = "authenticated";
  const [scrolled, setScrolled] = useState({ prev: 0, curr: 0 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (window.scrollY > 300) {
        setScrolled((pre) => {
          const updatedScrolled = { prev: pre.curr, curr: window.scrollY };
          return updatedScrolled;
        });
      } else {
        setScrolled({ prev: 0, curr: 0 });
      }
      //console.log(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav className="flex items-center justify-between bg-slate-700 px-4 md:px-10">
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
                  <div className="flex max-h-0 flex-col overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-white transition-all group-hover/sub:max-h-fit group-hover/sub:p-2 min-[850px]:absolute">
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
        {/* <button
          className="ml-2 block rounded-md bg-orange-500 p-2 md:hidden"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        {status === "authenticated" ? (
          <div className="flex items-center justify-between gap-2 max-md:ml-auto">
            <div className="relative flex items-center">
              <User className="mr-7 h-8 min-w-8 rounded-full bg-white p-1 text-[#FF8B13]" />
              <div className="group absolute left-7 flex align-middle">
                <DownArrow className="m-4 h-4 -rotate-90 cursor-pointer text-primary transition-all group-hover:rotate-90" />
                <div className="absolute -right-4 top-10 z-[100] hidden w-max flex-col gap-6 rounded-xl bg-[#26355A] p-2 group-hover:flex md:px-4 md:py-3">
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
            className="m-4 inline-flex hidden flex-col items-start justify-center gap-2 overflow-hidden rounded-2xl bg-amber-500 px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)] md:block"
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
      </nav>
    </>
  );
};

export default Navbar;

const NavbarNew = () => {};

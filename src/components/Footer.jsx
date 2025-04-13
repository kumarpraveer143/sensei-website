import React from "react";
import Image from "next/image";
import SenseiLogo from "@/assets/mainlogo.svg";
import Link from "next/link";
import minisaark from "@/assets/minisaark.svg?url";
import Msme from "@/assets/msme.svg?url";
import StartIndia from "@/assets/startIndia.svg";
import Mail from "@/assets/mail.svg";
import Location from "@/assets/location.svg";
import Phone from "@/assets/phone.svg";
import Stars from "@/assets/stars.svg?url";
import FooterImage from "@/assets/footerChild.svg?url";
import { navLinks } from "@/utils/data";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="">
      {/* CTA Section - Made responsive */}
      <div className="px-4 sm:px-6 md:ml-14 mt-12 mb-6 md:mb-2 md:mt-20 flex flex-col items-center sm:items-start justify-start gap-4 md:gap-6">
          <div className="w-full max-w-[501px] text-center sm:text-left font-Nunito text-3xl sm:text-4xl md:text-5xl font-black leading-tight md:leading-[60px] text-[#2c3d68]">
            Invest in Your Child&apos;s Future Today!
          </div>
        <Link href={"/login"}>
          <div className="group inline-flex mt-2 md:mt-8 h-12 sm:h-14 w-64 sm:w-80 items-center justify-start gap-2 rounded-2xl bg-[#ff8b13] px-4 sm:px-5 py-3 sm:py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
            <div className="justify-center text-center font-Nunito text-base sm:text-md md:text-lg font-black leading-snug text-white">
              Start Your Child&apos;s Journey
            </div>
            <div className="relative h-6 w-6 sm:h-8 sm:w-8 overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200"
              >
                <g id="hugeicons:ai-magic">
                  <path
                    id="Vector"
                    d="M13.3333 9.33333L12.6453 11.192C11.744 13.6293 11.2933 14.848 10.404 15.7373C9.51467 16.6267 8.296 17.0773 5.85867 17.9787L4 18.6667L5.85867 19.3547C8.296 20.256 9.51467 20.708 10.404 21.596C11.2933 22.484 11.744 23.704 12.6453 26.1413L13.3333 28L14.0213 26.1413C14.9227 23.704 15.3747 22.4853 16.2627 21.596C17.1507 20.7067 18.3707 20.256 20.808 19.3547L22.6667 18.6667L20.808 17.9787C18.3707 17.0773 17.152 16.6267 16.2627 15.7373C15.3733 14.848 14.9227 13.6293 14.0213 11.192L13.3333 9.33333ZM24 4L23.7053 4.796C23.3187 5.84133 23.1253 6.364 22.7453 6.744C22.364 7.12533 21.8413 7.31867 20.796 7.704L20 8L20.7973 8.29467C21.8413 8.68133 22.364 8.87467 22.744 9.25467C23.1253 9.636 23.3187 10.1587 23.704 11.204L24 12L24.2947 11.204C24.6813 10.1587 24.8747 9.636 25.2547 9.256C25.636 8.87467 26.1587 8.68133 27.204 8.296L28 8L27.2027 7.70533C26.1587 7.31867 25.636 7.12533 25.256 6.74533C24.8747 6.364 24.6813 5.84133 24.296 4.796L24 4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:fill-[#2C3D68] group-hover:stroke-[#2C3D68]"
                  />
                </g>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="footer-image flex items-center justify-center sm:justify-start">
        <Image
          src={FooterImage}
          alt="footer"
          className="-z-10 -mb-5 items-center justify-center md:-mb-14 md:ml-5"
        />
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-4 rounded-[calc(4vw)] bg-grad_1 p-4 text-xs font-normal text-slate-200 sm:flex-row sm:flex-nowrap sm:gap-10 md:rounded-b-none md:text-base lg:gap-20">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <Phone />
          </div>
          96659 52556
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <Mail />
          </div>
          connect@sensei.org.in
        </div>

        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <Location />
          </div>
          Pune, Maharastra
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#2C3D68] to-[#0764A7]">
        <div
          style={{
            backgroundImage: `url(${Stars.src})`,
          }}
          className="w-max-full rrounded-bl-none rrounded-[calc(4vw)] md:rrounded-t-none relative p-6 md:p-10 min-[1300px]:p-20"
        >
          <div className="flex flex-col justify-around gap-5 md:flex-row">
            <div className="flex flex-wrap justify-around gap-5 md:flex-col md:justify-between">
              <div className="flex grow items-center justify-around gap-2 md:gap-5 lg:gap-10">
                <div className="flex w-fit flex-col items-center">
                  <SenseiLogo className="w-fit text-white md:h-[70px] lg:h-[97px]" />
                  <p className="flex flex-wrap justify-center pt-0 text-xs text-white">
                    A product by &nbsp;
                    <Image
                      alt="minisaark"
                      className="relative"
                      src={minisaark}
                      sizes="auto"
                    />
                    <span>&nbsp;Edu. Pvt. Ltd.</span>
                  </p>
                </div>
                <h1 className="font-Nunito text-lg font-bold text-white sm:text-xl md:text-3xl lg:text-[42px]">
                  Life-Skills
                  <br />
                  Education
                </h1>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Image src={Msme} alt="msme" sizes="auto" />
                <StartIndia />
              </div>
            </div>
            <div className="-order-1 flex-grow-[.3] md:order-none">
              <div className="flex justify-around gap-10 text-sm md:justify-normal md:text-base lg:gap-20">
                <div className="text-md flex cursor-pointer flex-col gap-3 font-Nunito font-semibold text-white md:gap-4">
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.link}>
                      <h2>{link.title}</h2>
                    </Link>
                  ))}
                </div>
                <div className="text-md flex cursor-pointer flex-col gap-3 font-Nunito font-normal text-white md:gap-4">
                  <h2></h2>
                  <h2></h2>
                  <Link
                    href={
                      "https://www.facebook.com/people/Sensei/61550832106968/"
                    }
                  >
                    <h2>Facebook</h2>
                  </Link>
                  <Link href={"https://x.com/senseilifeskill"}>
                    <h2>Twitter</h2>
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/company/mr-sensei/?viewAsMember=true"
                    }
                  >
                    <h2>Linkedin</h2>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/the_sensei_community/"}
                  >
                    <h2>Instagram</h2>
                  </Link>
                </div>
              </div>
              <p className="mml-[10%] mx-auto mt-5 hidden basis-full font-Nunito text-xs font-light text-gray-300 md:block md:text-sm md:font-normal">
                © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <span className="mx-4 h-[1.5px] bg-gradient-to-r from-gray-500 via-white to-gray-500 md:hidden"></span>
            <p className="mx-auto basis-full font-Nunito text-xs font-light text-gray-300 md:hidden md:text-sm md:font-normal">
              © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
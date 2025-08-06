"use client";

import React from "react";
import Link from "next/link";

// You can extend this map with more icons as needed
const ICONS = {
  arrow: (
    <svg
      className="relative h-5 w-5 overflow-hidden transition-all duration-200"
      width="20"
      height="20"
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
  ),
  star: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-200"
    >
      <path
        className="group-hover:fill-[#2C3D68] group-hover:stroke-[#2C3D68]"
        d="M13.3333 9.33333L12.6453 11.192C11.744 13.6293 11.2933 14.848 10.404 15.7373C9.51467 16.6267 8.296 17.0773 5.85867 17.9787L4 18.6667L5.85867 19.3547C8.296 20.256 9.51467 20.708 10.404 21.596C11.2933 22.484 11.744 23.704 12.6453 26.1413L13.3333 28L14.0213 26.1413C14.9227 23.704 15.3747 22.4853 16.2627 21.596C17.1507 20.7067 18.3707 20.256 20.808 19.3547L22.6667 18.6667L20.808 17.9787C18.3707 17.0773 17.152 16.6267 16.2627 15.7373C15.3733 14.848 14.9227 13.6293 14.0213 11.192L13.3333 9.33333ZM24 4L23.7053 4.796C23.3187 5.84133 23.1253 6.364 22.7453 6.744C22.364 7.12533 21.8413 7.31867 20.796 7.704L20 8L20.7973 8.29467C21.8413 8.68133 22.364 8.87467 22.744 9.25467C23.1253 9.636 23.3187 10.1587 23.704 11.204L24 12L24.2947 11.204C24.6813 10.1587 24.8747 9.636 25.2547 9.256C25.636 8.87467 26.1587 8.68133 27.204 8.296L28 8L27.2027 7.70533C26.1587 7.31867 25.636 7.12533 25.256 6.74533C24.8747 6.364 24.6813 5.84133 24.296 4.796L24 4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/**
 * Reusable button component that can render either a <button> or a <Link>.
 *
 * Props:
 * - text: string (required) – Button label.
 * - href: string (optional) – If present, renders a Next.js <Link> instead of a <button>.
 * - icon: "arrow" | "star" | React.ReactNode – Icon to display on the right. Defaults to "arrow".
 * - className: string – Extra classes to append to the button container.
 * - fullWidth: boolean – Apply w-full utility for full-width buttons.
 * - ...rest: any – Additional props passed to the underlying element.
 */
const Button = ({
  text,
  href,
  icon = "arrow",
  className = "",
  fullWidth = false,
  textSize = "text-lg",
  ...rest
}) => {
  const baseClasses =
    "group inline-flex flex-col items-start justify-center rounded-2xl bg-[#FF8B13] px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]";

  const width = fullWidth ? "w-full" : "";
  const containerClasses = `${baseClasses} ${width} ${className}`.trim();

  const iconNode = React.isValidElement(icon) ? icon : ICONS[icon] || null;

  const content = (
    <div className="inline-flex items-center justify-between gap-2 self-stretch">
      <span className={`font-['Nunito'] font-black leading-snug text-white ${textSize}`}>
        {text}
      </span>
      {iconNode}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={containerClasses} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={containerClasses} {...rest}>
      {content}
    </button>
  );
};

export default Button;
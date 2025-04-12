"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";


// Carousel Component
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

// Testimonial Card Component
export const TestimonialCard = ({ content, name, title, imageSrc }) => {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow-md">
      <div className="top-0 absolute  size-12">
        <svg
          width="40"
          height="29"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-0 left-0"
        >
          <path
            d="M15.09 45.6615C13.6528 47.5282 12.072 48.6051 10.3474 48.8923C8.76655 49.1795 7.32941 48.8923 6.03599 48.0308C4.88628 47.1692 4.23956 45.8769 4.09585 44.1539C3.95213 42.4308 4.6707 40.5641 6.25156 38.5539C8.6947 35.5385 10.3474 32.4513 11.2097 29.2923C12.2157 25.9898 12.7187 23.0462 12.7187 20.4615L13.581 25.4154C9.55698 25.4154 6.25156 24.2667 3.66471 21.9692C1.22157 19.6718 0 16.5846 0 12.7077C0 8.97436 1.14971 5.95898 3.44914 3.66154C5.74856 1.22052 8.83841 0 12.7187 0C16.599 0 19.6888 1.3641 21.9882 4.09231C24.4314 6.67692 25.6529 10.5538 25.6529 15.7231C25.6529 18.7385 25.2937 21.9692 24.5751 25.4154C24.0002 28.718 22.9942 32.0923 21.5571 35.5385C20.12 38.9846 17.9642 42.359 15.09 45.6615ZM49.437 45.6615C47.9999 47.5282 46.419 48.6051 44.6945 48.8923C43.1136 49.1795 41.6765 48.8923 40.383 48.0308C39.2333 47.1692 38.5866 45.8769 38.4429 44.1539C38.2992 42.4308 39.0178 40.5641 40.5986 38.5539C43.0417 35.5385 44.6945 32.4513 45.5567 29.2923C46.5627 25.9898 47.0657 23.0462 47.0657 20.4615L47.928 25.4154C43.904 25.4154 40.5986 24.2667 38.0118 21.9692C35.5686 19.6718 34.3471 16.5846 34.3471 12.7077C34.3471 8.97436 35.4968 5.95898 37.7962 3.66154C40.0956 1.22052 43.1855 0 47.0657 0C50.946 0 54.0359 1.3641 56.3353 4.09231C58.7784 6.67692 60 10.5538 60 15.7231C60 18.7385 59.6407 21.9692 58.9221 25.4154C58.3473 28.718 57.3413 32.0923 55.9041 35.5385C54.467 38.9846 52.3113 42.359 49.437 45.6615Z"
            fill="url(#paint0_linear_749_4896)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_749_4896"
              x1="7.9125"
              y1="9.42308"
              x2="57.3265"
              y2="9.71887"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F8BF3B" />
              <stop offset="0.305" stop-color="#FF8B13" />
              <stop offset="1" stop-color="#EF5F3D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="aspect-square h-full w-full overflow-hidden rounded-xl bg-zinc-200">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={name}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between md:col-span-3">
          <div className="mb-4 font-['Nunito'] text-xl font-bold leading-relaxed text-neutral-900">
            {content}
          </div>

          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-amber-500">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div>
              <div className="font-Nunito text-lg font-bold text-slate-700">
                {name}
              </div>
              <div className="font-Nunito text-sm text-neutral-500">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample testimonial data
const testimonials = [
  {
    content:
      "Sensei's activity-based learning modules are a fantastic addition to my classroom. The social-emotional learning focus is refreshing, and I've seen a positive difference in how students interact with each other.",
    name: "Jane Smith",
    title: "Clinical Psychologist, Raipur",
    imageSrc: "/images/vercel.svg?", // Replace with your actual image path
  },
  {
    content:
      "The curriculum is well-structured and has helped my child develop critical thinking skills. I've noticed significant improvement in their problem-solving abilities.",
    name: "John Doe",
    title: "Parent, Mumbai",
    imageSrc: "/images/vercel.svg?", // Replace with your actual image path
  },
  {
    content:
      "As an educator, I appreciate the thoughtful approach to combining academic skills with emotional intelligence. It's exactly what today's children need.",
    name: "Dr. Priya Kumar",
    title: "Education Consultant, Delhi",
    imageSrc: "/images/vercel.svg?", // Replace with your actual image path
  },
];

// Main Testimonials Section Component
export const TestimonialsSection = () => {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="font-['Nunito'] text-4xl font-black capitalize text-[#2c3d68]">
          What Parents Say
        </h2>
      </div>

      <Carousel>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            content={testimonial.content}
            name={testimonial.name}
            title={testimonial.title}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;

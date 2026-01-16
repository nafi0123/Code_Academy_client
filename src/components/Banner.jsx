"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Elevate Your Coding Journey",
    highlight: "CodeNest",
    desc: "Build real projects, enhance your programming skills, and grow confidently.",
    bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    title: "Learn Modern",
    highlight: "Web Technologies",
    desc: "Master React, Next.js, MongoDB, and backend development.",
    bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Practice with",
    highlight: "Real Projects",
    desc: "Hands-on learning to prepare you for real-world jobs.",
    bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Join a Global",
    highlight: "Developer Community",
    desc: "Learn, share, and grow with passionate developers worldwide.",
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                {slide.title}
                <br />
                <span className="text-teal-400">{slide.highlight}</span>
              </h1>

              <p className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 mb-8">
                {slide.desc}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/allCourses"
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition transform hover:scale-105"
                >
                  Browse Courses
                </Link>

                <Link
                  href="/aboutUs"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full transition transform hover:scale-105 hover:bg-white hover:text-indigo-900"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-teal-400" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

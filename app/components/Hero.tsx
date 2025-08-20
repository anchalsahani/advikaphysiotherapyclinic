"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-start text-white px-6 overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Left aligned content */}
      <div className="relative z-10 text-left max-w-3xl pl-6 md:pl-20 -mt-16">
        {/* Heading + Tagline */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Transforming <span className="text-[#00e1ff]">Health</span>,<br />
            Restoring <span className="text-[#26ff00]">Lives</span>
          </h1>

          <div className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
            <Typewriter
              options={{
                strings: [
                  "Comprehensive care for every patient",
                  "Expert physiotherapy tailored to you",
                  "Rehabilitation that brings results",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-8 bg-[#0c332d] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all duration-300 transform hover:scale-105">
          Appointments
        </button>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const images = ["/hero.jpg", "/hero2.webp", "/hero3.webp"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookAppointment = () => {
    router.push("/booking");
  };

  return (
    <section className="relative h-screen flex items-center justify-start text-white px-6 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Physiotherapy clinic background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-4xl pl-6 md:pl-20 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-3xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Transforming{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#38b2ac]">
              Health
            </span>
            , Restoring{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] to-[#22c55e]">
              Lives
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="mt-4 text-lg md:text-2xl text-gray-100 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button
            onClick={handleBookAppointment}
            className="mt-8 bg-gradient-to-r from-[#16a34a] to-[#0c332d] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Floating Info Box */}
      <motion.div
        className="absolute top-20 right-10 bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        <p className="text-sm md:text-base text-gray-800 font-semibold">
          🩺 Trusted by 5,000+ Patients
        </p>
      </motion.div>
    </section>
  );
}

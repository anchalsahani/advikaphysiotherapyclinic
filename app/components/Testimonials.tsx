"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The doctor and atmosphere is very good. Doctor is doing good job with complete dedication. I earlier visited two more centers for my slip disc related pain issue but could get relax in my pain only here. Highly recommended.",
      name: "Mohit Agarwal",
      image: "/mohitaggarwal.png",
    },
    {
      quote:
        "Advika Physiotherapy Clinic is a one stop solution for all Physiotherapy treatments & Dr. Swati Sharma is expert in handling her patients with care & humbleness.",
      name: "Sandeep Mishra",
      image: "/sandeepmishra.png",
    },
    {
      quote:
        "Excellent experience at Advik Phyisotherpy Clinic. The physiotherapists is knowledgeable, friendly, and truly care about the patients' well-being. The facility is clean, modern, and well-equipped.",
      name: "Himansu Maheshwari",
      image: "/himanshumaheshwari.png",
    },
    {
      quote:
        "I recently had the pleasure of receiving treatment from Dr. Swati Sharma and I cannot recommend her highly enough.My mobility and discomfort have significantly improved thanks to her accurate and efficient hands-on approaches. In addition to her technical abilities, she possesses compassion and attentiveness, fostering a comforting and supporting environment. If you’re struggling with cervical pain, I highly recommend Dr. Swati Sharma.",
      name: "Prachi Malik",
      image: "/png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 2000); // 5s

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <section className="bg-[#f8f7f5] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-12">
          What our patients say
        </h2>

        {/* Testimonial Card with Animation */}
        <div className="relative h-[300px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute bg-white shadow-lg rounded-lg p-10 w-full"
            >
              <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                “{testimonials[current].quote}”
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonials[current].name}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-[#6d7a5d] hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-[#6d7a5d] hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
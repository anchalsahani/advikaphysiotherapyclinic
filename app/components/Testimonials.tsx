"use client";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Advika Clinic completely changed my life! After months of pain, their physiotherapists guided me with patience and care. I can finally move freely again.",
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "/person-1.webp",
    },
    {
      quote:
        "Their attention to detail and personal approach is unmatched. I felt supported every step of the way during my recovery journey.",
      name: "Rishika Verma",
      role: "Athlete",
      image: "/person-2.jpeg",
    },
    {
      quote:
        "The team not only treated my injury but also taught me exercises to prevent it from happening again. Truly holistic care.",
      name: "Anjali Mehta",
      role: "Teacher",
      image: "/person-3.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#f8f7f5] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-12">
          What our patients say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-lg p-10 relative transition-all duration-500">
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
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </div>
          </div>
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

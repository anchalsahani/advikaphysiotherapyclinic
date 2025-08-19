"use client";
import { useState } from "react";
import Image from "next/image";

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
        "Advika Physiotherapy Clinic is a one stop solution for all Physiotherapy treatments & Dr. Swati Sharma is expert in handling her patients with care & humbleness. I remember an instance when i had an intence back pain for so many days & when i approached her, despite she being so busy in shifting home took out necessary equipments from her packed luggage & given me the treatment & i got relief in few minutes, truley a patient centic approach for which i would always remember Dr. Swati.",
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

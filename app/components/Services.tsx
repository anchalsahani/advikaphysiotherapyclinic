"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Joint Pain",
      description:
        "Relieves stiffness, improves mobility, and reduces pain in affected joints.",
      icon: "/joint.svg",
    },
    {
      title: "Muscle Weakness",
      description:
        "Strengthens muscles through targeted exercises and rehabilitation.",
      icon: "/muscle.svg",
    },
    {
      title: "Paralysis treatment",
      description:
        "Restores movement and function with specialized physiotherapy techniques.",
      icon: "/paralysis.svg",
    },
    {
      title: "Bell's Palsy Treatment",
      description:
        "Improves facial muscle strength and coordination after nerve weakness.",
      icon: "/bells-palsy.png",
    },
    {
      title: "Cerebral Palsy Treatment",
      description:
        "Enhances mobility, balance, and daily function in children and adults.",
      icon: "/cerebral-palsy.svg",
    },
    {
      title: "Spinal Cord Injury Treatment",
      description:
        "Aids recovery, independence, and prevention of complications.",
      icon: "/spinalcord.svg",
    },
    {
      title: "Osteoarthritis Treatment",
      description:
        "Reduces pain, improves flexibility, and strengthens supporting muscles.",
      icon: "/arthritis.svg",
    },
    {
      title: "Post Operative Care",
      description:
        "Accelerates recovery, restores strength, and prevents stiffness after surgery.",
      icon: "/care.svg",
    },
    {
      title: "Stroke Physical Therapy",
      description:
        "Rebuilds movement, balance, and daily living skills after stroke.",
      icon: "/stroke.svg",
    },
  ];

  return (
    <section className="bg-[#f8f7f5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Subtitle */}
        <p className="text-sm tracking-widest text-gray-600 mb-3 uppercase">
          Try Today
        </p>

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-libertinus text-gray-900 mb-12">
          Exceptional Experience
        </h2>

        {/* Carousel */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {/* Duplicate list so it loops seamlessly */}
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white border-1 shadow-sm rounded-xl p-8 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 text-sm">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

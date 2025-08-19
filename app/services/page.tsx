"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaRunning,
  FaChild,
  FaWheelchair,
  FaUserMd,
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaHandHoldingMedical,
  FaCrutch,
} from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";

export default function ServicesPage() {
  const services = [
    {
      title: "Joint Pain Recovery",
      description:
        "Comprehensive rehabilitation programs designed to restore mobility, reduce pain, and help you return to daily activities after surgery.",
      icon: <FaUserMd className="text-5xl text-[#6d7a5d]" />,
      image: "/joint-pain.jpeg",
    },
    {
      title: "Muscle Rehabilitation",
      description:
        "Personalized physiotherapy treatments that target the root cause of pain to bring long-term relief and improved lifestyle.",
      icon: <FaHeartbeat className="text-5xl text-[#6d7a5d]" />,
      image: "/muscle-rehabilitation.jpeg",
    },
    {
      title: "Paralysis Recovery",
      description:
        "Specialized rehab sessions to improve strength, motor control, and independence after paralysis.",
      icon: <FaBrain className="text-5xl text-[#6d7a5d]" />,
      image: "/paralysis.png",
    },
    {
      title: "Bells Palsy Treatment",
      description:
        "Exercises and therapies designed to stimulate facial muscles and accelerate recovery from Bell’s Palsy.",
      icon: <MdSelfImprovement className="text-5xl text-[#6d7a5d]" />,
      image: "/bells-palsy.webp",
    },
    {
      title: "Cerebral Palsy Care",
      description:
        "Gentle care and mobility-focused therapies to support children with cerebral palsy in leading independent lives.",
      icon: <FaChild className="text-5xl text-[#6d7a5d]" />,
      image: "/cerebral-palsy.jpeg",
    },
    {
      title: "Spinal Cord Injury",
      description:
        "Targeted rehabilitation to restore function, build strength, and maximize mobility after spinal cord injuries.",
      icon: <FaWheelchair className="text-5xl text-[#6d7a5d]" />,
      image: "/spinal-cord.webp",
    },
    {
      title: "Osteoarthritis Management",
      description:
        "Holistic treatment plans to reduce pain, strengthen joints, and improve mobility for osteoarthritis patients.",
      icon: <FaBone className="text-5xl text-[#6d7a5d]" />,
      image: "/osteoarthritis.webp",
    },
    {
      title: "Post Operative Care",
      description:
        "Comprehensive recovery programs with guided exercises to ensure smooth healing after surgery.",
      icon: <FaHandHoldingMedical className="text-5xl text-[#6d7a5d]" />,
      image: "/post-operative.jpeg",
    },
    {
      title: "Stroke Physical Therapy",
      description:
        "Neurological physiotherapy to regain motor skills, balance, and confidence after a stroke.",
      icon: <FaCrutch className="text-5xl text-[#6d7a5d]" />,
      image: "/stroke.jpeg",
    },
  ];

  return (
    <main>
      <Navbar forceDark />

      {/* Hero Section */}
      <section className="bg-[#f8f7f5] pt-28 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-libertinus text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We provide specialized physiotherapy services designed to help you
          recover faster, move better, and live pain-free.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Content */}
              <div className="relative z-10 bg-white/90 group-hover:bg-black/60 transition duration-500 p-8 h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6d7a5d] text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-libertinus mb-6">
          Ready to start your recovery journey?
        </h2>
        <a
          href="/booking"
          className="inline-block px-8 py-4 rounded-full bg-white text-[#1f1f1d] text-lg font-medium hover:bg-gray-200 transition"
        >
          Book an Appointment
        </a>
      </section>

      <Footer />
    </main>
  );
}

"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaRunning,
  FaChild,
  FaWheelchair,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";

export default function ServicesPage() {
  const services = [
    {
      title: "Post-Surgery Recovery",
      description:
        "Comprehensive rehabilitation programs designed to restore mobility, reduce pain, and help you return to daily activities after surgery.",
      icon: <FaUserMd className="text-5xl text-[#6d7a5d]" />,
    },
    {
      title: "Chronic Pain Relief",
      description:
        "Personalized physiotherapy treatments that target the root cause of pain to bring long-term relief and improved lifestyle.",
      icon: <FaHeartbeat className="text-5xl text-[#6d7a5d]" />,
    },
    {
      title: "Sports Injury Rehab",
      description:
        "Specialized rehab sessions to get athletes back to peak performance safely and effectively.",
      icon: <FaRunning className="text-5xl text-[#6d7a5d]" />,
    },
    {
      title: "Postural Correction",
      description:
        "Exercises and therapies designed to improve posture, reduce strain, and prevent recurring issues.",
      icon: <MdSelfImprovement className="text-5xl text-[#6d7a5d]" />,
    },
    {
      title: "Geriatric Physiotherapy",
      description:
        "Gentle care and mobility-focused therapies to support the elderly in living independently and pain-free.",
      icon: <FaWheelchair className="text-5xl text-[#6d7a5d]" />,
    },
    {
      title: "Pediatric Physiotherapy",
      description:
        "Supportive treatment plans tailored for children to aid development and recovery from injuries.",
      icon: <FaChild className="text-5xl text-[#6d7a5d]" />,
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
              className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
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

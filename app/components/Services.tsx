import { GiBoneMace, GiFootprint } from "react-icons/gi";
import { FaSpa, FaRunning, FaUserMd } from "react-icons/fa"; // 👈 added FaUserMd

export default function Services() {
  const services = [
    {
      title: "Trauma recovery",
      description: "Sed do eiusmod tempor",
      icon: <GiBoneMace size={50} />,
    },
    {
      title: "Spinal treatment",
      description: "Sed do eiusmod tempor",
      icon: <FaSpa size={50} />,
    },
    {
      title: "Joint treatment",
      description: "Sed do eiusmod tempor",
      icon: <GiFootprint size={50} />,
    },
    {
      title: "Exercises",
      description: "Sed do eiusmod tempor",
      icon: <FaRunning size={50} />,
    },
    {
      title: "Counselling", // 👈 new service
      description: "Professional guidance & support",
      icon: <FaUserMd size={50} />, // 👈 doctor/counsellor icon
    },
  ];

  return (
    <section className="bg-[#f8f7f5] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Subtitle */}
        <p className="text-sm tracking-widest text-gray-600 mb-3 uppercase">
          Try Today
        </p>

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-libertinus text-gray-900 mb-12">
          Exceptional experience
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-1 p-8 hover:shadow-lg transition"
            >
              <div className="text-[#6d7a5d] flex justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

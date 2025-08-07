export default function ServiceList() {
  const services = [
    {
      number: "01",
      title: "Post-surgery recovery",
      description:
        "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis. Sed ut perspiciatis unde omnis iste natus error sit ut perspiciatis unde omnis iste natus.",
    },
    {
      number: "02",
      title: "Chronic pain relief",
      description:
        "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis. Sed ut perspiciatis unde omnis iste natus error sit ut perspiciatis unde omnis iste natus.",
    },
    {
      number: "03",
      title: "Sports injury rehab",
      description:
        "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis. Sed ut perspiciatis unde omnis iste natus error sit ut perspiciatis unde omnis iste natus.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-10 md:px-15">
        {/* Subtitle */}
        <p className="uppercase text-sm tracking-widest text-gray-600 mb-3">
          What we offer
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-15">
          Exceptional physiotherapy <br /> care for your wellness
        </h2>

        <hr className="border-gray-300 mb-12" />

        {/* Service Items */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-8 transition"
            >
              {/* Left - Number & Title */}
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-6xl font-extralight text-[#bfc2bb] transition-colors duration-300 group-hover:text-[#6d7a5d]">
                  {service.number}
                </span>
                <h3 className="text-3xl font-medium text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Right - Description + Arrow */}
              <div className="flex items-center justify-between md:w-2/3">
                <p className="text-gray-500 text-base leading-relaxed">
                  {service.description}
                </p>
                <button className="ml-4 w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-[#6d7a5d] hover:text-white transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

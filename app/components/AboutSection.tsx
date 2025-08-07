import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f7f5] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-stretch gap-12">
  {/* Left Content */}
  <div className="flex flex-col justify-between">
    <div>
      <p className="uppercase text-sm tracking-widest text-[#6d7a5d] mb-4">
        Physiotherapy
      </p>
      <h2 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-6 leading-tight">
        Excellence in care, <br /> delivered with pride
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Inde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam. Sed ut perspiciatis unde.
      </p>
    </div>

    {/* Bottom Image (aligned with right image base) */}
    <div className="relative w-full h-[250px] md:h-[300px] rounded overflow-hidden shadow-lg">
      <Image
        src="/about-2.webp"
        alt="Additional Physiotherapy"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Right Image */}
  <div className="relative w-full h-[500px] rounded overflow-hidden shadow-lg">
    <Image
      src="/about-1.avif"
      alt="Physiotherapy Session"
      fill
      className="object-cover"
    />
  </div>
</div>

    </section>
  );
}

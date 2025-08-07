import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
       <Image
  src="/hero.jpg"
  alt="Physiotherapy Session"
  fill
  className="object-cover z-0 animate-zoomIn"
  priority
/>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-20">
        <div className="max-w-3xl pt-30">
          <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight mb-7 mt-8">
            Physiotherapy for Rapid Recovery
          </h1>

          <button className="bg-[#0c332d] text-white px-6 py-2 rounded-full font-medium hover:bg-[black] transition">
            Appointments
          </button>
        </div>

        {/* Tagline bottom right */}
        <p className="absolute bottom-12 right-12 text-white text-sm md:text-base max-w-sm tracking-wide">
          WE’RE HERE TO HELP YOU MOVE BETTER, FEEL STRONGER, AND LIVE A PAIN-FREE LIFE.
        </p>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [state, setState] = useState<"top" | "hidden" | "scrolled">("top");

  useEffect(() => {
    if (forceDark) return;
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY < heroHeight * 0.3) {
        setState("top");
      } else if (scrollY >= heroHeight * 0.3 && scrollY < heroHeight * 0.9) {
        setState("hidden");
      } else {
        setState("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceDark]);

  const effectiveState = forceDark ? "scrolled" : state;

  // 🔥 Main nav links (white underline, shorter width)
  const linkClass =
    "relative w-fit inline-block text-white transition-all duration-300 hover:translate-x-1 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 " +
    "hover:after:w-[60%]";

  // 🎨 Dropdown links (light gray text + subtle underline)
  const dropdownLinkClass =
    "relative w-fit inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 " +
    "hover:after:w-[40%]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        effectiveState === "top"
          ? "bg-transparent opacity-100"
          : effectiveState === "hidden"
          ? "opacity-0 pointer-events-none"
          : "bg-[#245b52] shadow-md opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20 relative">
        {/* Logo (replaced text with logo.png) */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="Advika Physiotherapy Clinic Logo"
            width={120}   // adjust as needed
            height={50}   // adjust as needed
            priority
          />
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-10 font-normal text-lg text-white relative">
          {/* Home */}
          <li>
            import Link from 'next/link'
          <Link href="/">Home</Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <button className={linkClass}>Pages</button>

            <ul className="absolute left-0 mt-2 w-60 bg-[#0c332d] shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transform transition-all duration-200">
              {[
                { name: "Our Services", href: "/services" },
                { name: "Our Team", href: "/team" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Pricing", href: "/pricing" },
                { name: "Online Booking", href: "/booking" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`${dropdownLinkClass} block px-5 py-3`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Contact */}
          <li>
            <a href="/contact" className={linkClass}>
              Contact Us
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className="ml-6 px-6 py-2 rounded-full font-normal text-lg bg-[#0c332d] text-white hover:bg-white hover:text-[#1f1f1d] transition"
        >
          Let’s Talk
        </a>
      </div>
    </nav>
  );
}

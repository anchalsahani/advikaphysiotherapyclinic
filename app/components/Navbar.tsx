"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const linkClass =
    "relative w-fit inline-block text-white transition-all duration-300 hover:translate-x-1 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 " +
    "hover:after:w-[60%]";

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
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20 relative">
        {/* 🔥 LOGO SECTION WITH OVERLAPPING IMAGES */}
        <Link href="/" className="flex items-center relative">
  <div className="relative w-[200px] h-[130px] ml-4">
    {/* First logo */}
    <Image
      src="/logo9.png"
      alt="Advika Physiotherapy Clinic Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>


        {/* 🔗 Navigation Links */}
        <ul className="hidden md:flex gap-10 font-normal text-lg text-white relative">
          <li>
            <Link href="/" className={linkClass}>
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <span className={linkClass}>Pages</span>
            <ul className="absolute left-0 mt-2 w-60 bg-[#0c332d] shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transform transition-all duration-200">
              {[
                { name: "Our Services", href: "/services" },
                { name: "Our Team", href: "/team" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Pricing", href: "/pricing" },
                { name: "Online Booking", href: "/booking" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`${dropdownLinkClass} block px-5 py-3`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/contact" className={linkClass}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="ml-6 px-6 py-2 rounded-full font-normal text-lg bg-[#0c332d] text-white hover:bg-white hover:text-[#1f1f1d] transition"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}

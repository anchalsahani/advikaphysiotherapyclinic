export default function Footer() {
  return (
    <footer className="bg-[#245b52] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline + Map */}
        <div>
          <h2 className="text-2xl font-libertinus text-white mb-3">Advika</h2>
          <p className="text-sm text-gray-400 mb-4">
            Helping you move better, recover faster, and live pain‑free.
          </p>

          {/* Google Map */}
          <div className="w-full h-40 md:h-56 rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5684061131738!2d77.4210811!3d28.7025545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1cf52a6bbf5%3A0x6f22d64d1b688621!2sAdvika%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1754459893909!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Our Team", href: "/team" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Pricing", href: "/pricing" },
            { name: "Online Booking", href: "/booking" },
            { name: "Contact", href: "/contact" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="w-fit border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Subscribe Form + Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates on new services, offers, and health tips.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B7B64]"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-[#0c332d] text-white font-medium hover:bg-[#000] transition"
            >
              Subscribe
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              📍 C-56, Main Road, Raj Nagar Extension,  
              Ghaziabad, Uttar Pradesh 201017
            </p>
            <p>
              📞 <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </p>
            <p>
              ✉️ <a href="mailto:info@advikaclinic.com" className="hover:text-white">info@advikaclinic.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Advika. All rights reserved.
      </div>
    </footer>
  );
}


export default function ContactPage() {
  return (
    <main>
      {/* Contact Hero Section */}
      <section className="bg-[#f8f7f5] py-25 text-center">
        <h1 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with Advika Physiotherapy Clinic for appointments, inquiries, or guidance.  
          We’re here to help you recover faster and live pain‑free.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
          <p className="text-gray-600 mb-4">
            Fill the form or reach us via phone/email. We’ll get back to you quickly.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li><strong>📍 Address:</strong> 123 Clinic Road, New Delhi</li>
            <li><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li><strong>✉️ Email:</strong> support@advika.com</li>
          </ul>
        </div>

        {/* Right - Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0c332d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#000000] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

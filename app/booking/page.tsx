"use client";
import { motion } from "framer-motion";

export default function BookingPage() {
  return (
    <main className="pt-20 bg-[#f8f7f5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f8f7f5] to-[#e9f4f0] py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.05, color: "#16a34a" }}
        >
          Book an Appointment
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
        >
          Schedule your consultation at Advika Physiotherapy Clinic. 
          Select your service, choose a time, and we’ll confirm your appointment instantly.
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background for the form */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d0f0eb] to-[#ffffff] opacity-80"></div>

          {/* Form content */}
          <div className="relative bg-white/90 border border-gray-200 rounded-2xl p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Appointment Details
            </h2>

            <form className="space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                >
                  <option value="">-- Choose a Service --</option>
                  <option>Post-surgery Recovery</option>
                  <option>Chronic Pain Relief</option>
                  <option>Sports Injury Rehab</option>
                  <option>Physiotherapy Consultation</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                  />
                </div>
              </div>

              {/* Patient Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Any specific concerns or medical history..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c332d]"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#0c332d] text-white text-lg px-6 py-3 rounded-full font-semibold hover:bg-black transition"
                >
                  Confirm Booking
                </button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  You will receive a confirmation email/SMS after submission.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

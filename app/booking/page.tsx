import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingPage() {
  return (
    <main className="pt-20">
      <Navbar forceDark />

      {/* Hero Section */}
      <section className="bg-[#f8f7f5] py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-4">
          Online Booking
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book your appointment online with Advika Physiotherapy Clinic. Choose your service, preferred time, and we’ll take care of the rest.
        </p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <form className="space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Service</label>
              <select
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
              >
                <option>Post-surgery recovery</option>
                <option>Chronic pain relief</option>
                <option>Sports injury rehab</option>
                <option>Physiotherapy consultation</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Any specific concerns..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d7a5d]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0c332d] text-white px-6 py-3 rounded-full font-medium hover:bg-[black] transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

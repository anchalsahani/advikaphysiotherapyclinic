import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";
import Testimonials from "../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="pt-20"> {/* 👈 pushes content below navbar */}
      {/* Navbar always dark on this page */}
      <Navbar forceDark />

      {/* Testimonials Component */}
      <Testimonials />

      {/* Services List Section */}
      <ServiceList />

      {/* Footer */}
      <Footer />
    </main>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import ServiceList from "./components/ServiceList";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <ServiceList />
      <Testimonials />  
      <Footer />
    </main>
  );
}

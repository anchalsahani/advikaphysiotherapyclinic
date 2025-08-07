import Script from "next/script";

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
      {/* Crisp Chat Widget */}
      <Script
        strategy="afterInteractive"
        src="https://client.crisp.chat/l.js"
      />
      <Script
        id="crisp-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "https://advikaclinic.vercel.app/";
          `,
        }}
      />

      {/* Page Content */}
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

import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Chatbot from './components/ChatbotEnhanced'; 
=======

>>>>>>> b0ec4a38839502217801f09da946fe20b9eb8bd0
export const metadata = {
  title: "Physiotherapy Clinic",
  description: "Resurs Clone with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
=======

        {/* ✅ Navbar & Footer wrap every page */}
        <Navbar />
        {children}
        <Footer />
>>>>>>> b0ec4a38839502217801f09da946fe20b9eb8bd0
      </body>
    </html>
  );
}

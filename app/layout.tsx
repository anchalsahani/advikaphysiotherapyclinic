import "./globals.css";
import React from "react";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/ChatbotEnhanced";

export const metadata = {
  title: "Advika Physiotherapy Clinic",
  description: "Providing expert physiotherapy care with compassion and precision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

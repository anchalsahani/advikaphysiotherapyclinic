import "./globals.css";

export const metadata = {
  title: "Physiotherapy Clinic",
  description: "Resurs Clone with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

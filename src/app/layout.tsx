import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mshel Bricks & Machineries",
  description: "Building Foundations, Powering Progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          We'll wrap the entire application in a flex column layout.
          min-h-screen ensures the body takes at least the full viewport height.
        */}
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* Your Navbar component will always be at the top */}

          {/*
            This 'main' element will grow to take up all available space,
            effectively pushing the Footer to the bottom of the viewport.
          */}
          <main className="flex-grow">
            {children} {/* This is where your page-specific content will be rendered */}
          </main>

          <Footer /> {/* Your Footer component will always be at the bottom */}
        </div>
      </body>
    </html>
  );
}
// components/HeroSection.tsx

'use client';

import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-screen flex items-center justify-center bg-center bg-cover"
      // NOTE: Replace the below line with your actual hero image or video for production.
      style={{ backgroundImage: `url('/images/pngegg (1).png')` }} // Updated placeholder to a more descriptive name
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Block */}
      <div className="relative z-10 px-6 py-12 max-w-4xl mx-auto text-center">
        <h1
          className="text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-geist-sans)' }}
        >
          Building Foundations, Powering Progress.
        </h1>

        <p
          className="mt-6 text-gray-200 text-base md:text-lg lg:text-xl mb-8"
          style={{ fontFamily: 'var(--font-geist-sans)' }}
        >
          A proud subsidiary of Mshel Homes, delivering superior building materials and powerful equipment designed for durability and efficiency on every site across Nigeria.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
          {/* Primary CTA */}
          <Link
            href="/quote"
            className="bg-[#1e3c72] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 hover:bg-[#e89e1c] text-center"
          >
            Contact Us
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/products"
            className="border-2 border-[#e89e1c] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 hover:bg-[#e89e1c] hover:text-white text-center"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// components/VideoSection.tsx

'use client';

import React from 'react';
import Link from 'next/link';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Flexbox Container: Stacks on mobile, side-by-side on medium+ */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Video Block */}
          <div className="w-full md:w-3/5">
            <video
              className="w-full rounded-xl shadow-lg overflow-hidden"
              src="/images/construction-m.mp4"
              controls
              loop
              muted
              autoPlay
              playsInline
              poster="/images/video-thumbnail.jpg"
              aria-label="Mshel Bricks & Machineries Overview Video"
            >
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content Block */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2
              className="text-3xl font-bold tracking-tight text-[#1e3c72] sm:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Our Commitment to Quality & Innovation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Discover how Mshel Bricks & Machineries leverages cutting-edge technology and unparalleled expertise to deliver superior building materials and robust equipment that form the foundation of lasting structures across Nigeria.
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#1e3c72] rounded-full hover:bg-[#e89e1c] focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2 transition-colors duration-200"
            >
              Learn More About Our Values
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
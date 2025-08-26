'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

// TypeScript Interface for Partner Data
interface Partner {
  id: string;
  name: string;
  src: string; // Path to logo in public/images
  alt: string; // Descriptive alt text
  href?: string; // Optional link to partner website
}

// Props for the Partners Component
interface PartnersSectionProps {
  partners?: Partner[]; // Optional custom partners array
  useCarousel?: boolean; // Toggle between grid and carousel
  carouselSpeed?: number; // Animation duration in seconds
}

// Sample Partner Data (refined with realistic partners; replace with CMS/API data)
const defaultPartners: Partner[] = [
  {
    id: '1',
    name: 'Aiben Group',
    src: '/images/Aiben-Group-Logo.png',
    alt: 'Aiben Group Logo',
    href: 'https://aibenproperties.com',
  },
  {
    id: '2',
    name: 'Mshel Homes',
    src: '/images/MSHEL LOGO.png',
    alt: 'Mshel Homes Ltd Logo',
    href: 'https://mshelhomes.com',
  },
  {
    id: '3',
    name: 'Asogba Homes',
    src: '/images/Asogba.png',
    alt: 'Asogba Homes Logo',
  },
  {
    id: '4',
    name: 'SteelCore Industries',
    src: '/image/Mshel group.png',
    alt: 'SteelCore Industries Logo',
  },
  {
    id: '5',
    name: 'Green Haven Estates',
    src: '/images/Hutu Logo.png',
    alt: 'Green Haven Estates Logo',
  },
  {
    id: '6',
    name: 'MegaBuild Ltd',
    src: '/images/winford.png',
    alt: 'MegaBuild Ltd Logo',
  },
];

// Partners Section Component
const PartnersSection: FC<PartnersSectionProps> = ({
  partners = defaultPartners,
  useCarousel = false,
  carouselSpeed = 20,
}) => {
  // Duplicate partners for seamless infinite carousel
  const carouselPartners = useCarousel ? [...partners, ...partners] : partners;

  return (
    <section
      className="bg-gray-50 py-16 md:py-20"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2
            id="partners-heading"
            className="text-3xl font-bold tracking-tight text-[#1e3c72] sm:text-4xl"
          >
            Our Valued Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional quality in blocks and machineries for projects across Nigeria.
          </p>
        </div>

        {/* Grid or Carousel */}
        {useCarousel ? (
          <div className="overflow-hidden">
            <div
              className="flex animate-marquee"
              style={{ animationDuration: `${carouselSpeed}s` }}
            >
              {carouselPartners.map((partner) => (
                <div
                  key={`${partner.id}-carousel`}
                  className="flex-shrink-0 mx-6"
                >
                  <div
                    className="bg-white p-4 rounded-lg shadow-md opacity-80 hover:opacity-100 hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={140}
                      height={70}
                      className="h-14 w-auto object-contain"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" // Base64 placeholder
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-4 rounded-lg shadow-md opacity-80 hover:opacity-100 hover:shadow-xl transition-all duration-300 flex justify-center items-center"
              >
                {partner.href ? (
                  <Link
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={140}
                      height={70}
                      className="h-14 w-auto object-contain"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={140}
                    height={70}
                    className="h-14 w-auto object-contain"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CSS for Carousel Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
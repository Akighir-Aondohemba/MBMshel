'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Award, Factory, Shield, Truck } from 'lucide-react';

// TypeScript Interfaces
interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Certification {
  id: string;
  name: string;
  src: string;
  alt: string;
}

// Sample Data (refined for professionalism)
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Arc, Barka Umar Mshelia',
    title: 'GMD',
    bio: 'With over 7 years in the construction industry, Dr.Barka leads Mshel with a focus on innovation, quality, and sustainable growth.',
    imageSrc: '/images/gmd.jpg',
  },
  {
    id: '2',
    name: 'Jighjigh Kuku',
    title: 'General Manager',
    bio: 'Jighjigh oversees seamless production and logistics, ensuring efficiency and reliability in every delivery.',
    imageSrc: '/images/Blocks-mgn.jpg',
  },
  {
    id: '3',
    name: 'Emeka Nwosu',
    title: 'Chief Engineer',
    bio: 'Emeka spearheads machinery design and development, emphasizing durability, precision, and cutting-edge technology.',
    imageSrc: '/images/team/emeka-nwosu.jpg',
  },
];

const coreValues: CoreValue[] = [
  {
    id: '1',
    title: 'Quality',
    description: 'We commit to producing durable, high-standard blocks and machineries that stand the test of time.',
    icon: Shield,
  },
  {
    id: '2',
    title: 'Innovation',
    description: 'We pioneer advanced manufacturing techniques to enhance efficiency and performance.',
    icon: Factory,
  },
  {
    id: '3',
    title: 'Customer Focus',
    description: 'We prioritize your needs, delivering tailored solutions that drive project success.',
    icon: Truck,
  },
  {
    id: '4',
    title: 'Integrity',
    description: 'We build trust through transparency, ethical practices, and unwavering reliability.',
    icon: Award,
  },
];

const certifications: Certification[] = [
  {
    id: '1',
    name: 'ISO 9001',
    src: '/images/certifications/iso-9001.png',
    alt: 'ISO 9001 Certification Logo',
  },
  {
    id: '2',
    name: 'NIS Compliant',
    src: '/images/certifications/nis.png',
    alt: 'Nigerian Industrial Standards Logo',
  },
  {
    id: '3',
    name: 'SON Certified',
    src: '/images/certifications/son.png',
    alt: 'Standards Organisation of Nigeria Logo',
  },
];

const AboutPage: FC = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-[#1e3c72] text-white py-24 sm:py-32"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/footerimage.jpg" // Professional construction/machinery background
            alt="Mshel Blocks & Machineries facility overview"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3c72]/70" /> {/* Overlay for contrast */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Empowering Construction with Excellence and Innovation
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At Mshel Blocks & Machineries, we deliver robust solutions that form the backbone of enduring structures, blending superior craftsmanship with forward-thinking technology.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
                Our Journey
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                A proud subsidiary of the Mshel Homes, Mshel Blocks and Machinery Limited is positioned at the heart of construction excellence in Nigeria. Established to provide superior building materials and advanced equipment solutions, we ensure durability, precision, and efficiency on every site. Through its two divisions, Block Production and Machinery Leasing,  we deliver consistent value by supplying premium-grade blocks and reliable, high-performance equipment. From residential to large-scale commercial projects, Mshel Blocks and Machinery Limited powers developments with innovation, reliability, and quality, reinforcing the Mshel Homes legacy of credibility while setting new benchmarks in construction standards nationwide.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
              <Image
                src="/images/on-scaffolding-bricklayer.jpg" // Timeline or facility evolution image
                alt="Evolution of Mshel Blocks & Machineries facility"
                fill
                className="object-cover rounded-xl shadow-lg"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72] text-center mb-12">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-4">Mission</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Delivering top-quality blocks and reliable construction machinery that drive efficiency, durability, and value for our clients.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-4">Vision</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                To become the highest producer of quality block and construction machinery solutions in Nigeria.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-3 lg:col-span-1">
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-4">Core Values</h3>
              <ul className="space-y-4">
                {coreValues.map((value) => (
                  <li key={value.id} className="flex items-start gap-3">
                    <value.icon className="h-6 w-6 text-[#e89e1c] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#1e3c72]">{value.title}</span>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leaders are dedicated to driving excellence and innovation in every aspect of our operations at Mshel Blocks & Machinery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name}, ${member.title} at Mshel Blocks & Machineries`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1e3c72] text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">{member.title}</p>
                <p className="mt-2 text-base text-gray-600 text-center leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to uncompromising quality, advanced technology, and reliable delivery defines every aspect of Mshel Blocks & Machinery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Factory className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Advanced Technology</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Utilizing cutting-edge machinery for precise, efficient production that meets modern demands.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Uncompromising Quality</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Every block and machine from Mshel Blocks & Machineries is crafted to deliver reliability. Precision in production, attention to detail, and adherence to global benchmarks ensure materials and equipment that strengthen structures, inspire confidence, and withstand the demands of time and environment
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Truck className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Sustainability</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Through our innovative production methods and resource-conscious practices, sustainability is integrated into every stage of our operations. The focus remains on reducing environmental impact, advancing greener construction solutions, and developing materials that strike a balance between durability and responsibility for future generations.
              </p>
            </article>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-[#1e3c72]">
              4+ Years of Excellence | 500+ Projects Delivered | 95% Client Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              Certifications & Affiliations
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Backed by recognised certifications that uphold excellence and credibility across every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex justify-center items-center"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
                />
              </div>
            ))}
          </div>
        </div>
      </section>
 </main>
  );
};

export default AboutPage;
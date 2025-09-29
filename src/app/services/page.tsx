'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Factory, Shield, Truck, Wrench } from 'lucide-react';

// TypeScript Interfaces
interface Service {
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

// Sample Data (tailored for services)
const services: Service[] = [
  {
    id: '1',
    title: 'Block Manufacturing',
    description: 'We produce high-density, eco-friendly blocks using advanced techniques for superior strength and sustainability in construction projects.',
    icon: Factory,
  },
  {
    id: '2',
    title: 'Machinery Design & Production',
    description: 'Custom-engineered machineries that optimize production efficiency, with durable components and innovative automation features.',
    icon: Wrench,
  },
  {
    id: '3',
    title: 'Installation & Maintenance',
    description: 'Expert installation services and ongoing maintenance to ensure your equipment operates at peak performance with minimal downtime.',
    icon: Truck,
  },
  {
    id: '4',
    title: 'Consulting & Customization',
    description: 'Tailored consultations to design solutions that meet your specific needs, backed by our expertise in materials and machinery.',
    icon: Shield,
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

const ServicesPage: FC = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-[#1e3c72] text-white py-24 sm:py-32"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/footerimage.jpg" // Relevant machinery/block production background
            alt="Mshel Blocks & Machineries service operations"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3c72]/70" /> {/* Overlay for contrast */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Delivering Comprehensive Services with Precision and Reliability
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We provide advanced block production and dependable machinery leasing, ensuring every project is supported with accuracy, efficiency, and lasting strength
          </p>
        </div>
      </section>

      {/* Our Services Introduction */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
                Our Service Excellence
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
               Every service reflects a dedication to precision, reliability, and uncompromising quality. Durable blocks and well-maintained machinery are delivered to ensure construction projects achieve lasting value, efficiency, and trusted performance at every stage of construction.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
              <Image
                src="/images/Cats.jpg" // Image of service in action
                alt="Mshel services in operation"
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

      {/* Core Services Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72] text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <service.icon className="h-8 w-8 text-[#e89e1c] mb-4" />
                <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section (Added for Improvement) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              Our Service Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring precision, efficiency, and client satisfaction from consultation to completion.
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e89e1c] text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="mt-4 text-xl font-semibold text-[#1e3c72]">Consultation</h3>
              <p className="mt-2 text-gray-600">Understanding your needs to recommend tailored solutions.</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-[#e89e1c] self-center"></div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e89e1c] text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="mt-4 text-xl font-semibold text-[#1e3c72]">Block Manufacturing</h3>
              <p className="mt-2 text-gray-600">Crafting high-quality products with advanced technology.</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-[#e89e1c] self-center"></div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e89e1c] text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="mt-4 text-xl font-semibold text-[#1e3c72]">Delivery & Support</h3>
              <p className="mt-2 text-gray-600">Timely installation and ongoing maintenance for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Our Services Apart Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              What Sets Our Services Apart
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our services stand out through a blend of expertise, technology, and client-centric approaches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Factory className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Cutting-Edge Technology</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Leveraging the latest advancements for precise and efficient service delivery.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Unmatched Reliability</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Rigorous quality controls ensure dependable results in every service we provide.
              </p>
            </article>
            <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Truck className="h-8 w-8 text-[#e89e1c] mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3c72] mb-2">Sustainable Practices</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Environmentally responsible methods that support long-term project viability.
              </p>
            </article>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-[#1e3c72]">
              20+ Years of Service Excellence | 500+ Projects Supported | 95% Client Retention
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
              Certifications & Standards
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our services adhere to the highest industry standards, ensuring quality and compliance.
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

export default ServicesPage;
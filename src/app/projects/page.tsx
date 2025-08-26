'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Award, Building2, Users, ShieldCheck } from 'lucide-react';

// TypeScript Interfaces
interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  quote: string;
  imageSrc: string;
  category: string;
  slug: string;
}

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Sample Project Data
const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Residential Development',
    client: 'Green Haven Estates',
    description: 'High-end residential complex in Abuja.',
    quote: 'Mshel’s blocks ensured unmatched quality.',
    imageSrc: '/images/projects/green-haven.jpg',
    category: 'Residential',
    slug: 'green-haven-estates',
  },
  {
    id: '2',
    title: 'Commercial Warehouse Construction',
    client: 'MegaBuild Ltd.',
    description: 'Large-scale warehouse in Lagos.',
    quote: 'Their machinery rentals accelerated our timeline.',
    imageSrc: '/images/projects/megabuild.jpg',
    category: 'Commercial',
    slug: 'megabuild-ltd',
  },
  {
    id: '3',
    title: 'Classroom Blocks Expansion',
    client: 'Unity Secondary School',
    description: 'New educational facilities in Jos.',
    quote: 'Mshel’s expertise ensured structural integrity.',
    imageSrc: '/images/projects/unity-school.jpg',
    category: 'Educational',
    slug: 'unity-secondary-school',
  },
  {
    id: '4',
    title: 'Industrial Park Development',
    client: 'SteelCore Industries',
    description: 'Modern industrial park in Port Harcourt.',
    quote: 'Reliable materials and support throughout.',
    imageSrc: '/images/projects/steelcore.jpg',
    category: 'Commercial',
    slug: 'steelcore-industries',
  },
  {
    id: '5',
    title: 'Affordable Housing Project',
    client: 'BuildTech Ltd.',
    description: 'Cost-effective housing in Kaduna.',
    quote: 'Mshel’s blocks were both durable and affordable.',
    imageSrc: '/images/projects/buildtech.jpg',
    category: 'Residential',
    slug: 'buildtech-ltd',
  },
  {
    id: '6',
    title: 'University Library Renovation',
    client: 'Premier University',
    description: 'Refurbished library facilities in Enugu.',
    quote: 'Exceptional service and timely delivery.',
    imageSrc: '/images/projects/premier-university.jpg',
    category: 'Educational',
    slug: 'premier-university',
  },
];

// Sample Stats Data
const stats: Stat[] = [
  {
    id: '1',
    value: '500+',
    label: 'Projects Completed',
    icon: Building2,
  },
  {
    id: '2',
    value: '95%',
    label: 'Client Satisfaction',
    icon: Users,
  },
  {
    id: '3',
    value: '20+',
    label: 'Years of Excellence',
    icon: Award,
  },
  {
    id: '4',
    value: 'ISO 9001',
    label: 'Certified Quality',
    icon: ShieldCheck,
  },
];

// Projects Page Component
const ProjectsPage: FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projects.map((p) => p.category))];

  // Filter projects based on selected category
  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-[#1e3c72] text-white py-24 sm:py-32"
        aria-labelledby="projects-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/cement blocks.jpg"
            alt="Mshel Blocks & Machineries project overview"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[#1e3c72]/70" /> {/* Overlay for contrast */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="projects-hero-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Showcasing Excellence in Every Project
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover how Mshel Blocks & Machineries delivers robust, innovative solutions that power successful constructions across Nigeria.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72]">
            Proven Expertise in Diverse Sectors
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            With over 500 projects completed, our portfolio reflects a commitment to quality, efficiency, and sustainable building practices in residential, commercial, and educational developments.
          </p>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72] text-center mb-12">
            Project Portfolio
          </h2>
          {/* Category Filters */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  filter === category
                    ? 'bg-[#e89e1c] text-white'
                    : 'bg-white text-[#1e3c72] hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} for ${project.client}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                  <h4 className="mt-2 text-xl font-semibold text-[#1e3c72] group-hover:text-[#e89e1c] transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600">{project.client}</p>
                  <p className="mt-2 text-base text-gray-600">{project.description}</p>
                  <blockquote className="mt-4 text-base text-gray-700 italic">
                    “{project.quote}”
                  </blockquote>
                  <div className="mt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-medium text-[#1e3c72] hover:text-[#e89e1c] transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3c72] text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <article
                key={stat.id}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="h-8 w-8 text-[#e89e1c] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#1e3c72]">{stat.value}</h4>
                <p className="mt-2 text-base text-gray-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
</main>
  );
};

export default ProjectsPage;
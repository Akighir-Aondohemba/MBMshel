'use client';

import React from 'react';
import Image from 'next/image';

// TypeScript Interface for success story data
interface SuccessStory {
  id: string;
  clientName: string;
  projectTitle: string;
  quote: string;
  imageSrc: string;
  industry?: string;
}

// Placeholder data array (refined with more realistic quotes and images)
const successStories: SuccessStory[] = [
  {
    id: '1',
    clientName: 'Green Haven Estates',
    projectTitle: 'Luxury Residential Development in Abuja',
    quote: 'Mshel Bricks delivered durable, high-quality blocks that exceeded our expectations, ensuring our project met the highest standards of strength and sustainability.',
    imageSrc: '/images/projects/green-haven.jpg', // Updated placeholder for better relevance
    industry: 'Residential',
  },
  {
    id: '2',
    clientName: 'MegaBuild Ltd.',
    projectTitle: 'Commercial Warehouse Construction in Lagos',
    quote: 'Their state-of-the-art machineries revolutionized our construction process, cutting timelines by 30% while maintaining superior quality.',
    imageSrc: '/images/projects/megabuild-warehouse.jpg',
    industry: 'Commercial',
  },
  {
    id: '3',
    clientName: 'Unity Secondary School',
    projectTitle: 'New Classroom Blocks in Jos',
    quote: 'With Mshel\'s premium bricks and expert guidance, we built safe, long-lasting structures that will serve generations of students.',
    imageSrc: '/images/projects/unity-school.jpg',
    industry: 'Educational',
  },
];

// Main Section Component
const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="success-stories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            id="success-stories-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#1e3c72]"
          >
            Our Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how our innovative blocks and machineries have empowered real-world projects across diverse industries.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card Component
const SuccessStoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => {
  return (
    <article
      className="group relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      aria-labelledby={`story-title-${story.id}`}
    >
      {/* Image with Gradient Overlay */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={story.imageSrc}
          alt={`${story.clientName} project showcase`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAABgf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdpa//2Q==" // Base64 placeholder for better loading
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3c72]/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Industry Badge */}
        {story.industry && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-[#e89e1c] bg-[#e89e1c]/10 rounded-full uppercase tracking-wide">
            {story.industry}
          </span>
        )}

        {/* Client and Project Info */}
        <h3 id={`story-title-${story.id}`} className="text-xl font-semibold text-[#1e3c72] mb-2 group-hover:text-[#e89e1c] transition-colors duration-200">
          {story.clientName}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{story.projectTitle}</p>

        {/* Quote */}
        <blockquote className="text-base text-gray-700 italic flex-1 leading-relaxed">
          “{story.quote}”
        </blockquote>
      </div>
    </article>
  );
};

export default SuccessStoriesSection;
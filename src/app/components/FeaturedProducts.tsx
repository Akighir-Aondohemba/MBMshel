'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

// TypeScript Interface for products
interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  href: string;
  category: 'Bricks & Blocks' | 'Machineries';
}

// Sample featured products data (replace with real data from API or props in production)
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'High-Density Concrete Blocks',
    description: 'High-density concrete blocks are engineered to deliver exceptional durability and strength across residential and commercial construction. These blocks combine superior structural performance with adequate insulation, promoting energy efficiency and long-term reliability. Manufactured with advanced techniques to ensure uniformity and resilience, they provide a sustainable solution for projects that demand quality, precision, and environmental responsibility',
    imageSrc: '/images/heavy-excavator-digging.jpg', // Fixed space in path
    href: '/products/bricks-blocks/high-density-concrete',
    category: 'Bricks & Blocks',
  },
  {
    id: '2',
    name: 'Fly Ash Bricks',
    description: 'Fly ash bricks are sustainable building materials produced from carefully processed industrial by-products, offering an environmentally responsible alternative for modern construction. Renowned for their excellent compressive strength and durability, these bricks provide stability while significantly reducing environmental impact. Their smooth finish and uniform shape enhance masonry work, requiring less mortar and delivering a refined aesthetic. ',
    imageSrc: '/images/interlocking.jpg',
     href: '/products/bricks-blocks/interlocking-pavers',
    category: 'Bricks & Blocks',
  },
  {
    id: '3',
    name: 'Automated Block Machine',
    description: 'The automated block machine is a high-efficiency solution designed for large-scale block production, combining advanced automation with precision engineering. Built to deliver consistency and speed, the machine significantly enhances productivity while maintaining exceptional quality across every unit produced. With features that allow for customised moulds, it adapts seamlessly to diverse construction requirements, supporting cost-effective operations, reducing manual labour, and ensuring superior output for projects demanding scale, efficiency, and excellence.',
    imageSrc: '/images/cement-blocks.JPG', 
    href: '/products/bricks-blocks/fly-ash-bricks',
    category: 'Bricks & Blocks',
  },
  {
    id: '4',
    name: 'Hydraulic Press Machinery',
    description: 'Hydraulic press machinery is engineered with robust systems that deliver precise block compression, ensuring strength, accuracy, and uniformity in every unit produced. Designed for high-volume manufacturing, this equipment combines power with efficiency, making it an indispensable solution for large-scale construction demands. Its advanced hydraulic technology minimises maintenance needs while maximising output, providing reliability and cost-effectiveness over the long term.',
    imageSrc: '/images/on-scaffolding-bricklayer.jpg',
    href: '/products/machineries/block-making-machine',
    category: 'Machineries',
  },
  {
    id: '5',
    name: 'Vibratory Compaction Table',
    description: 'The vibratory compaction table is an essential equipment designed to ensure uniform block compaction, resulting in superior strength, density, and finish. By applying consistent vibration, it eliminates air gaps within the mix, enhancing both product quality and durability. Ideal for high-volume block production, the table increases output speed while maintaining precision and consistency across every unit.',
    imageSrc: '/images/excavator.jpg',
    href: '/products/machineries/hydraulic-press',
    category: 'Machineries',
  },
  {
    id: '6',
    name: 'Vibratory Compaction Table',
    description: 'Essential equipment for uniform block compaction, enhancing product quality and production speed.',
    imageSrc: '/images/excavator-digging-ground.jpg',
    href: '/products/machineries/vibratory-table',
    category: 'Machineries',
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5 },
  }),
};

const FeaturedProducts: FC = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="featured-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="featured-products-heading"
            className="text-3xl font-bold tracking-tight text-[#1e3c72] sm:text-4xl"
          >
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a distinguished selection of premium concrete blocks and state-of-the-art construction machinery, meticulously crafted and maintained to deliver strength, precision, and long-lasting performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col"
            >
              <Link
                href={product.href}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${product.name}`}
              >
                <span className="sr-only">View details for {product.name}</span>
              </Link>
              <div className="relative aspect-[4/3] flex-shrink-0">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEAPwCdpa//2Q=="
                />
              </div>
              <div className="p-6 flex-grow">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#1e3c72] group-hover:text-[#e89e1c] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-gray-600 line-clamp-3" title={product.description}>
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
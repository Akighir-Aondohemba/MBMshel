'use client';

import Image from 'next/image';
import Link from 'next/link';

// Define TypeScript interface for products
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
    description: 'Durable and eco-friendly blocks designed for commercial and residential construction, offering superior strength and thermal insulation.',
    imageSrc: '/images/cement blocks.jpg', // Placeholder; use actual image paths
    href: '/products/bricks-blocks/high-density-concrete',
    category: 'Bricks & Blocks',
  },
  {
    id: '2',
    name: 'Interlocking Paver Blocks',
    description: 'Precision-engineered pavers for landscaping and driveways, ensuring easy installation and long-lasting performance.',
    imageSrc: '/images/interlocking.jpg',
    href: '/products/bricks-blocks/interlocking-pavers',
    category: 'Bricks & Blocks',
  },
  {
    id: '3',
    name: 'Fly Ash Bricks',
    description: 'Sustainable bricks made from industrial by-products, providing excellent compressive strength and reduced environmental impact.',
    imageSrc: '/images/products/fly-ash-bricks.jpg',
    href: '/products/bricks-blocks/fly-ash-bricks',
    category: 'Bricks & Blocks',
  },
  {
    id: '4',
    name: 'Automated Block Making Machine',
    description: 'High-efficiency machinery for mass production of blocks, featuring advanced automation and customizable molds.',
    imageSrc: '/images/products/block-machine.jpg',
    href: '/products/machineries/block-making-machine',
    category: 'Machineries',
  },
  {
    id: '5',
    name: 'Hydraulic Press Machinery',
    description: 'Robust hydraulic systems for precise block compression, ideal for high-volume manufacturing with minimal maintenance.',
    imageSrc: '/images/products/hydraulic-press.jpg',
    href: '/products/machineries/hydraulic-press',
    category: 'Machineries',
  },
  {
    id: '6',
    name: 'Vibratory Compaction Table',
    description: 'Essential equipment for uniform block compaction, enhancing product quality and production speed.',
    imageSrc: '/images/products/compaction-table.jpg',
    href: '/products/machineries/vibratory-table',
    category: 'Machineries',
  },
];

const FeaturedProducts: React.FC = () => {
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
          <p className="mt-4 text-lg text-gray-600">
            Discover our top-quality blocks and state-of-the-art machineries designed for efficiency and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#1e3c72] group-hover:text-[#e89e1c] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
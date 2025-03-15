"use client";

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Exterior Carpentry',
    description: 'Decking, fences, and outdoor structures for your garden',
    image: '/images/exterior-carpentry.webp',
    link: '/services/exterior-carpentry'
  },
  {
    id: 2,
    title: 'Interior Carpentry',
    description: 'Beautiful interiors that enhance your living space',
    image: '/images/interior-carpentry.webp',
    link: '/services/interior-carpentry'
  },
  {
    id: 3,
    title: 'Maintenance',
    description: 'Keep your property in perfect condition',
    image: '/images/maintenance.webp',
    link: '/services/maintenance'
  },
  {
    id: 4,
    title: 'Fitted Furniture',
    description: 'Custom storage solutions for your home',
    image: '/images/fitted-furniture.webp',
    link: '/services/fitted-furniture'
  },
  {
    id: 5,
    title: 'Refurbishment',
    description: 'Renovate and upgrade your living spaces',
    image: '/images/refurbishment.webp',
    link: '/services/refurbishment'
  }
];

const ServicesGrid = () => {
  return (
    <section className="section-mini-gallery section bg-gray-100 py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div key={service.id} className="services-grid-item bg-white shadow-md rounded overflow-hidden">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-2">
                  <Link
                    href={service.link}
                    className="text-slate-800 hover:text-red-600"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block text-sm font-medium text-red-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

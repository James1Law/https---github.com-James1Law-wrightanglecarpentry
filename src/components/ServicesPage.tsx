"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 'exterior-carpentry',
    title: 'Exterior Carpentry',
    image: '/images/exterior-carpentry.webp',
    description: 'Our exterior carpentry services include decking, fencing, pergolas, and other outdoor structures. We use high-quality, weather-resistant materials to ensure durability and longevity in all weather conditions.',
    features: [
      'Custom decking and patios',
      'Fencing and gates',
      'Garden structures and pergolas',
      'Outdoor furniture',
      'Summer houses and garden offices'
    ]
  },
  {
    id: 'interior-carpentry',
    title: 'Interior Carpentry',
    image: '/images/interior-carpentry.webp',
    description: 'Transform your indoor living spaces with our interior carpentry services. From custom built-in cabinetry to stunning staircases, we can enhance the functionality and aesthetics of your home.',
    features: [
      'Built-in wardrobes and cabinetry',
      'Custom shelving and storage solutions',
      'Door hanging and window fitting',
      'Staircase installation and renovation',
      'Flooring installation'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    image: '/images/maintenance.webp',
    description: 'Keep your property in perfect condition with our comprehensive maintenance services. We handle everything from small repairs to regular maintenance programs to prevent problems before they occur.',
    features: [
      'General property maintenance',
      'Door and window repairs',
      'Structural repairs',
      'Weather proofing',
      'Preventative maintenance programs'
    ]
  },
  {
    id: 'fitted-furniture',
    title: 'Fitted Furniture',
    image: '/images/fitted-furniture.webp',
    description: 'Maximize your space with our custom fitted furniture solutions. We design and build furniture that fits perfectly in your space, making the most of every inch while matching your style preferences.',
    features: [
      'Custom kitchen cabinets',
      'Fitted wardrobes and walk-in closets',
      'Home office furniture',
      'Entertainment centers',
      'Space-saving storage solutions'
    ]
  },
  {
    id: 'refurbishment',
    title: 'Refurbishment',
    image: '/images/refurbishment.webp',
    description: 'Revitalize your property with our comprehensive refurbishment services. From kitchen and bathroom renovations to complete property makeovers, we can transform your living spaces.',
    features: [
      'Kitchen and bathroom renovations',
      'Room conversions',
      'Property extensions',
      'Interior remodeling',
      'Complete property renovations'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[150px]">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-gray-700">
                At Wright Angle Carpentry, we offer a comprehensive range of carpentry and building services tailored to your needs. From custom kitchens to complete property renovations, we deliver exceptional craftsmanship with a personal touch.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className={`service-section ${index % 2 === 1 ? 'bg-gray-50 py-8 px-4 rounded-lg' : ''}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center max-w-6xl mx-auto`}>
                    <div className="lg:w-1/2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-gray-700 mb-6">{service.description}</p>

                      <h3 className="text-xl font-semibold mb-3">What we offer:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact-us"
                        className="inline-flex items-center text-red-600 font-medium hover:underline"
                      >
                        Request a quote
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-700 mb-6">Contact us today to discuss your requirements and get a free, no-obligation quote.</p>
              <Link
                href="/contact-us"
                className="btn-primary py-3 px-8 text-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

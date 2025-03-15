"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhoneAlt, faShield, faTools } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HomeIntro = () => {
  return (
    <section className="page-intro section py-12 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center sm:text-left">Carpenter in Sussex</h1>

          <div className="mb-8">
            <p className="mb-4 text-lg leading-relaxed">Wright Angle Carpentry is an established, experienced company offering a wide range of building services at a personal level.</p>
            <p className="mb-4 leading-relaxed">From storage solutions to refurbishments and extensions, we take pride in each job we do, completing our work to a high standard and caring about the quality of our work as much as our clients do: <span className="font-bold">Customer satisfaction is our priority.</span></p>
            <p className="mb-4 leading-relaxed">We undertake all domestic building work including all internal and external carpentry, kitchens and bathrooms, decoration, renovation and restoration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-red-600 mb-3">
                <FontAwesomeIcon icon={faTools} className="text-3xl" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Complete Service</h3>
              <p className="text-gray-700">We work with a small team of qualified trades including electricians and plumbers so we can provide the complete building package for your project.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-red-600 mb-3">
                <FontAwesomeIcon icon={faShield} className="text-3xl" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Insurance</h3>
              <p className="text-gray-700">We are specialists in what we do, qualified and fully insured giving you peace of mind throughout the project.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-red-600 mb-3">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Free Estimates</h3>
              <p className="text-gray-700">We offer a free estimate service and written quotation. Take a look through the website to see what Wright Angle can do for you.</p>
            </div>
          </div>

          <div className="mb-10">
            <p className="mb-4 leading-relaxed">We cover Sussex, Kent and London and cover all our travel costs and not charge you with any hidden extras.</p>
            <p className="mb-6 leading-relaxed">Wright Angle looks forward to discussing your future projects and offer our expert advice and help turn concepts into reality whether they are bespoke shelving for the lounge, new kitchen or conversion.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Specialists Carpenters In:</h2>
            <ul className="specialists-ul space-y-3">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
                <span>Kitchens</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
                <span>Fitted Furniture</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
                <span>Decking</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
                <span>Conversions</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
                <span>Property refurbishments and improvements</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="btn-primary py-3 px-6 text-lg font-medium"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;

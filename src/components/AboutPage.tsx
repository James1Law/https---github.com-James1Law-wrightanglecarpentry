"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHandshake, faTools, faHammer } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[150px]">
      <Header />
      <main className="flex-grow">
        <section className="about-section py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-center">About Wright Angle Carpentry</h1>

              <div className="mb-10">
                <div className="bg-gray-100 p-8 rounded-lg mb-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/2">
                      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                      <p className="mb-4">Wright Angle Carpentry was established with a simple mission: to deliver exceptional carpentry and building services with a personal touch to clients across Sussex, Kent, and London.</p>
                      <p className="mb-4">With years of experience in the industry, we've built a reputation for quality craftsmanship, reliability, and attention to detail that sets us apart.</p>
                      <p>Our team is committed to transforming your ideas into reality, whether it's a custom kitchen installation, fitted furniture for challenging spaces, or a complete property renovation.</p>
                    </div>
                    <div className="lg:w-1/2">
                      <img
                        src="/images/exterior-carpentry.webp"
                        alt="Wright Angle Carpentry - Quality craftsmanship"
                        className="about-image w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm flex">
                    <div className="text-red-600 mr-4 mt-1">
                      <FontAwesomeIcon icon={faTools} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Expert Craftsmanship</h3>
                      <p className="text-gray-700">We pride ourselves on delivering high-quality work with excellent attention to detail and finish.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm flex">
                    <div className="text-red-600 mr-4 mt-1">
                      <FontAwesomeIcon icon={faHammer} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Comprehensive Services</h3>
                      <p className="text-gray-700">From kitchens to extensions, we offer a complete range of carpentry and building services.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm flex">
                    <div className="text-red-600 mr-4 mt-1">
                      <FontAwesomeIcon icon={faHandshake} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Personalized Approach</h3>
                      <p className="text-gray-700">We take the time to understand your needs and tailor our services to meet your specific requirements.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm flex">
                    <div className="text-red-600 mr-4 mt-1">
                      <FontAwesomeIcon icon={faStar} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">Customer Satisfaction</h3>
                      <p className="text-gray-700">Your satisfaction is our priority, and we work hard to exceed your expectations on every project.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <p className="mb-4">At Wright Angle Carpentry, we believe in a collaborative approach to every project. We begin by listening carefully to your ideas and requirements, then apply our expertise to provide practical solutions that meet your needs and budget.</p>
                <p className="mb-4">We keep you informed at every stage of the process, ensuring that the final result is exactly what you envisioned. Our commitment to quality workmanship and clear communication is what makes us stand out.</p>
                <p>We're fully insured and qualified, giving you complete peace of mind throughout your project. And as a local company, we take pride in contributing to the communities we serve across Sussex, Kent, and London.</p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Ready to start your project?</h3>
                <a href="/contact-us" className="btn-primary py-3 px-6 text-lg font-medium inline-block">
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

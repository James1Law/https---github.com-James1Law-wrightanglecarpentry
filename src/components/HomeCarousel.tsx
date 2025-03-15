"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';

const slideImages = [
  {
    url: '/images/hero1.webp',
    title: 'Specialists in Kitchens',
    description: 'Whether your kitchen is free-standing, fitted, modernist or country style we can fit your kitchen.',
    link: '/services/interior-carpentry'
  },
  {
    url: '/images/hero2.webp',
    title: 'Specialists in Fitted Furniture',
    description: 'Space saving storage solutions for your home.',
    link: '/services/fitted-furniture'
  },
  {
    url: '/images/decking.webp',
    title: 'Specialists in Decking',
    description: 'Big or small we can help with all your decking needs.',
    link: '/services/exterior-carpentry'
  },
  {
    url: '/images/conversions.webp',
    title: 'Specialists in Conversions',
    description: 'We can convert your spaces to meet your needs.',
    link: '/services/interior-carpentry'
  },
  {
    url: '/images/refurbishment.webp',
    title: 'Specialists in Property Refurbishments',
    description: 'Small or large projects at home we can work with you and your requirements.',
    link: '/services/refurbishment'
  }
];

const HomeCarousel = () => {
  return (
    <section className="section no-pad">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        dynamicHeight={false}
        className="carousel-container"
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className="carousel-slide">
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                position: 'relative'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8 bg-black/50 rounded max-w-xl">
                  <h2 className="text-3xl font-bold mb-2">{slideImage.title}</h2>
                  <p className="text-xl mb-4">{slideImage.description}</p>
                  <Link
                    href={slideImage.link}
                    className="btn-primary inline-block"
                  >
                    Find out more
                    <span className="ml-2 arrow-right">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;

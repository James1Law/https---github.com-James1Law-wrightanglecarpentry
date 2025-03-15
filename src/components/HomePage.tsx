"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeCarousel from '@/components/HomeCarousel';
import HomeIntro from '@/components/HomeIntro';
import ServicesGrid from '@/components/ServicesGrid';
import CookieBanner from '@/components/CookieBanner';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[150px]">
      <CookieBanner />
      <Header />
      <main className="flex-grow">
        {isLoaded && <HomeCarousel />}
        <HomeIntro />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

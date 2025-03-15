"use client";

import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-3 md:mb-0">
          <p>This website uses cookies to ensure you get the best experience on our website.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
          >
            Accept
          </button>
          <a
            href="/privacy-policy"
            className="bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

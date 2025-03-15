"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-wrap header--fixed">
      <header>
        <div className="brand-header">
          <div className="container flex items-center justify-between">
            <Link href="/" className="header-logo">
              <div className="flex items-center">
                <div className="w-[100px] h-[80px] relative">
                  <img
                    src="/images/logo.svg"
                    alt="Wright Angle Carpentry"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-2">
                  <h1 className="text-2xl font-bold text-slate-800">Wright Angle Carpentry</h1>
                  <p className="text-sm text-gray-600">Carpentry, Renovation & Maintenance</p>
                </div>
              </div>
            </Link>
            <div className="header-contact text-right">
              <p className="mb-1">
                <Link href="tel:07753958395" className="flex items-center justify-end">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  07753958395
                </Link>
              </p>
              <p>
                <Link href="mailto:james@wrightanglecarpentry.co.uk" className="flex items-center justify-end">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  james@wrightanglecarpentry.co.uk
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-inverse">
          <div className="container">
            <div className="flex justify-between items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-4"
              >
                <span className="sr-only">Toggle navigation</span>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </button>
            </div>
            <div className={`navbar-collapse ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
              <ul className="navbar-nav">
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/previous-work">Previous Work</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

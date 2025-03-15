"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="style-line bg-secondary"></div>
      <footer className="master-footer">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <Link href="#top" className="go-to-top">&nbsp;&nbsp;Back to top</Link>
            </div>
            <div className="md:col-span-8">
              <div className="footer-widget footer-widget-links">
                <ul className="footer-links">
                  <li className="active">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/sitemap">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="/privacy-cookies-policy">Privacy Cookies Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="credit">
        <div className="container">
          <p className="footer-group">Designed by <a href="http://www.artificialcolours.co.uk" rel="nofollow" className="text-white hover:underline">Artificial Colours</a>. © {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo2.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "#about" },
    { name: "Categories", to: "#categories" },
    { name: "Products", to: "#products" },
    { name: "Manufacturing", to: "#manufacturing" },
    { name: "Services", to: "#services" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <footer
      id="footer"
      className="bg-neutral-900 text-white px-5 pt-16 pb-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="footer-column">
            <div className="mb-6">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="YUVA Plastics Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-neutral-400 mb-6">
              Leading manufacturer of premium tarpaulin and plastic products
              dedicated to innovation, sustainability, and excellence.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-amber-400 flex items-center justify-center transition-colors duration-300 text-white hover:text-neutral-900"
                    aria-label={`social-icon-${i}`}
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-amber-400"></span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Policies */}
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Our Policies
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-amber-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping Policy",
                "Return & Refund",
                "FAQ",
              ].map((policy) => (
                <li key={policy}>
                  <Link
                    to="#"
                    className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {policy}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-amber-400"></span>
            </h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li>
                At Mamnapur, Taluka Khultabad, Post Golegaon, Aurangabad,
                Maharashtra - 431101, India
              </li>
              <li>+91 98765 43210</li>
              <li>yuvaplastics@gmail.com</li>
              <li>Mon–Fri: 9am–6pm, Sat: 10am–4pm</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 pt-8 pb-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-neutral-400 text-sm">
                Stay updated with new tarpaulin products and exclusive offers.
              </p>
            </div>
            <div className="md:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-neutral-900 font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YUVA Plastics Industries. All
            rights reserved.
          </p>
          <div className="flex justify-center space-x-4 text-neutral-500 text-sm">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <Link
                key={link}
                to="#"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-neutral-600 text-xs">
          Website images & illustrations are digitally generated and used for
          demonstration purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

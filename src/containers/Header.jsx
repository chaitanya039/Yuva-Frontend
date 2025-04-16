import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "#about" },
    { name: "Categories", to: "#categories" },
    { name: "Products", to: "#products" },
    { name: "Services", to: "#services" },
    { name: "Contact", to: "#contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md border-b border-neutral-800"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="YUVA Logo" className="w-20" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.to === "/" ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-200 hover:text-[#F7B614] text-md font-medium transition duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.to)}
                  className="text-gray-200 hover:text-[#F7B614] text-md font-medium transition duration-300"
                >
                  {link.name}
                </button>
              )
            )}

            {/* CTA Button */}
            <Link
              to="/order"
              className="ml-4 bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-5 py-2 rounded-full transition duration-300"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-200 hover:text-[#F7B614] focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-black/80 backdrop-blur-md px-4`}
      >
        <div className="space-y-2 py-4">
          {navLinks.map((link) =>
            link.to === "/" ? (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-200 hover:text-[#F7B614] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.to)}
                className="block w-full text-left text-gray-200 hover:text-[#F7B614] px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {link.name}
              </button>
            )
          )}

          {/* Mobile CTA */}
          <Link
            to="/order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold text-center px-4 py-2 rounded-full transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

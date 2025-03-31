import React, { useState } from "react";
import logo from "../assets/logo2.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="">
              <img src={logo} alt="logo" className="w-20" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">About</a>
              <a href="#products" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Products</a>
              <a href="#manufacturing" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Manufacturing</a>
              <a href="#sustainability" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Sustainability</a>
              <a href="#clients" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Clients</a>
              <a href="#contact" className="text-gray-300 hover:text-[#F7B614] px-3 py-2 rounded-md text-md font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="cursor-pointer text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#products" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Products</a>
          <a href="#manufacturing" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Manufacturing</a>
          <a href="#sustainability" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Sustainability</a>
          <a href="#clients" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Clients</a>
          <a href="#contact" className="text-gray-300 hover:text-[#F7B614] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
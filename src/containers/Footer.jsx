import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F7B614]">YUVA</h3>
            <p className="text-gray-400">Leading manufacturer of innovative plastic solutions with a commitment to quality and sustainability.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F7B614] transition-colors">
                {/* Social Media Icons */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#F7B614] transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#F7B614] transition-colors">About</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-[#F7B614] transition-colors">Products</a></li>
              <li><a href="/manufacturing" className="text-gray-400 hover:text-[#F7B614] transition-colors">Manufacturing</a></li>
              <li><a href="/sustainability" className="text-gray-400 hover:text-[#F7B614] transition-colors">Sustainability</a></li>
              <li><a href="/clients" className="text-gray-400 hover:text-[#F7B614] transition-colors">Clients</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#F7B614] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#F7B614] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-[#F7B614] transition-colors">Terms & Conditions</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-[#F7B614] transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-[#F7B614] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7B614] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-[#F7B614] text-white py-2 px-4 rounded-lg hover:bg-[#e5a912] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2024 YUVA. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-[#F7B614] text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F7B614] text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F7B614] text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
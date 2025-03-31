import React from "react";

const Products = () => {
  return (
    <section id="products" className="bg-neutral-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Our <span className="text-[#F7B614]">Products</span>
          </h2>
          <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality plastic products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#F7B614]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Industrial Packaging
              </h3>
              <p className="text-neutral-600 mb-4">
                High-quality packaging solutions for industrial applications
              </p>
              <ul className="text-neutral-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Bulk containers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Storage bins
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Pallets
                </li>
              </ul>
              <button className="w-full bg-[#F7B614] text-white py-2 px-4 rounded-lg hover:bg-[#e5a912] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#F7B614]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Consumer Products
              </h3>
              <p className="text-neutral-600 mb-4">
                Everyday plastic products for consumer use
              </p>
              <ul className="text-neutral-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Household items
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Storage solutions
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Kitchen accessories
                </li>
              </ul>
              <button className="w-full bg-[#F7B614] text-white py-2 px-4 rounded-lg hover:bg-[#e5a912] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#F7B614]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Custom Solutions
              </h3>
              <p className="text-neutral-600 mb-4">
                Tailored plastic solutions for specific needs
              </p>
              <ul className="text-neutral-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Custom molds
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Specialized products
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#F7B614]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Industry-specific solutions
                </li>
              </ul>
              <button className="w-full bg-[#F7B614] text-white py-2 px-4 rounded-lg hover:bg-[#e5a912] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-neutral-900 text-white py-3 px-8 rounded-full hover:bg-neutral-800 transition-colors animate__animated animate__pulse animate__infinite">
            View All Products
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

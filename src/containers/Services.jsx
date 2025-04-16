import React from "react";

const Certifications = () => {
  return (
    <div class="mt-20 px-4 py-16 text-center bg-gradient-to-br from-neutral-800 via-neutral-950 to-neutral-800 text-white">
      <h3 class="text-3xl font-bold mb-10">
        Our Certifications & Partnerships
      </h3>

      <div class="flex flex-wrap justify-center items-center gap-10">
        <div class="certification-badge bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div class="w-24 h-24 mx-auto bg-green-900/30 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <p class="mt-4 font-semibold text-white">ISO 14001</p>
        </div>

        <div class="certification-badge bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div class="w-24 h-24 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <p class="mt-4 font-semibold text-white">Global Recycling Standard</p>
        </div>

        <div class="certification-badge bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div class="w-24 h-24 mx-auto bg-amber-900/30 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <p class="mt-4 font-semibold text-white">Eco-Plastics Alliance</p>
        </div>

        <div class="certification-badge bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div class="w-24 h-24 mx-auto bg-purple-900/30 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class="mt-4 font-semibold text-white">Carbon Trust</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-white text-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Top <span className="text-[#F7B614]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comprehensive plastic manufacturing solutions tailored to your
            specific requirements
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Manufacturing",
              description:
                "Tailored plastic product manufacturing based on your specifications. Our expert team transforms your concepts into high-quality finished products with precision engineering.",
              bullets: [
                "Customized dimensions and specifications",
                "Material selection consultation",
                "Prototype development and testing",
              ],
              cta: "Request Custom Service",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              ),
            },
            {
              title: "Bulk Orders & Distribution",
              description:
                "Cost-effective bulk manufacturing with efficient logistics and distribution services. We ensure timely delivery and consistent quality across large orders.",
              bullets: [
                "Volume discounts for large orders",
                "Nationwide logistics network",
                "Inventory management solutions",
              ],
              cta: "Request Bulk Pricing",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              ),
            },
            {
              title: "Product Consulting",
              description:
                "Expert advice on material selection, design optimization, and sustainable solutions. Our specialists help you maximize value and minimize environmental impact.",
              bullets: [
                "Materials engineering expertise",
                "Sustainability optimization",
                "Cost-efficiency analysis",
              ],
              cta: "Book Consultation",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="h-20 bg-neutral-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-white border border-neutral-200 rounded-full flex items-center justify-center z-10 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="text-amber-600 flex items-center text-sm font-medium group-hover:text-black transition-colors"
                >
                  <span>{service.cta}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Work With Us?</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Discuss your project requirements with our expert team and discover
            how our services can help you achieve your goals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-neutral-900 font-semibold px-8 py-3 rounded-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
      <div>
        <Certifications />
      </div>
    </section>
  );
};

export default Services;

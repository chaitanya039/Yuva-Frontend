import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-neutral-900 pt-12">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[70vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-neutral-900 to-neutral-800">
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="animate__animated animate__fadeIn">
                <h1 className="text-white font-semibold text-5xl mb-8">
                  Innovative Plastic Solutions
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Leading the way in sustainable plastic manufacturing with
                  cutting-edge technology and eco-friendly practices.
                </p>
                <button className="mt-8 bg-[#F7B614] text-neutral-900 hover:bg-[#e5a912] font-bold py-3 px-8 rounded-full transition-all animate__animated animate__pulse animate__infinite">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="hero"
        className="relative min-h-screen bg-neutral-900 py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 opacity-90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transforming <span className="text-[#F7B614]">Plastic</span> Into
                Sustainable Solutions
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Leading manufacturer of high-quality plastic products with a
                commitment to innovation, sustainability, and excellence in
                manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#F7B614] hover:bg-[#e5a912] text-neutral-900 font-bold py-3 px-8 rounded-full transition-all animate__animated animate__pulse animate__infinite">
                  Get Started
                </button>
                <button className="border-2 border-[#F7B614] text-[#F7B614] hover:bg-[#F7B614] hover:text-neutral-900 font-bold py-3 px-8 rounded-full transition-all">
                  Learn More
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-[#F7B614] text-4xl font-bold">20+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#F7B614] text-4xl font-bold">500+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#F7B614] text-4xl font-bold">100%</h3>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F7B614] to-[#e5a912] rounded-lg blur opacity-25"></div>
                <div className="relative bg-neutral-800 rounded-lg p-8">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-neutral-700">
                    <div className="flex items-center justify-center h-full">
                      <div className="w-24 h-24 rounded-full bg-[#F7B614]/20 flex items-center justify-center animate-pulse">
                        <svg
                          className="w-12 h-12 text-[#F7B614]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.5 10.5l-5 3a.5.5 0 01-.75-.4v-6a.5.5 0 01.75-.4l5 3a.5.5 0 010 .8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Watch Our Process
                    </h3>
                    <p className="text-gray-400">
                      Discover how we transform raw materials into high-quality
                      plastic products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 text-white"
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 116L60 96.8333C120 77.6667 240 39.3333 360 25.6667C480 11.9999 600 23.3333 720 34.6666C840 46 960 57.3333 1080 55.1666C1200 53 1320 37.3333 1380 29.5L1440 21.6667V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V116Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </section>
  );
};

export default Hero;

import React from "react";
import ThreeDImage from "../../assets/hero.png"; // ensure this image is saved in /src/assets/
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-black min-h-screen flex items-center justify-center">
      {/* Background glow circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F7B614]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e5a912]/10 rounded-full blur-2xl animate-pulse" />

      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Transforming <span className="text-[#F7B614] ">Plastic</span> Into
              Sustainable Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Leading manufacturer of high-quality plastic products with a
              commitment to innovation, sustainability, and excellence in
              manufacturing.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to={"/products"} className="bg-[#F7B614] hover:bg-[#e5a912] text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore Products
              </Link>
              <button className="border border-[#F7B614] text-[#F7B614] hover:bg-[#F7B614] hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10 flex-wrap text-center">
              {[
                ["20+", "Years Experience"],
                ["500+", "Projects Delivered"],
                ["100%", "Client Satisfaction"],
              ].map(([count, label]) => (
                <div key={label} className="flex-1">
                  <h3 className="text-4xl font-bold text-[#F7B614] drop-shadow-lg">
                    {count}
                  </h3>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - 3D Image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={ThreeDImage}
              alt="3D Tarpaulin Assembly Line"
              className="w-[95%] sm:w-[90%] md:w-[110%] lg:w-[115%] xl:w-[120%] h-auto drop-shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";

const Clients = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2; // Update based on the number of testimonials

    const updateSlide = (newSlide) => {
        setCurrentSlide((newSlide + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="clients" className="bg-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Trusted <span className="text-[#F7B614]">Clients</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Partnering with industry leaders to deliver exceptional plastic solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    <div className="relative testimonials-slider animate__animated animate__fadeInUp">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {/* Testimonial 1 */}
                                <div className="w-full flex-shrink-0 px-4">
                                    <div className="bg-neutral-800 rounded-lg p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-[#F7B614] rounded-full flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">A</span>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-white font-bold">ABC Industries</h4>
                                                <p className="text-gray-400">Manufacturing Sector</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-6">
                                            "YUVA has consistently delivered high-quality plastic products that meet our exact specifications. Their commitment to quality and timely delivery is exceptional."
                                        </p>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="w-full flex-shrink-0 px-4">
                                    <div className="bg-neutral-800 rounded-lg p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-[#F7B614] rounded-full flex items-center justify-center">
                                                <span className="text-2xl font-bold text-white">X</span>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-white font-bold">XYZ Corporation</h4>
                                                <p className="text-gray-400">Packaging Industry</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-6">
                                            "The sustainable solutions provided by YUVA have helped us reduce our environmental impact while maintaining product quality."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={() => updateSlide(currentSlide - 1)}
                        className="bg-[#F7B614] text-white px-4 py-2 rounded-full hover:bg-[#e5a912] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => updateSlide(currentSlide + 1)}
                        className="bg-[#F7B614] text-white px-4 py-2 rounded-full hover:bg-[#e5a912] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Client Logos Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    <div className="bg-neutral-800 p-8 rounded-lg w-full text-center">
                        <h3 className="text-[#F7B614] font-bold">Client 1</h3>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg w-full text-center">
                        <h3 className="text-[#F7B614] font-bold">Client 2</h3>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg w-full text-center">
                        <h3 className="text-[#F7B614] font-bold">Client 3</h3>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg w-full text-center">
                        <h3 className="text-[#F7B614] font-bold">Client 4</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;

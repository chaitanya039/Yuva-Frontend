import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">About <span className="text-[#F7B614]">YUVA</span></h2>
                <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
                <p className="text-neutral-600 max-w-2xl mx-auto">Leading the way in innovative plastic manufacturing solutions with a commitment to quality and sustainability.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate__animated animate__fadeInLeft">
                    <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-[#F7B614]">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">Our Vision</h3>
                        <p className="text-neutral-600">To be the leading innovator in sustainable plastic manufacturing, setting new industry standards for quality and environmental responsibility.</p>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-[#F7B614]">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">Our Mission</h3>
                        <p className="text-neutral-600">Delivering exceptional plastic solutions while maintaining the highest standards of quality, innovation, and environmental stewardship.</p>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-[#F7B614]">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">Our Values</h3>
                        <ul className="text-neutral-600 list-disc list-inside">
                            <li>Quality Excellence</li>
                            <li>Environmental Responsibility</li>
                            <li>Innovation & Technology</li>
                            <li>Customer Satisfaction</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-8 animate__animated animate__fadeInRight">
                    <div className="bg-neutral-50 p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-neutral-900">Quality Certified</h4>
                                <p className="text-sm text-neutral-600">ISO 9001:2015</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-neutral-900">Modern Facility</h4>
                                <p className="text-sm text-neutral-600">State-of-the-art</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F7B614] p-8 rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <p>20+ years of industry experience</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Advanced manufacturing facilities</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Commitment to sustainability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
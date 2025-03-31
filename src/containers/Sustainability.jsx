import React from "react";

const Sustainability = () => {
  return (
    <section id="sustainability" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Commitment to <span className="text-[#F7B614]">Sustainability</span></h2>
                <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
                <p className="text-neutral-600 max-w-2xl mx-auto">Leading the way in sustainable plastic manufacturing with innovative recycling solutions and eco-friendly practices</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp">
                    <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Recycling Program</h3>
                    <p className="text-neutral-600 mb-6">Our comprehensive recycling program ensures minimal environmental impact through:</p>
                    <ul className="space-y-3 text-neutral-600">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Waste Reduction
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Material Recovery
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Circular Economy
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Green Manufacturing</h3>
                    <p className="text-neutral-600 mb-6">Implementing sustainable manufacturing practices:</p>
                    <ul className="space-y-3 text-neutral-600">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Energy Efficiency
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Water Conservation
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Clean Technology
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <div className="w-16 h-16 bg-[#F7B614]/10 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Innovation</h3>
                    <p className="text-neutral-600 mb-6">Developing sustainable solutions through:</p>
                    <ul className="space-y-3 text-neutral-600">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Bio-based Materials
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Smart Packaging
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-[#F7B614]" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Eco-design
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 bg-[#F7B614] rounded-xl p-8 animate__animated animate__fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">80%</div>
                        <p className="text-neutral-800">Recycled Materials Used</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">60%</div>
                        <p className="text-neutral-800">Energy Reduction</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">90%</div>
                        <p className="text-neutral-800">Waste Recycled</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-neutral-900 mb-2">100%</div>
                        <p className="text-neutral-800">Renewable Energy</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Sustainability;
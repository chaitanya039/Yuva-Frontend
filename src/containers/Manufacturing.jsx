import React from "react";

const Manufacturing = () => {
  return (
    <section id="manufacturing" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-white mb-4">Manufacturing <span className="text-[#F7B614]">Excellence</span></h2>
                <div className="w-24 h-1 bg-[#F7B614] mx-auto mb-4"></div>
                <p className="text-gray-300 max-w-2xl mx-auto">State-of-the-art manufacturing facilities equipped with advanced technology for superior quality production</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8 animate__animated animate__fadeInLeft">
                    <div className="relative bg-neutral-800 rounded-lg p-6 border-l-4 border-[#F7B614]">
                        <h3 className="text-xl font-bold text-white mb-4">Advanced Manufacturing Process</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-[#F7B614] rounded-full flex items-center justify-center">
                                        <span className="text-neutral-900 font-bold">1</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[#F7B614] font-semibold mb-1">Raw Material Selection</h4>
                                    <p className="text-gray-300">Premium quality raw materials sourced from trusted suppliers</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-[#F7B614] rounded-full flex items-center justify-center">
                                        <span className="text-neutral-900 font-bold">2</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[#F7B614] font-semibold mb-1">Precision Molding</h4>
                                    <p className="text-gray-300">Advanced injection molding technology for precise manufacturing</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-[#F7B614] rounded-full flex items-center justify-center">
                                        <span className="text-neutral-900 font-bold">3</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[#F7B614] font-semibold mb-1">Quality Control</h4>
                                    <p className="text-gray-300">Rigorous testing and quality assurance procedures</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Production Capabilities</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-neutral-700 rounded-lg">
                                <div className="text-[#F7B614] text-3xl font-bold mb-2">500+</div>
                                <p className="text-gray-300">Tons Monthly<br/>Production</p>
                            </div>
                            <div className="text-center p-4 bg-neutral-700 rounded-lg">
                                <div className="text-[#F7B614] text-3xl font-bold mb-2">24/7</div>
                                <p className="text-gray-300">Operation<br/>Capacity</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="animate__animated animate__fadeInRight">
                    <div className="bg-neutral-800 rounded-lg p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Quality Certifications</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#F7B614]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[#F7B614] font-semibold">ISO 9001:2015</h4>
                                    <p className="text-gray-300">Quality Management System</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#F7B614]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#F7B614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[#F7B614] font-semibold">ISO 14001:2015</h4>
                                    <p className="text-gray-300">Environmental Management</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-[#F7B614] rounded-lg">
                            <h4 className="text-neutral-900 font-bold text-lg mb-4">Manufacturing Excellence</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-neutral-900">Automated Production Lines</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-neutral-900">Advanced Quality Control</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-neutral-900">Modern Infrastructure</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Manufacturing;
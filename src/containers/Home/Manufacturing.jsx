import React from "react";
import SectionDivider from "../../components/SectionDivider";

const Manufacturing = () => {

  return (
    <>
      <SectionDivider type="mountain" flipY solidFill="#171717" />
      <section id="manufacturing" className="bg-neutral-900 text-white py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Tarpaulin Manufacturing Process
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-700"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div
                className="process-step flex flex-col md:flex-row items-center"
                data-step="1"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    Material Selection
                  </h4>
                  <p className="text-neutral-300">
                    We begin by sourcing high-quality raw plastic materials such
                    as polyethylene and polypropylene suited for tarpaulin
                    production.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-4 border-amber-400 z-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Material Selection"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-neutral-400 mt-2 text-right">
                    Step 1: Raw Materials
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="process-step flex flex-col md:flex-row-reverse items-center"
                data-step="2"
              >
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    Extrusion & Weaving
                  </h4>
                  <p className="text-neutral-300">
                    Plastic granules are melted and extruded into tapes which
                    are then woven into a strong fabric using high-speed looms.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-4 border-amber-400 z-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right mt-6 md:mt-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Extrusion & Weaving"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-neutral-400 mt-2">
                    Step 2: Fabric Creation
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="process-step flex flex-col md:flex-row items-center"
                data-step="3"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    Lamination & Coating
                  </h4>
                  <p className="text-neutral-300">
                    A layer of lamination is applied for waterproofing and UV
                    resistance. This enhances the strength and lifespan of the
                    tarpaulin.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-4 border-amber-400 z-10 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Lamination Process"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-neutral-400 mt-2 text-right">
                    Step 3: Lamination
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div
                className="process-step flex flex-col md:flex-row-reverse items-center"
                data-step="4"
              >
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    Cutting & Finishing
                  </h4>
                  <p className="text-neutral-300">
                    The laminated fabric is cut to standard or custom sizes,
                    followed by hemming and eyelet punching for reinforced
                    edges.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-4 border-amber-400 z-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right mt-6 md:mt-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Cutting & Finishing"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-neutral-400 mt-2">
                    Step 4: Finishing Touch
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div
                className="process-step flex flex-col md:flex-row items-center"
                data-step="5"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">
                    Inspection & Packaging
                  </h4>
                  <p className="text-neutral-300">
                    Each batch undergoes strict quality checks. The final
                    product is folded, packed, and labeled for delivery.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border-4 border-amber-400 z-10 flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Inspection & Packaging"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-xs text-neutral-400 mt-2 text-right">
                    Step 5: Ready to Ship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manufacturing;

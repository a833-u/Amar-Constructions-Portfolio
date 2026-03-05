import React, { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AvailabilityBadge from "./AvailabilityBadge";

import Mithil from "../assets/Images/Mithil-Kansara.png";
import Dipen from "../assets/Images/Dipen.png"; // replace with second founder image

export default function CreatorCardPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFounder, setSelectedFounder] = useState<any | null>(null);

  const founders = [
    {
      name: "Mithil Kansara",
      handle: "@mithssss",
      image: Mithil,
      description:
        "Mithil Kansara is an independent Civil contractor and Interior Designer and the CEO of Shivan Construction, based in Vadodara, Gujarat, India. I specialize in creating elegant, functional, and innovative interior spaces while delivering high-quality construction solutions for residential ,commercial and Industrial projects.",
    },
    {
      name: "Dipen Shah",
      handle: "@dipenshah",
      image: Dipen,
      description:
        "Dipen Shah is an entrepreneur with a strong background in electrical engineering and project execution. With years of experience in electrical consultancy and contracting, he leads diversified operations in civil construction, providing end-to-end solutions for residential, commercial, and industrial projects.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6 py-20">
      {/* Section Heading */}
      <div className="text-center mb-16 flex flex-col items-center">
        <AvailabilityBadge text="Our Leadership" />

        <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-6xl mt-6">
          Meet the Founders
        </SectionHeading>

        <p className="text-gray-400 mt-4 font-satoshi-light">
          Driven by passion, guided by experience — the minds behind our
          company.
        </p>
      </div>

      {/* Founder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(226,202,118,0.25)]"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-[#e2ca76] h-96">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-center">
                  <h2
                    className="text-4xl font-bold mb-3 font-author-bold"
                    style={{ color: "#e2ca76" }}
                  >
                    {founder.name}
                  </h2>

                  <p className="text-white text-base font-satoshi-light">
                    {founder.handle}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#e2ca76] px-6 py-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
                />

                <span className="font-bold text-lg font-satoshi-regular text-black truncate max-w-[170px]">
                  {founder.name}
                </span>
              </div>

              <button
                onClick={() => setSelectedFounder(founder)}
                className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="text-sm font-satoshi-light">See more</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFounder && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedFounder(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFounder(null)}
              className="border border-[#e2ca76] absolute top-4 right-4 p-2 bg-black rounded-full z-10"
            >
              <X size={24} className="text-[#e2ca76]" />
            </button>

            {/* Founder Image */}
            <img
              src={selectedFounder.image}
              alt={selectedFounder.name}
              className="w-full h-96 object-cover"
            />

            {/* Modal Content */}
            <div className="p-6 bg-black">
              <h3
                className="text-2xl font-author-bold mb-4"
                style={{ color: "#e2ca76" }}
              >
                {selectedFounder.name}
              </h3>

              <p className="text-white text-sm leading-relaxed font-satoshi-light">
                {selectedFounder.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

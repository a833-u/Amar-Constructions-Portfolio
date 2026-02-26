import { useState } from "react";
import { PixelImage } from "@/components/ui/pixel-image";

import kitchenImg from "@/assets/Images/kitchen.png";
import loftImg from "@/assets/Images/loft.jpg";
import bathImg from "@/assets/Images/bathroom.png";
import extensionImg from "@/assets/Images/extension.jpg";
import industrialImg from "@/assets/Images/industrial.jpg";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Kitchens",
    description:
      "We design and build stunning kitchens tailored to your style and needs. From modern spaces to timeless classics, we deliver quality craftsmanship.",
    image: kitchenImg,
  },
  {
    title: "Loft Conversions",
    description:
      "Transform unused lofts into beautiful living spaces with expert structural precision and finishing.",
    image: loftImg,
  },
  {
    title: "Bathrooms",
    description:
      "Elegant and functional bathroom renovations designed with comfort and durability in mind.",
    image: bathImg,
  },
  {
    title: "Extensions",
    description:
      "Expand your home seamlessly with high-quality structural extensions built to last.",
    image: extensionImg,
  },
  {
    title: "Industrial",
    description:
      "Specialized industrial construction and renovation services for commercial and industrial properties.",
    image: industrialImg,
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // first open
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close accordion
      // IMPORTANT: image remains unchanged
    } else {
      setActiveIndex(index);
      setCurrentImage(services[index].image);
    }
  };

  return (
    <section id="services" className="bg-black min-h-[100svh] py-24 px-6 flex flex-col items-center">
      <div className="text-center mb-20 flex flex-col items-center">
        {/* Small Badge */}
        <AvailabilityBadge text="Services" />

        {/* Main Heading */}
        <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-6xl mt-6">What we do</SectionHeading>

        {/* Sub Text */}
        <p className="text-gray-400 mt-2 max-w-2xl text-base sm:text-lg leading-relaxed font-satoshi-regular">
          Find out which one of our services fit the needs of your project.
        </p>
      </div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT IMAGE */}
        <div className="w-full h-[60svh] lg:h-[90svh] rounded-3xl overflow-hidden">
          <PixelImage key={currentImage} src={currentImage} grid="8x8" />
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-gray-700 pb-6">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <h3 className="text-2xl font-medium text-white font-satoshi-bold">
                    {service.title}
                  </h3>

                  <div
                    className={`transition-transform duration-300 text-white ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="text-3xl leading-none font-author-regular">+</span>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 leading-[1.3] font-satoshi-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

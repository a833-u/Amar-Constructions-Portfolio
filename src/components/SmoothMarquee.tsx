import React from "react";
import Arro from "../assets/Images/Arro.png";
import Cygnus from "../assets/Images/Cygnus.png";
import PrecidencyClub from "../assets/Images/Precidency-club.png";
import Hitachi from "../assets/hitachi_logo.svg";
import Autofit from "../assets/Images/Autofit.png";
import GDLab from "../assets/Images/GD-Lab.png";
import ERDA from "../assets/Images/ERDA.png";
import SectionHeading from "./SectionHeading";

const SmoothMarquee = () => {
  // Sample company logos - replace with your actual logos
  const logos = [
    { id: 1, src: Hitachi, alt: "Hitachi" },
    { id: 2, src: Arro, alt: "Arro" },
    { id: 3, src: Cygnus, alt: "Cygnus" },
    { id: 4, src: PrecidencyClub, alt: "Precidency Club" },
    { id: 5, src: Autofit, alt: "Autofit" },
    { id: 6, src: GDLab, alt: "GD Lab" },
    { id: 7, src: ERDA, alt: "ERDA" },
  ];

  // Create extended array for seamless loop (4x repetition)
  const extendedLogos = Array(4).fill(logos).flat();

  return (
    <div className="w-full bg-black py-16">
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-content {
          display: flex;
          gap: 48px;
          animation: marquee 60s linear infinite;
          width: fit-content;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          flex-basis: 160px;
          width: 160px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 0 20px rgba(226, 202, 118, 0.3);
          border: 1px solid #ffffff50;
          transition: box-shadow 0.3s ease;
        }

        .logo-item:hover {
          box-shadow: 0 0 30px rgba(226, 202, 118, 0.6);
        }

        .logo-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center w-full mt-6">
          <SectionHeading className="font-author-bold text-4xl sm:text-5xl md:text-4xl text-center">
            Companies we've Worked With
          </SectionHeading>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden bg-black rounded-xl shadow-2xl mt-8">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex items-center justify-start py-12 px-8 overflow-hidden">
            <div className="marquee-content">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="logo-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothMarquee;
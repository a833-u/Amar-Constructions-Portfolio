"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // close mobile menu
    }
  };

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 top-[2%] w-[90%] md:w-[60%] z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "3vw",
        boxShadow:
          "0 8px 32px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex py-[1vw] px-[1.5vw] w-full items-center justify-between">
        <Link to="/" className="figtree-bold text-white uppercase text-lg">
          AMAR Constructions
        </Link>

        <ul className="flex items-center gap-[2vw]">
          <li>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="text-white font-satoshi-regular cursor-pointer"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="text-white font-satoshi-regular cursor-pointer"
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="text-white font-satoshi-regular cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden px-5 py-4 items-center justify-between relative">
        <Link
          to="/"
          className="figtree-bold text-white uppercase text-base"
          onClick={() => setMobileOpen(false)}
        >
          AMAR Constructions
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-7 h-7 flex flex-col justify-center items-center"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-white">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="font-satoshi-regular"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="font-satoshi-regular"
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-satoshi-regular"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

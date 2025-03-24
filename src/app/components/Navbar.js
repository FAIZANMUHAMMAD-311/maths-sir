"use client";

import { useState } from "react";
import AboutSection from "./AboutSection"; // Import the component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutSection, setShowAboutSection] = useState(false); // Track about section visibility

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth Scrolling Function (Excluding "About Me & Courses")
  const handleSmoothScroll = (event, section) => {
    event.preventDefault();
    if (section === "#about") {
      setShowAboutSection(true); // Show AboutSection component
    } else {
      const targetSection = document.querySelector(section);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });
        setIsMenuOpen(false); // Close menu after clicking
      }
    }
  };

  return (
    <>
      <nav
        className="bg-blue-600 p-4 fixed w-full top-0 z-50 shadow-lg select-none"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-4">
          <div className="flex items-center space-x-3">
            <img
              src="/images/study.png"
              alt="Logo"
              className="h-12 w-12"
              draggable="false"
            />
            <a
              href="#home"
              className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300"
            >
              Ibrar Tahir
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 select-none">
            {["home", "about", "hire", "faqs", "access", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleSmoothScroll(e, `#${section}`)}
                    className="relative text-white text-lg font-medium transition-colors duration-300 hover:text-gray-200 group"
                  >
                    {section === "about"
                      ? "About Me & Courses"
                      : section === "access"
                      ? "Get Access"
                      : section === "contact"
                      ? "Contact Me"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } fixed top-16 left-0 right-0 bg-blue-600 shadow-lg md:hidden transition-all duration-300 ease-in-out select-none z-50`}
          >
            <ul className="flex flex-col items-center space-y-2 py-4 w-full">
              {["home", "about", "hire", "faqs", "access", "contact"].map(
                (section) => (
                  <li key={section} className="w-full text-center">
                    <a
                      href={`#${section}`}
                      onClick={(e) => handleSmoothScroll(e, `#${section}`)}
                      className="block text-white py-2 w-full hover:bg-blue-700 transition-colors duration-200 px-4"
                    >
                      {section === "about"
                        ? "About Me & Courses"
                        : section === "access"
                        ? "Get Access"
                        : section === "contact"
                        ? "Contact Me"
                        : section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Render AboutSection when clicked */}
      {showAboutSection && <AboutSection />}
    </>
  );
}

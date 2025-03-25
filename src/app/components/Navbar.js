"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth Scrolling Function
  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust for fixed navbar height
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300 cursor-pointer"
          >
            Ibrar Tahir
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 select-none">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Me & Courses" },
            { id: "hire", label: "Hire Me" },
            { id: "faqs", label: "FAQs" },
            { id: "access", label: "Get Access" },
            { id: "contact", label: "Contact Me" },
          ].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className="relative text-white text-lg font-medium transition-colors duration-300 hover:text-gray-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
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
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me & Courses" },
              { id: "hire", label: "Hire Me" },
              { id: "faqs", label: "FAQs" },
              { id: "access", label: "Get Access" },
              { id: "contact", label: "Contact Me" },
            ].map(({ id, label }) => (
              <li key={id} className="w-full text-center">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleSmoothScroll(e, id)}
                  className="block text-white py-2 w-full hover:bg-blue-700 transition-colors duration-200 px-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

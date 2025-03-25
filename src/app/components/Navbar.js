"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // If using Next.js

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname?.(); // Optional for Next.js

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Enhanced Smooth Scrolling Function
  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (pathname && pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerOffset = 80; // Adjust this value if needed
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, null, `#${sectionId}`);
      setIsMenuOpen(false);
    } else {
      // Fallback for when element isn't found
      window.location.href = `/#${sectionId}`;
    }
  };

  // Rest of your code remains the same...
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

"use client";

import { useState } from 'react';
import AboutSection from './AboutSection';

export default function CoursesSection() {
  const [isCoursesVisible, setIsCoursesVisible] = useState(false);

  const toggleSwipe = () => setIsCoursesVisible(!isCoursesVisible);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* About Section */}
      <section
        id="about"
        className={`absolute inset-0 swipe-transition select-none ${
          isCoursesVisible ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <AboutSection />
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className={`absolute inset-0 swipe-transition select-none ${
          isCoursesVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="text-center mb-10 sm:mb-14"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                Courses We Offer
              </h2>
              <div className="mt-2 h-1 w-16 sm:w-20 bg-blue-600 mx-auto"></div>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto">
                Explore my tailored courses designed to help you excel in math, statistics, and physics.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6">
              {[
                { title: 'Matriculation Part 1', subjects: 'Math & Physics', class: 'Class 9', delay: 100 },
                { title: 'Matriculation Part 2', subjects: 'Math & Physics', class: 'Class 10', delay: 200 },
                { title: 'Intermediate Part 1', subjects: 'Math & Statistics', class: 'Class 11', delay: 300 },
                { title: 'Intermediate Part 2', subjects: 'Math & Statistics', class: 'Class 12', delay: 400 },
              ].map((course) => (
                <div
                  key={course.title}
                  className="w-[90%] sm:w-full mx-auto bg-white bg-opacity-90 shadow-lg rounded-lg p-3 sm:p-5 text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl mobile-box"
                  data-aos="fade-up"
                  data-aos-delay={course.delay}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-blue-600">{course.title}</h3>
                  <p className="mt-2 text-gray-700 text-xs sm:text-sm">{course.subjects}</p>
                  <p className="mt-1 text-xs text-gray-500">{course.class}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Swipe Button */}
      <button
        onClick={toggleSwipe}
        className="fixed top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 w-10 h-10 flex items-center justify-center text-lg sm:w-12 sm:h-12 sm:text-2xl font-bold"
        style={{ left: isCoursesVisible ? '1rem' : 'auto', right: isCoursesVisible ? 'auto' : '1rem' }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {isCoursesVisible ? '←' : '→'}
      </button>

      {/* Swipe Transition Style */}
      <style jsx>{`
        .swipe-transition {
          transition: transform 0.5s ease-in-out;
        }

        /* Media query for mobile devices */
        @media (max-width: 640px) {
          .mobile-box {
            width: 70%; /* Adjust this value to decrease the width of the boxes */
          }
        }
      `}</style>
    </div>
  );
}

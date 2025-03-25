import { useEffect, useState } from "react";

export default function HomeSection() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNote(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="home"
      className="h-screen w-screen flex items-center justify-center bg-blue-600 text-white relative select-none overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Unlock Your Math Potential
          </h1>
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Expert tutoring in matric math & physics, intermediate math & statistics, 
            and entrance exam math preparation. Build a strong foundation with structured, 
            engaging lessons tailored to your learning style and academic goals.
          </p>
          <div
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <a
              href="#hire"
              onClick={(e) => handleSmoothScroll(e, '#hire')}
              className="bg-white text-blue-600 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#access"
              onClick={(e) => handleSmoothScroll(e, '#access')}
              className="bg-transparent border-2 border-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              Get Access
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Note - Fixed Version */}
      {showNote && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 w-full overflow-x-hidden z-30 bg-blue-700/30 py-2">
          <div className="w-full overflow-hidden">
            <div className="marquee-content whitespace-nowrap">
              NOTE: Online service is available only in Pakistan, and home tuition is offered only in Faisalabad.
            </div>
          </div>
        </div>
      )}

      {/* YouTube Floating Button */}
      <a
        href="https://www.youtube.com/@IbrarTheMathematician"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full flex items-center shadow-lg transition-transform duration-300 hover:scale-110 z-30"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="w-5 sm:w-6 h-5 sm:h-6 block"
        />
        <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">
          YouTube
        </span>
      </a>

      {/* Phone Floating Button */}
      <a
        href="tel:+923046616905"
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full flex items-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse z-30"
      >
        <img
          src="/images/phone-call.png"
          alt="Call Logo"
          className="w-5 sm:w-6 h-5 sm:h-6 block"
        />
        <span className="ml-2 text-sm sm:text-base font-semibold">
          +92 304 6616905
        </span>
      </a>

      {/* Global Styles */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Component Styles */}
      <style jsx>{`
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 640px) {
          .text-center p {
            text-align: justify;
            text-align-last: center;
            hyphens: auto;
            word-spacing: -0.05em;
          }
          .marquee-content {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}

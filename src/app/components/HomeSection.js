import { useEffect, useState } from "react";

export default function HomeSection() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNote(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 relative select-none overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto w-full px-4">
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
            className="bg-white text-blue-600 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
          <a
            href="#access"
            className="bg-transparent border-2 border-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            Get Access
          </a>
        </div>
      </div>

      {/* Marquee Note */}
      {showNote && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 w-full overflow-hidden z-30 bg-blue-700/30 py-2">
          <div className="marquee-container">
            <p className="marquee-text">
              NOTE: Online service is available only in Pakistan, and home tuition is offered only in Faisalabad.
            </p>
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
        href="tel:+92 304 6616905"
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

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .marquee-text {
          display: inline-block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          animation: marquee 20s linear infinite;
          min-width: 100%;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}

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
      className="h-screen w-full flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 relative select-none overflow-hidden"
    >
      {/* Main Content */}
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

      {/* Marquee Note */}
      {showNote && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 w-screen overflow-hidden z-30 bg-blue-700/30 py-2">
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
        aria-label="YouTube Channel"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="w-5 sm:w-6 h-5 sm:h-6 block"
          loading="lazy"
        />
        <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">
          YouTube
        </span>
      </a>

      {/* Phone Floating Button */}
      <a
        href="tel:+923046616905"
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full flex items-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse z-30"
        aria-label="Call Now"
      >
        <img
          src="/images/phone-call.png"
          alt="Call Logo"
          className="w-5 sm:w-6 h-5 sm:h-6 block"
          loading="lazy"
        />
        <span className="ml-2 text-sm sm:text-base font-semibold">
          +92 304 6616905
        </span>
      </a>

      {/* Background Elements (optional) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-text {
          display: inline-block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          animation: marquee 20s linear infinite;
          padding-left: 100%;
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

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (max-width: 640px) {
          .text-center p {
            text-align: justify;
            text-align-last: center;
            hyphens: auto;
            word-spacing: -0.05em;
          }
          
          .marquee-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}

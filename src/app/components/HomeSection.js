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
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-blue-600 text-white relative select-none overflow-hidden px-4"
    >
      {/* Main Content Container */}
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight" data-aos="fade-right" data-aos-duration="1000">
          Unlock Your Math Potential
        </h1>
        <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Expert tutoring in matric math & physics, intermediate math & statistics, 
          and entrance exam math preparation. Build a strong foundation with structured, 
          engaging lessons tailored to your learning style and academic goals.
        </p>
        <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a
            href="#hire"
            onClick={(e) => handleSmoothScroll(e, "#hire")}
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
          <a
            href="#access"
            onClick={(e) => handleSmoothScroll(e, "#access")}
            className="bg-transparent border-2 border-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            Get Access
          </a>
        </div>
      </div>

      {/* Marquee Note - Responsive */}
      {showNote && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 w-full overflow-hidden z-30 bg-blue-700/30 py-2">
          <div className="w-full whitespace-nowrap animate-marquee text-sm sm:text-base text-white font-medium uppercase tracking-wide">
            NOTE: Online service is available only in Pakistan, and home tuition is offered only in Faisalabad.
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="absolute bottom-4 sm:bottom-6 flex justify-between w-full px-6">
        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@IbrarTheMathematician"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg transition-transform duration-300 hover:scale-110 z-30"
        >
          <img src="/youtube-icon.png" alt="YouTube" className="w-5 sm:w-6 h-5 sm:h-6" />
          <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">YouTube</span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+923046616905"
          className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse z-30"
        >
          <img src="/phone-call.png" alt="Call" className="w-5 sm:w-6 h-5 sm:h-6" />
          <span className="ml-2 text-sm sm:text-base font-semibold">+92 304 6616905</span>
        </a>
      </div>

      {/* Styles */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}

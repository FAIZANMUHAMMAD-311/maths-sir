import { useEffect, useState } from "react";

export default function HomeSection() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    // Show the note after a short delay
    const timer = setTimeout(() => {
      setShowNote(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 relative select-none overflow-hidden overflow-x-hidden"
    >
      <div className="text-center max-w-3xl mx-auto w-full">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Unlock Your Math Potential
        </h1>
        
        {/* Paragraph container with fixed height for exactly 3 lines */}
        <div className="mt-6 h-[4.5rem] sm:h-[5.4rem] md:h-[6.3rem] flex items-center justify-center">
          <p
            className="text-base sm:text-lg md:text-xl text-gray-200 mx-auto text-justify leading-relaxed w-full max-w-2xl px-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Expert tutoring in matric math & physics, intermediate math & statistics, and entrance exam math prep. Build a strong foundation with structured, engaging lessons tailored to your needs.
          </p>
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <a
            href="#hire"
            className="bg-white text-blue-600 px-5 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Hire Me
          </a>
          <a
            href="#access"
            className="bg-transparent border border-white px-5 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Get Access
          </a>
        </div>
      </div>

      {/* Marquee Note */}
      {showNote && (
        <div className="absolute bottom-16 sm:bottom-20 left-0 w-full overflow-hidden z-30">
          <div className="w-[200%] animate-marquee">
            <p className="text-sm sm:text-lg text-gray-300 opacity-90 font-medium whitespace-nowrap inline-block">
              NOTE: Online service is available only in Pakistan, and home tuition
              is offered only in Faisalabad.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* Added non-breaking spaces for spacing between repetitions */}
              NOTE: Online service is available only in Pakistan, and home tuition
              is offered only in Faisalabad.
            </p>
          </div>
        </div>
      )}

      {/* YouTube Floating Button */}
      <a
        href="https://www.youtube.com/@IbrarTheMathematician"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110 z-30"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="w-4 sm:w-6 h-4 sm:h-6 block"
        />
        <span className="ml-2 text-xs sm:text-base font-semibold hidden sm:inline">
          YouTube
        </span>
      </a>

      {/* Phone Floating Button */}
      <a
        href="tel:+92 304 6616905"
        className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse z-30"
      >
        <img
          src="/images/phone-call.png"
          alt="Call Logo"
          className="w-4 sm:w-6 h-4 sm:h-6 block"
        />
        <span className="ml-2 text-xs sm:text-base font-semibold">
          +92 304 6616905
        </span>
      </a>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

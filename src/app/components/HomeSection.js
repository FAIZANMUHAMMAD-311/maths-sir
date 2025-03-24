export default function HomeSection() {
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-blue-600 text-white px-6 relative select-none">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" data-aos="fade-right" data-aos-duration="1000">
            Unlock Your Math Potential
          </h1>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            Professional math tutoring tailored to your needs. Whether you&apos;re struggling with basics or aiming for advanced concepts, I&apos;m here to help you succeed.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="#hire" className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Hire Me</a>
            <a href="#access" className="bg-transparent border border-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Get Access</a>
          </div>
        </div>
  
        <div className="absolute bottom-20 left-0 w-full bg-transparent z-30">
          <p className="whitespace-nowrap animate-marquee text-base sm:text-lg text-gray-300 opacity-90 font-medium">
            NOTE: Online service is available only in Pakistan, and home tuition is offered only in Faisalabad.
          </p>
        </div>
  
        <a href="tel:+92 304 6616905" className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse z-30">
          <img src="/images/phone-call.png" alt="Call Logo" className="w-5 sm:w-6 h-5 sm:h-6 block" />
          <span className="ml-2 text-sm sm:text-base font-semibold">+92 304 6616905</span>
        </a>

        <a href="https://www.youtube.com/@IbrarTheMathematician" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse z-30">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" className="w-5 sm:w-6 h-5 sm:h-6 block" />
          <span className="ml-2 text-sm sm:text-base font-semibold">YouTube</span>
        </a>
  
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
    );
}

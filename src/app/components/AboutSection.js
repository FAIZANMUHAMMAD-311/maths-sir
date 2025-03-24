export default function AboutSection() {
    return (
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 px-3 sm:px-4 py-6 sm:py-8 lg:py-16 select-none">
        <div className="container mx-auto">
          <div className="text-center mb-5 sm:mb-10" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-600">About Me</h2>
            <div className="mt-1 sm:mt-2 h-1 w-14 sm:w-20 bg-blue-600 mx-auto"></div>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8">
            <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
              <img src="/images/Me.jpg" alt="Ibrar Tahir" className="rounded-lg shadow-xl w-28 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-cover border-4 border-white" draggable="false" />
              <div className="mt-3 sm:mt-6 bg-white bg-opacity-90 shadow-lg rounded-lg p-3 sm:p-6 w-40 sm:w-56 md:w-64 text-center">
                <p className="text-xs sm:text-base font-semibold text-blue-600">Name: <span className="font-normal text-gray-700">Ibrar Tahir</span></p>
                <p className="mt-2 text-xs sm:text-base font-semibold text-blue-600">Experience: <span className="font-normal text-gray-700">5+ Years</span></p>
              </div>
            </div>
  
            <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <p className="text-base sm:text-xl md:text-2xl font-bold text-blue-600 text-center md:text-left">Dedicated Maths Teacher</p>
              <p className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-600 text-center md:text-left leading-relaxed">
                I am a passionate math tutor with over 5 years of experience in home tutoring and academy classes, dedicated to helping students excel in mathematics and statistics. I hold a BS in Mathematics and an MPhil in Mathematics from GC University, Faisalabad. My teaching philosophy focuses on building a strong foundation in mathematical concepts while fostering a deep love for learning. With a structured yet engaging approach, I strive to make math and statistics accessible and enjoyable for students of all levels.
              </p>
              <p className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl font-bold text-blue-600 text-center md:text-left">Currently Teaching</p>
              <div className="mt-3 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 w-[90%] sm:w-full mx-auto">
                <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-3 sm:p-6 text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 w-full">
                  <h3 className="text-sm sm:text-lg font-semibold text-blue-600">Math & Physics</h3>
                  <p className="mt-1 sm:mt-2 text-gray-700 text-xs sm:text-base">Classes 9 & 10</p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">Matriculation</p>
                </div>
                <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-3 sm:p-6 text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 w-full">
                  <h3 className="text-sm sm:text-lg font-semibold text-blue-600">Math & Statistics</h3>
                  <p className="mt-1 sm:mt-2 text-gray-700 text-xs sm:text-base">Classes 11 & 12</p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

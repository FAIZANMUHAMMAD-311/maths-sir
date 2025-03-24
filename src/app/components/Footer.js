import { AiFillFacebook, AiFillYoutube, AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-blue-600 pt-1">
      <footer className="pb-5 pt-3 mt-20 w-full flex justify-center container mx-auto">
        <div>
          {/* Grid for Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 px-7 md:px-[56px]">
            {/* About Me Section */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">About Me</h4>
              <p className="text-sm text-white">
                Dedicated math tutor with years of experience helping students
                understand and excel in mathematics. My mission is to make math
                learning accessible and enjoyable for everyone, no matter their
                level.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#home" className="text-sm hover:text-gray-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm hover:text-gray-200">
                    About Me & Courses
                  </a>
                </li>
                <li>
                  <a href="#hire" className="text-sm hover:text-gray-200">
                    Hire Me
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm hover:text-gray-200">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information Section */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-white">
                <li className="text-sm">Email: math.tutor@example.com</li>
                <li className="text-sm">Phone: +92 123 4567890</li>
                <li className="text-sm">Location: Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-sm mt-6 text-white">
            <p>&copy; {currentYear} Math Tutor. All rights reserved.</p>
          </div>
        </div>

        {/* Floating Social Media Buttons */}
        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col gap-4 z-30">
          {/* YouTube Floating Button */}
          <a
            href="https://www.youtube.com/@IbrarTheMathematician"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube Logo"
              className="w-5 sm:w-6 h-5 sm:h-6 block"
            />
            <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">YouTube</span>
          </a>

          {/* Facebook Floating Button */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <AiFillFacebook className="w-5 sm:w-6 h-5 sm:h-6 block" />
            <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">Facebook</span>
          </a>

          {/* TikTok Floating Button */}
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <AiFillTikTok className="w-5 sm:w-6 h-5 sm:h-6 block" />
            <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">TikTok</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 select-none">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Flex container for Quick Links and Social Links */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Side: Quick Links and Get in Touch */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              {['home', 'about', 'hire', 'faqs', 'access', 'contact'].map((section) => (
                <a key={section} href={`#${section}`} className="hover:text-gray-200 block">
                  {section === 'about' ? 'About Me & Courses' : section === 'access' ? 'Get Access' : section === 'contact' ? 'Contact Me' : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            {/* Get in Touch Section */}
            <h3 className="text-lg font-semibold mt-8 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {/* Phone Number */}
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
                  alt="Phone Icon"
                  className="w-6 h-6 mr-3"
                />
                <a
                  href="tel:+92 304 6616905"
                  className="text-white hover:text-gray-200 transition duration-300 text-sm md:text-base font-medium"
                >
                  +92 304 6616905
                </a>
              </div>

              {/* Email Address */}
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email Icon"
                  className="w-6 h-6 mr-3"
                />
                <a
                  href="mailto:ibrarthemathematician@gmail.com"
                  className="text-white hover:text-gray-200 transition duration-300 text-sm md:text-base font-medium break-words"
                >
                  ibrarthemathematician@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Social Links */}
          <div className="flex-1 md:max-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex flex-col gap-4">
              {/* YouTube Floating Button */}
              <a
                href="https://www.youtube.com/@IbrarTheMathematician"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center justify-center md:justify-start gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube Logo"
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold">YouTube</span>
              </a>

              {/* LinkedIn Floating Button */}
              <a
                href="https://www.linkedin.com/in/ibrar-tahir-2519b120a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center justify-center md:justify-start gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn Logo"
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base">© 2025 Math Tutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 select-none">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Flex container for three columns */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Container for Quick Links + Get in Touch (side by side on mobile) */}
          <div className="flex flex-row flex-wrap gap-8 md:flex-1 md:flex-nowrap">
            {/* Left Column: Quick Links */}
            <div className="flex-1 min-w-[160px]">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3 text-sm md:text-base">
                {['home', 'about', 'hire', 'faqs', 'access', 'contact'].map((section) => (
                  <a 
                    key={section} 
                    href={`#${section}`} 
                    className="hover:text-gray-200 block"
                  >
                    {section === 'about' ? 'About Me & Courses' : 
                     section === 'access' ? 'Get Access' : 
                     section === 'contact' ? 'Contact Me' : 
                     section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column: Get in Touch */}
            <div className="flex-1 min-w-[160px]">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9946/9946341.png"
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
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
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
          </div>

          {/* Right Column: Social Links (stays full width on mobile) */}
          <div className="flex-1 md:max-w-[220px]">
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* YouTube Button */}
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

              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/share/1C8JJJDGXf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-4 py-2 rounded-full flex items-center justify-center md:justify-start gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook Logo"
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold">Facebook</span>
              </a>

              {/* TikTok Button */}
              <a
                href="https://www.tiktok.com/@ibrarthemathematician?_t=ZS-8v3u5UDECzn&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center md:justify-start gap-2 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.1A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
                <span className="text-sm font-semibold">TikTok</span>
              </a>

              {/* LinkedIn Button */}
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

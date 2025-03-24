export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 select-none">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Flex container for Quick Links and Social Links */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side: Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              {['home', 'about', 'hire', 'faqs', 'access', 'contact'].map((section) => (
                <a key={section} href={`#${section}`} className="hover:text-gray-200 block">
                  {section === 'about' ? 'About Me & Courses' : section === 'access' ? 'Get Access' : section === 'contact' ? 'Contact Me' : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
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

            {/* LinkedIn Floating Button */}
            <a
              href="https://www.linkedin.com/in/ibrar-tahir-2519b120a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-3 rounded-full flex items-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn Logo"
                className="w-5 sm:w-6 h-5 sm:h-6 block"
              />
              <span className="ml-2 text-sm sm:text-base font-semibold hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center">
          <p className="text-lg">© 2025 Math Tutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

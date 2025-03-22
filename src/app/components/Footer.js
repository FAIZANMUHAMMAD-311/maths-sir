export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white py-8 select-none">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg">© 2025 Math Tutor. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {['home', 'about', 'hire', 'faqs', 'access', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} className="hover:text-gray-200">
                {section === 'about' ? 'About Me & Courses' : section === 'access' ? 'Get Access' : section === 'contact' ? 'Contact Me' : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <a href="https://www.youtube.com/@IbrartheMathematician" target="_blank" className="hover:text-gray-200">YouTube</a>
            <a href="https://www.linkedin.com/in/ibrar-tahir-2519b120a" target="_blank" className="hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
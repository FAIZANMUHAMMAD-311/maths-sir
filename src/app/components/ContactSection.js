"use client";

export default function ContactSection() {
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const classInfo = e.target.class.value.trim();
    const message = e.target.message.value.trim();

    const whatsappMessage = `Hello, my name is ${name}.\n📧 Email: ${email}\n📚 Class: ${classInfo}\n📝 Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    if (encodedMessage.length > 2000) {
      alert('The message is too long to be sent via WhatsApp. Please shorten it.');
      return;
    }

    const whatsappLink = `https://wa.me/+923046616905?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 py-12 select-none">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">Connect via WhatsApp</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">Have questions? Feel free to reach out!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 select-none">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center md:text-left">Send a Message</h3>
            <form onSubmit={sendToWhatsApp} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="w-full p-3 rounded-lg text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded-lg border text-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
              <input 
                type="text" 
                name="class" 
                placeholder="Your Class" 
                className="w-full p-3 rounded-lg border text-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="w-full p-3 rounded-lg border text-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                rows="4" 
                required 
              />
              <button 
                type="submit" 
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center md:text-left">Get in Touch</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-center md:text-left">
              If you have any questions or want to schedule a class, feel free to reach out anytime. Your satisfaction is my priority!
            </p>
            
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/9946/9946341.png" 
                  alt="Phone Icon" 
                  className="w-6 h-6 mr-3" 
                />
                <a 
                  href="tel:+92 304 6616905" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 text-base md:text-lg font-medium"
                >
                  +92 304 6616905
                </a>
              </div>
              
              {/* Email - Modified to break at @ */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
                <div className="flex items-center mb-1 sm:mb-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                    alt="Email Icon" 
                    className="w-6 h-6 mr-3 flex-shrink-0" 
                  />
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
                    ibrarthemathematician
                  </span>
                </div>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium sm:ml-0 ml-9 sm:pl-0 pl-9">
                  @gmail.com
                </span>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center justify-center md:justify-start">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                  alt="LinkedIn Icon" 
                  className="w-6 h-6 mr-3" 
                />
                <a 
                  href="https://www.linkedin.com/in/ibrar-tahir-2519b120a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition duration-300 text-base md:text-lg font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef } from 'react';

const HireMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+92',
    message: '',
  });
  const buttonRef = useRef(null);
  const emailRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEmailFocus = () => {
    if (!formData.email.includes('@')) {
      setFormData({ ...formData, email: formData.email + '@gmail.com' });
      // Move cursor before @ symbol
      setTimeout(() => {
        const emailInput = emailRef.current;
        const atIndex = emailInput.value.indexOf('@');
        emailInput.setSelectionRange(atIndex, atIndex);
      }, 0);
    }
  };

  const handlePhoneFocus = (e) => {
    if (e.target.value === '') {
      setFormData({ ...formData, phone: '+92' });
    }
  };

  const handlePhoneChange = (e) => {
    // Prevent removing +92 from the start
    if (e.target.value.startsWith('+92') || e.target.value === '') {
      setFormData({ ...formData, phone: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonePattern = /^\+92\d{10}$/;

    if (phonePattern.test(formData.phone)) {
      setIsSubmitted(true);

      try {
        // Send form data to the API route
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        const result = await response.json();
        console.log(result.message);

        // Button animation
        const button = buttonRef.current;
        button.disabled = true;
        let angle = 0,
          direction = 1,
          scale = 1;
        const swingInterval = setInterval(() => {
          angle += direction * 10;
          scale = scale === 1 ? 1.1 : 1;
          button.style.transform = `rotate(${angle}deg) scale(${scale})`;
          if (angle >= 10 || angle <= -10) direction *= -1;
        }, 120);

        setTimeout(() => {
          clearInterval(swingInterval);
          button.style.transform = 'rotate(0deg) scale(1)';
          button.style.opacity = '0.7';
        }, 2500);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '+92', message: '' });
          button.disabled = false;
          button.style.opacity = '1';
          button.style.boxShadow = 'none';
          button.style.transform = 'scale(1)';
        }, 8000);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
        setIsSubmitted(false);
      }
    } else {
      alert('Please enter a valid phone number starting with +92 and 10 digits (e.g., +923001234567).');
    }
  };

  return (
    <section
      id="hire"
      className="min-h-screen flex items-center justify-center bg-blue-600 text-white px-6 py-16 md:py-24 select-none"
    >
      <div className="w-full max-w-3xl text-center">
        <h2
          className="text-4xl md:text-5xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Hire Me
        </h2>
        <p
          className="mt-8 text-lg md:text-xl text-gray-200 mx-auto max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Interested in working with me? Fill out the form below, and I&apos;ll get back to you shortly.
        </p>

        <form
          id="hireForm"
          onSubmit={handleSubmit}
          className="mt-12 max-w-lg mx-auto space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            required
          />
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="yourname@gmail.com"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleEmailFocus}
            className="w-full p-4 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            required
          />
          <input
            type="tel"
            id="phone"
            placeholder="+923001234567"
            value={formData.phone}
            onChange={handlePhoneChange}
            onFocus={handlePhoneFocus}
            className="w-full p-4 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            pattern="\+92\d{10}"
            required
          />
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            rows="5"
            required
          />
          <button
            ref={buttonRef}
            type="submit"
            className={`w-full px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${
              isSubmitted
                ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(40,167,69,0.8)]'
                : 'bg-white text-blue-600 hover:bg-gray-100'
            }`}
          >
            {isSubmitted ? 'Mail sent successfully ✅' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default HireMe;

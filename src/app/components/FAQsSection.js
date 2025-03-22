"use client";

import { useState } from 'react';

export default function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: 'What subjects do you teach?', answer: 'I teach all levels of math, from basic arithmetic to advanced calculus.' },
    { question: 'How much do you charge?', answer: 'My rates vary depending on the level and duration of tutoring. Contact me for details.' },
    { question: 'What is your teaching methodology?', answer: 'I focus on building a strong foundation and fostering a love for learning through interactive and engaging lessons.' },
    { question: 'Do you offer online tutoring?', answer: 'Yes, I offer both in-person and online tutoring sessions for your convenience.' },
    { question: 'How do I schedule a session?', answer: 'You can schedule a session by filling out the "Hire Me" form or contacting me directly.' },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 min-h-screen flex items-center justify-center bg-gray-100 px-4 select-none">
      <div className="text-center w-full max-w-3xl min-w-0 break-words">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4" data-aos="fade-up" data-aos-duration="1000">FAQs</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12" data-aos="fade-up" data-aos-duration="1000"></div>
        <div className="text-left text-black space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 + index * 100}>
              <div className="faq-toggle font-bold text-lg flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="icon text-xl transition-transform duration-300">{openFAQ === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-content overflow-hidden transition-all duration-300 ease-out ${openFAQ === index ? 'max-h-40' : 'max-h-0'}`}>
                <p className="text-gray-700 pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
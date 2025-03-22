"use client"
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import HireSection from './components/HireSection';
import FAQsSection from './components/FAQsSection';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HomeSection />
      <CoursesSection />
      <HireSection />
      <FAQsSection />
      <AccessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
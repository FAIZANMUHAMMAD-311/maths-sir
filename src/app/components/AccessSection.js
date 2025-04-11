"use client";

import { useState, useRef } from "react";

export default function AccessSection() {
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const buttonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.accessEmail.value.trim();

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/give-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      setFormStatus("success");
      animateButton();
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      alert(error.message || "Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const animateButton = () => {
    const button = buttonRef.current;
    if (!button) return;

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
      button.style.transform = "rotate(0deg) scale(1)";
      button.style.opacity = "0.7";
      
      setTimeout(() => {
        setFormStatus(null);
        button.disabled = false;
        button.style.opacity = "1";
      }, 5000);
    }, 2500);
  };

  return (
    <section
      id="access"
      className="min-h-screen flex items-center justify-center bg-blue-600 text-white select-none px-6 py-16 md:py-24"
    >
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
          Get Access to Content
        </h2>
        <p className="mt-8 text-lg md:text-xl text-gray-200 mx-auto max-w-2xl" data-aos="fade-up">
          Register with your email to access exclusive study materials on Google Drive.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 max-w-lg mx-auto space-y-6">
          <input
            type="email"
            name="accessEmail"
            placeholder="Your Email"
            className="bg-white w-full p-4 rounded-lg text-gray-900 shadow-md"
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          />
          <button
            ref={buttonRef}
            type="submit"
            disabled={isLoading || formStatus === "success"}
            className={`w-full px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${
              formStatus === "success"
                ? "bg-green-500 text-white shadow-[0_0_15px_rgba(40,167,69,0.8)]"
                : formStatus === "error"
                ? "bg-red-500 text-white"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            {isLoading
              ? "Processing..."
              : formStatus === "success"
              ? "Access Granted ✅ | Check Your Email 📩"
              : formStatus === "error"
              ? "Error - Try Again"
              : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
}

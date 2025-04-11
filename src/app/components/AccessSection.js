"use client";

import { useState, useRef } from "react";

export default function AccessSection() {
  const [formStatus, setFormStatus] = useState(null);
  const [username, setUsername] = useState("");
  const buttonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = `${username}@gmail.com`;

    // Validate email format
    if (!/^[a-z0-9._%+-]+$/.test(username)) {
      alert("Please enter a valid Gmail username.");
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

      if (!response.ok) throw new Error("Failed to send email");

      const result = await response.json();
      console.log(result.message);
      setFormStatus("success");

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
        button.style.transform = "rotate(0deg) scale(1)";
        button.style.opacity = "0.7";
      }, 2500);

      setTimeout(() => {
        setFormStatus(null);
        setUsername("");
        button.disabled = false;
        button.style.opacity = "1";
        button.style.boxShadow = "none";
        button.style.transform = "scale(1)";
      }, 8000);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <section
      id="access"
      className="min-h-screen flex items-center justify-center bg-blue-600 text-white select-none px-6 py-16 md:py-24"
    >
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Get Access to Content</h2>
        <p className="mt-8 text-lg md:text-xl text-gray-200 mx-auto max-w-2xl">
          Register with your Gmail to access exclusive study materials on Google Drive.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-lg mx-auto space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              name="accessUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              placeholder="yourname"
              className="bg-white w-full p-4 pr-28 rounded-lg text-gray-900 shadow-md"
              pattern="^[a-z0-9._%+-]+$"
              title="Only valid Gmail username characters allowed."
              required
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-600 pointer-events-none text-base sm:text-lg">
              @gmail.com
            </span>
          </div>
          <button
            ref={buttonRef}
            type="submit"
            disabled={formStatus === "success"}
            className={`w-full px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${
              formStatus === "success"
                ? "bg-green-500 text-white shadow-[0_0_15px_rgba(40,167,69,0.8)]"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            {formStatus === "success"
              ? "Access Granted ✅ | Check Your Gmail 📩"
              : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
}

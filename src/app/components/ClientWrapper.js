"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null; // No UI, just an effect
}

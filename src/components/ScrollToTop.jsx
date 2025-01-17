'use client'

import { useState, useEffect, useCallback } from "react";
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button and update scroll progress
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    setScrollProgress(progress);
    setIsVisible(scrollTop > 300);
  }, []);

  useEffect(() => {
    let rafId;

    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: `linear-gradient(135deg, #16a34a, #22c55e, #4ade80)`,
        color: "#ffffff",
        boxShadow: "0px 4px 10px rgba(34, 197, 94, 0.5)",
        border: "3px solid #16a34a",
      }}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#16a34a ${scrollProgress}%, #111827 ${scrollProgress}%)`,
          borderRadius: "50%",
          padding: "4px",
        }}
      >
        {/* Inner Circle with Outline */}
        <div
          className="flex items-center justify-center w-full h-full rounded-full"
          style={{
            background: "#111827",
            border: "2px solid #4ade80", // Inner Outline
          }}
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;

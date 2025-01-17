'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css'; 
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match duration with your CSS animation

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger on route change

  return (
    <>
    <html lang="en">
      <body>{children}
      <ScrollToTop />

      </body>
    </html>
    </>
  );
}

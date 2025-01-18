'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const footerItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Complete Intake', href: '/completeintake' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A2816] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-[#00FF7F]">AbdulHadi</span>-Drive Safely
            </h2>
            <p className="text-gray-300 max-w-xs">
              Your go-to place for amazing services
            </p>
          </div>
{/* Quick Links */}
<div>
            <h3 className="text-lg font-semibold mb-4 text-[#00FF7F]">Quick Links</h3>
            <nav className="space-y-3">
              {footerItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-[#00FF7F] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Contact Info */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00FF7F]">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <a href="mailto:abdulhadi.76543@gmail.com" className="flex items-center gap-2 hover:text-[#00FF7F]">
                abdulhadi.76543@gmail.com
              </a>
              <p className="flex items-center gap-2">Karachi, SD, Pakistan</p>
            </div>
          </div> */}

          

          

          {/* Social Links */}
          <div className='pr-2'>
            <h3 className="text-lg font-semibold mb-4 text-[#00FF7F]">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { href: "https://facebook.com/theabdulhadi", icon: Facebook, label: "Facebook" },
                { href: "https://instagram.com/abdulhadicodes", icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com/in/-abdulhadi-", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full bg-[#9ca3af]  hover:bg-[#00FF66] transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-[#092615]  " />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">© 2024 AbdulHadi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

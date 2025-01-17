'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User2, Briefcase, BookOpen, ChevronDown, Phone, Layers, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User2 },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Services', href: '/services', icon: Layers },
  { 
    name: 'Contact', 
    icon: Phone,
    dropdown: [
      { name: 'Contact', href: '/contact' },
      { name: 'Complete intake', href: '/completeintake' },
    ],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="fixed top-4 w-full px-4 z-50">
      <motion.nav 
        className="
          flex items-center justify-between max-w-3xl px-4 py-2 mx-auto 
          bg-black/80 backdrop-blur-sm rounded-full border border-white/10
        "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="text-white text-sm font-semibold">
          AbdulHadi.
        </Link>
        
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <div key={item.name} className="relative">
                {item.href ? (
                  <Link href={item.href}>
                    <motion.div
                      className={`
                        flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-200 
                        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.90 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-gray-400 cursor-pointer hover:text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.90 }}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </motion.div>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 py-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link key={dropdownItem.name} href={dropdownItem.href}>
                            <motion.div
                              className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {dropdownItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden md:hidden"
          >
            <div className="py-2 flex flex-col">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.href ? (
                    <Link href={item.href} onClick={closeMenu}>
                      <motion.div
                        className="flex items-center gap-2 px-4 py-3 text-white hover:bg-gray-700"
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.div
                      className="flex items-center gap-2 px-4 py-3 text-white cursor-pointer hover:bg-gray-700"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                      {item.dropdown && <ChevronDown className="w-5 h-5 ml-auto" />}
                    </motion.div>
                  )}

                  {item.dropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-800"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link key={dropdownItem.name} href={dropdownItem.href} onClick={closeMenu}>
                          <motion.div
                            className="px-6 py-3 text-gray-300 hover:text-white"
                            whileTap={{ scale: 0.95 }}
                          >
                            {dropdownItem.name}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

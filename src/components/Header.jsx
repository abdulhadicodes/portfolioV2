'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User2, Briefcase, BookOpen, ChevronDown, Phone, Layers, Menu, X } from 'lucide-react'

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

    ]
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdown(null)
  }

  const NavItems = () => (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon

        return (
          <div key={item.name} className="relative">
            {item.href ? (
              <Link href={item.href}>
                <motion.div
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
                    transition-colors duration-200
                    ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                    ${isMobile ? 'py-3' : ''}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.90 }}
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    } else if (isMobile) {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
                  text-gray-400 cursor-pointer hover:text-white
                  ${isMobile ? 'py-3' : ''}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.90 }}
                onClick={() => {
                  if (item.dropdown) {
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                }}
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
                    className={`py-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg
                      ${isMobile ? 'relative mt-2' : 'absolute top-full left-0 mt-2'}
                    `}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link key={dropdownItem.name} href={dropdownItem.href}>
                        <motion.div
                          className="px-4 py-2 text-sm text-gray-400 hover:text-white "
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => isMobile && setIsMobileMenuOpen(false)}
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
        )
      })}
    </>
  )

  return (
    <div className="fixed top-4 w-full px-4 z-50">
      <motion.nav 
        className={`
          flex items-center gap-4 px-4 py-2 mx-auto bg-black/80 backdrop-blur-sm rounded-full border border-white/10
          ${isMobile ? 'w-full justify-between' : 'max-w-fit'}
        `}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isMobile ? (
          <>
            <Link href="/" className="text-white text-sm font-semibold">AbdulHadi.</Link>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        ) : (
          <>
            <Link href="/" className="text-white text-sm font-semibold">AbdulHadi.</Link>
            <NavItems />
          </>
        )}
      </motion.nav>
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
          >
            <div className="py-2">
              <NavItems />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

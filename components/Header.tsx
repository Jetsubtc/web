'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

interface HeaderProps {
  currentSection: string
}

export default function Header({ currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl' 
          : 'bg-transparent'
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
                                {/* Professional Logo */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src="/images/hero/axie.png" 
                            alt="Axie Cord Logo" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-white font-semibold text-xl">Axie Cord</span>
                      </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  currentSection === item.href.slice(1)
                    ? 'text-axie-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {currentSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-axie-400 to-purple-400 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

                                {/* Scroll Progress Indicator */}
                      <div className="hidden md:flex items-center space-x-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center space-x-3"
                        >
                          {/* Scroll Progress Circle */}
                          <div className="relative w-12 h-12">
                            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                              {/* Background circle */}
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="3"
                                fill="none"
                              />
                              {/* Progress circle */}
                              <motion.circle
                                cx="24"
                                cy="24"
                                r="20"
                                stroke="url(#gradient)"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ strokeDasharray: "0 126" }}
                                animate={{ strokeDasharray: `${(scrollProgress / 100) * 126} 126` }}
                                transition={{ duration: 0.3 }}
                              />
                              {/* Gradient definition */}
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#3B82F6" />
                                  <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                              </defs>
                            </svg>
                            {/* Center text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                animate={{ scale: scrollProgress > 0 ? 1.1 : 1 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs font-bold text-white"
                              >
                                {Math.round(scrollProgress)}%
                              </motion.div>
                            </div>
                          </div>
                          
                          {/* Scroll indicator text */}
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs text-white/60 font-medium"
                          >
                            <motion.div
                              animate={{ y: scrollProgress > 50 ? -2 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {scrollProgress > 50 ? 'Almost there!' : 'Keep scrolling'}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl mt-2 p-6 shadow-2xl"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-sm font-medium transition-all duration-300 p-2 rounded-lg ${
                      currentSection === item.href.slice(1)
                        ? 'text-axie-400 bg-axie-500/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                {/* Mobile Scroll Progress */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center space-x-3 mt-4 p-3 bg-white/10 rounded-lg"
                >
                  <div className="relative w-8 h-8">
                    <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <motion.circle
                        cx="16"
                        cy="16"
                        r="12"
                        stroke="url(#mobileGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 75" }}
                        animate={{ strokeDasharray: `${(scrollProgress / 100) * 75} 75` }}
                        transition={{ duration: 0.3 }}
                      />
                      <defs>
                        <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {Math.round(scrollProgress)}%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-white/80">
                    {scrollProgress > 50 ? 'Almost there!' : 'Keep scrolling'}
                  </span>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 
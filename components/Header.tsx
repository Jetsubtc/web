'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Settings } from 'lucide-react'

interface HeaderProps {
  currentSection: string
}

export default function Header({ currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

                                {/* Menu Button */}
                      <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.location.reload()}
                          className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          <Settings size={16} />
                          <span className="text-sm font-medium">Menu</span>
                        </motion.button>
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
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => window.location.reload()}
                  className="btn-primary w-full flex items-center justify-center space-x-2 mt-4"
                >
                  <Settings size={18} />
                  <span>Menu</span>
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 
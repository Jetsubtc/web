'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SpaceGif from '@/components/SpaceGif'
import Roadmap from '@/components/Roadmap'
import FAQ from '@/components/FAQ'

import ScrollToTop from '@/components/ScrollToTop'
import { motion } from 'framer-motion'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'roadmap', 'faq']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-axie-400 rounded-full animate-spin mx-auto mb-4"></div>
                              <h2 className="text-2xl font-bold text-white mb-2">Loading Axie Cord</h2>
          <p className="text-white/60">Preparing your experience...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="relative">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-axie-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <Header currentSection={currentSection} />
      
      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <SpaceGif />

        <section id="roadmap">
          <Roadmap />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </div>



      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
} 
'use client'

import { motion } from 'framer-motion'

interface HeroProps {}

export default function Hero({}: HeroProps) {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Banner Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/banner.jpeg')`
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>
      
      {/* Subtle accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-axie-400/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2"
          >
            <div className="w-2 h-2 bg-axie-400 rounded-full"></div>
            <span className="text-slate-300 text-sm font-medium tracking-wide">CORDIA REBORN</span>
          </motion.div>

          {/* Professional Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            <span className="text-slate-200">Axie</span>
            <span className="text-axie-400 ml-2">Cord</span>
          </motion.h1>

          {/* Professional Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed"
          >
            In a fractured digital dimension lost to time, only 300 Axies remain—the last elite survivors of Cordia's 
            forgotten bloodline. These aren't ordinary NFTs. These are Axie Cord units: bound by ancient protocol, 
            fused with fragments of the Cordstone, and reborn into a high-stakes ecosystem where every decision is a wager.
          </motion.p>

          {/* Professional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-12 mt-12"
          >
            {[
              { value: '300', label: 'NFTs' },
              { value: 'August 12', label: 'Launch' },
              { value: 'Free', label: 'Mint' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Revenue Share Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-green-500/30 via-emerald-500/20 to-green-500/30 border border-green-500/40 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm shadow-2xl"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">💰</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-white tracking-wide">REVENUE SHARING</h3>
            </div>
            <p className="text-lg text-white/95 text-center font-medium">
              <span className="text-green-300 font-bold">Direct revenue share</span> from platform earnings
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced Lore Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-16 mb-20"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <p className="text-slate-300 text-lg font-semibold italic mb-3">
                "Will you pull the cord?"
              </p>
            </motion.div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1 h-1 bg-axie-400 rounded-full"></div>
              <p className="text-slate-400 text-sm font-medium">
                The line between fortune and failure is razor-thin in Cordia
              </p>
              <div className="w-1 h-1 bg-axie-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Animated Scroll Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
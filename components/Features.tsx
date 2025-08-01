'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Coins, Globe, Heart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Ultra-Limited Supply',
    description: 'Only 300 NFTs will ever exist. A low-supply, high-impact collection designed for true believers and early visionaries.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Zap,
    title: 'Gamble-Driven Gameplay',
    description: 'Every Axie enters a high-stakes arena—where reflexes, risk, and randomness collide. Your choices matter.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Rev-Share to Holders',
    description: 'As the game thrives, so do you. Holders receive direct revenue share from platform earnings—turning each NFT into a living yield machine.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Coins,
    title: 'Powerful Tokenomics',
    description: 'Native token fueling gameplay, rewards, governance, and exclusive in-game advantages. Built for utility. Designed for longevity.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Globe,
    title: 'Hyperliquid-Powered',
    description: 'Fast. Scalable. Decentralized. Harnesses Hyperliquid\'s next-gen infrastructure for seamless on-chain interaction.',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Ancient Cordstone',
    description: 'Bound by ancient protocol, fused with fragments of the Cordstone. These aren\'t ordinary NFTs—they\'re your passport to the last great gamble.',
    color: 'from-red-500 to-pink-600'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Key Pillars of
            <span className="gradient-text"> Axie Cord</span>
          </h2>
          <p className="text-2xl sm:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed mb-8">
            Forged in a digital crucible of risk and reward, the Axie Cord thrives in an ecosystem built on 
            gambling mechanics, tokenized economics, and revenue-sharing that returns value to holders.
          </p>
          
          {/* Revenue Share Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💰</span>
              </div>
              <h3 className="text-3xl font-bold text-white">REVENUE SHARING</h3>
            </div>
            <p className="text-xl text-white/90 text-center leading-relaxed">
              <span className="text-green-400 font-semibold">As the game thrives, so do you.</span> Holders receive 
              <span className="text-green-400 font-bold"> direct revenue share</span> from platform earnings—turning each NFT into a 
              <span className="text-green-400 font-bold"> living yield machine.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`card group ${feature.title === 'Rev-Share to Holders' ? 'ring-2 ring-green-500/50 bg-green-500/10' : ''}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Sharing Prominent Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border-2 border-green-500/30 rounded-3xl p-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">💰</span>
                </div>
                <h2 className="text-4xl font-bold text-white">REVENUE SHARING</h2>
              </div>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                <span className="text-green-400 font-bold">As the game thrives, so do you.</span> 
                Holders receive <span className="text-green-400 font-bold">direct revenue share</span> from platform earnings—turning each NFT into a 
                <span className="text-green-400 font-bold"> living yield machine.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Direct</div>
                <div className="text-white/80">Revenue share from platform earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Passive</div>
                <div className="text-white/80">Earnings while you hold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Scalable</div>
                <div className="text-white/80">More players = more rewards</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Own the Game. Earn the Spoils.
            </h3>
            <p className="text-white/80 mb-6">
              Axie Cord is more than an NFT. It's your passport to the last great gamble of the Web3 era. 
              For those bold enough to embrace risk, the Axie Cord offers a seat at the table of legends.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Pull the Cord
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
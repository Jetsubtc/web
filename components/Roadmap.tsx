'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Star } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    date: 'Q1 2024',
    status: 'completed',
    items: [
      'Project concept and team formation',
      'Smart contract development',
      'Website and marketplace launch',
      'Initial NFT collection release'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    date: 'Q2 2024',
    status: 'in-progress',
    items: [
      'Community building and marketing',
      'Staking platform launch',
      'Governance token distribution',
      'Partnership announcements'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    date: 'Q3 2024',
    status: 'upcoming',
    items: [
      'Multi-chain integration',
      'Mobile app development',
      'Advanced trading features',
      'DAO governance implementation'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem',
    date: 'Q4 2024',
    status: 'upcoming',
    items: [
      'Metaverse integration',
      'Cross-chain bridges',
      'Advanced DeFi features',
      'Global expansion'
    ]
  }
]

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500'
  },
  'in-progress': {
    icon: Clock,
    color: 'text-axie-500',
    bgColor: 'bg-axie-500/20',
    borderColor: 'border-axie-500'
  },
  upcoming: {
    icon: Star,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500'
  }
}

export default function Roadmap() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Project
            <span className="gradient-text"> Roadmap</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our journey to revolutionize the NFT ecosystem. Each phase brings us closer 
            to building the ultimate digital collectibles platform.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-axie-500 to-purple-500"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => {
              const config = statusConfig[phase.status as keyof typeof statusConfig]
              const IconComponent = config.icon

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full ${config.bgColor} ${config.borderColor} border-2 flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 ${config.color}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card"
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-axie-400 mb-1">
                              {phase.phase}
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              {phase.title}
                            </h3>
                          </div>
                          <div className="text-sm text-white/60">
                            {phase.date}
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}>
                          <IconComponent size={12} />
                          <span className="capitalize">{phase.status.replace('-', ' ')}</span>
                        </div>

                        {/* Items List */}
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-axie-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/80 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Journey
            </h3>
            <p className="text-white/80 mb-6">
              Be part of the revolution in digital collectibles. Follow our progress 
              and contribute to the future of NFTs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Involved
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
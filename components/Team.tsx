'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, Globe } from 'lucide-react'

const teamData = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Blockchain veteran with 8+ years in DeFi and NFT development. Former lead at major crypto projects.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    name: 'Sarah Kim',
    role: 'CTO & Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    bio: 'Full-stack developer specializing in smart contracts and Web3 infrastructure. Built multiple successful DeFi protocols.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Creative director with expertise in digital art and NFT design. Led design teams at top gaming companies.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    name: 'Emma Thompson',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Community building expert with experience growing NFT communities from 0 to 100k+ members.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    name: 'David Park',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    bio: 'Digital marketing specialist with deep knowledge of crypto and NFT marketing strategies.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    name: 'Lisa Wang',
    role: 'Business Development',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    bio: 'Strategic partnerships expert with connections across the blockchain and gaming industries.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      website: '#'
    }
  }
]

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  website: Globe
}

export default function Team() {
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
            Meet Our
            <span className="gradient-text"> Team</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A diverse team of blockchain experts, designers, and community builders 
            working together to revolutionize the NFT space.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card group"
            >
              <div className="text-center space-y-4">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-axie-500/20 group-hover:border-axie-500 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-axie-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const IconComponent = socialIcons[platform as keyof typeof socialIcons]
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white/10 hover:bg-axie-500 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <IconComponent size={16} className="text-white" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-white/80 mb-6">
              We're always looking for talented individuals who are passionate about 
              blockchain technology and digital art. Check out our open positions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Openings
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
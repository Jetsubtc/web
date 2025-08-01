'use client'

import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Marketplace', href: '#' },
    { name: 'Staking', href: '#' },
    { name: 'Governance', href: '#' },
    { name: 'Analytics', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' }
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Bug Report', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Licenses', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Discord', icon: MessageCircle, href: '#' },
  { name: 'Github', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
                { name: 'Email', icon: Mail, href: 'mailto:hello@axiecord.com' }
]

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-axie-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-xl">Axie Cord</span>
            </div>
                          <p className="text-white/70 mb-6 max-w-md">
                Revolutionizing the Axie Cord ecosystem with unique digital collectibles,
                innovative staking features, and a vibrant community.
              </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Stay Updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-axie-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-axie-500 hover:bg-axie-600 text-white rounded-r-lg transition-colors duration-300"
                >
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/20">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-axie-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <IconComponent size={18} className="text-white" />
                </motion.a>
              );
            })}
          </div>

          <div className="text-white/60 text-sm">
            © 2024 Axie Cord. All rights reserved.
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                          <div className="text-2xl font-bold gradient-text mb-1">300</div>
                          <div className="text-white/60 text-sm">Unique NFTs</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text mb-1">FREE</div>
                          <div className="text-white/60 text-sm">Mint Available</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                          <div className="text-white/60 text-sm">Support Available</div>
                        </div>
                      </div>
        </motion.div>
      </div>
    </footer>
  )
} 
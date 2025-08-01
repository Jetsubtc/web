'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    question: 'What are Axie Cord NFTs?',
    answer: 'Axie Cord NFTs are unique digital collectibles featuring hand-crafted artwork of mythical creatures. Each NFT is stored on the blockchain, ensuring authenticity and ownership. Our collection includes various rarity levels from Common to Legendary, each with unique traits and abilities.'
  },
  {
    question: 'How do I buy Axie Cord NFTs?',
    answer: 'To buy Axie Cord NFTs, you need to connect your Web3 wallet (like MetaMask) to our platform. Browse our collection, select the NFT you want, and complete the purchase using ETH or other supported cryptocurrencies. All transactions are secure and transparent on the blockchain.'
  },
  {
    question: 'What makes Axie Cord NFTs special?',
    answer: 'Axie Cord NFTs are special because each one is unique with different traits, rarity levels, and abilities. They\'re not just digital art - they\'re part of a larger ecosystem where you can trade, stake, and even use them in games. Our team of artists creates each piece with attention to detail and uniqueness.'
  },
  {
    question: 'Can I sell my Axie Cord NFTs?',
    answer: 'Yes! You can sell your Axie Cord NFTs on our marketplace or other NFT platforms. The value of your NFT depends on its rarity, traits, and market demand. We provide tools to help you track your collection\'s value and make informed trading decisions.'
  },
  {
    question: 'What is the staking feature?',
    answer: 'Our staking feature allows you to lock your Axie Cord NFTs for a period to earn rewards. The longer you stake and the rarer your NFTs, the more rewards you can earn. This creates a passive income stream while holding your favorite collectibles.'
  },
  {
    question: 'How do I join the community?',
    answer: 'Join our community by following us on social media, joining our Discord server, and participating in community events. We regularly host AMAs, giveaways, and exclusive events for our community members. Stay updated with our latest announcements and developments.'
  },
  {
    question: 'What blockchain are Axie Cord NFTs built on?',
    answer: 'Axie Cord NFTs are built on Ethereum, with plans to expand to other blockchains like Polygon and BSC for lower transaction fees. We use industry-standard ERC-721 and ERC-1155 token standards to ensure compatibility with major NFT marketplaces.'
  },
  {
    question: 'How can I verify the authenticity of an Axie Cord NFT?',
    answer: 'All Axie Cord NFTs are verified on the blockchain, making them impossible to counterfeit. You can verify authenticity by checking the smart contract address and token ID. Our platform also provides verification tools to ensure you\'re buying genuine Axie Cord NFTs.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-white/80">
            Everything you need to know about Axie Cord and our platform.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-axie-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/80 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Social CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/80 mb-6">
              Can't find what you're looking for? Join our community for support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://x.com/Axiee_hype"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow on X</span>
              </motion.a>
              <motion.a
                href="https://discord.gg/gMk2Gmmpj3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0276C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
                <span>Join Discord</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
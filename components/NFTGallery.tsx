'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Eye, ArrowRight, Star, Crown, Zap } from 'lucide-react'

const nftData = [
  {
    id: 1,
    name: 'Axie Warrior #001',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
    price: '2.5 ETH',
    rarity: 'Legendary',
    likes: 234,
    views: 1234,
    traits: ['Fire', 'Sword', 'Armor']
  },
  {
    id: 2,
    name: 'Axie Mage #042',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=400&fit=crop',
    price: '1.8 ETH',
    rarity: 'Epic',
    likes: 189,
    views: 987,
    traits: ['Ice', 'Staff', 'Robe']
  },
  {
    id: 3,
    name: 'Axie Archer #156',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
    price: '3.2 ETH',
    rarity: 'Legendary',
    likes: 456,
    views: 2100,
    traits: ['Wind', 'Bow', 'Leather']
  },
  {
    id: 4,
    name: 'Axie Healer #089',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=400&fit=crop',
    price: '1.2 ETH',
    rarity: 'Rare',
    likes: 123,
    views: 654,
    traits: ['Light', 'Wand', 'Cloth']
  },
  {
    id: 5,
    name: 'Axie Tank #203',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
    price: '2.8 ETH',
    rarity: 'Epic',
    likes: 298,
    views: 1456,
    traits: ['Earth', 'Shield', 'Plate']
  },
  {
    id: 6,
    name: 'Axie Assassin #077',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=400&fit=crop',
    price: '4.1 ETH',
    rarity: 'Legendary',
    likes: 567,
    views: 2890,
    traits: ['Shadow', 'Dagger', 'Silk']
  }
]

const rarityConfig = {
  Common: { color: 'bg-gray-500', icon: null },
  Rare: { color: 'bg-blue-500', icon: Star },
  Epic: { color: 'bg-purple-500', icon: Zap },
  Legendary: { color: 'bg-yellow-500', icon: Crown }
}

export default function NFTGallery() {
  const [selectedRarity, setSelectedRarity] = useState('All')
  const [likedNFTs, setLikedNFTs] = useState<number[]>([])
  const [hoveredNFT, setHoveredNFT] = useState<number | null>(null)

  const filteredNFTs = selectedRarity === 'All' 
    ? nftData 
    : nftData.filter(nft => nft.rarity === selectedRarity)

  const toggleLike = (nftId: number) => {
    setLikedNFTs(prev => 
      prev.includes(nftId) 
        ? prev.filter(id => id !== nftId)
        : [...prev, nftId]
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Explore Our
            <span className="gradient-text block"> NFT Collection</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover unique digital creatures with varying rarity levels and special abilities. 
            Each Axie is one-of-a-kind and hand-crafted by our talented artists.
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Common', 'Rare', 'Epic', 'Legendary'].map((rarity) => (
              <motion.button
                key={rarity}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg ${
                  selectedRarity === rarity
                    ? 'bg-gradient-to-r from-axie-500 to-purple-600 text-white shadow-xl'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {rarity}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNFTs.map((nft, index) => {
            const rarityConfigItem = rarityConfig[nft.rarity as keyof typeof rarityConfig]
            const IconComponent = rarityConfigItem.icon
            
            return (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredNFT(nft.id)}
                onHoverEnd={() => setHoveredNFT(null)}
                className="card group cursor-pointer hover-lift"
              >
                {/* Enhanced NFT Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Enhanced Overlay */}
                  <AnimatePresence>
                    {hoveredNFT === nft.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                      >
                        <motion.button
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="btn-primary"
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Rarity Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${rarityConfigItem.color} flex items-center space-x-1 shadow-lg`}>
                    {IconComponent && <IconComponent size={12} />}
                    <span>{nft.rarity}</span>
                  </div>

                  {/* Enhanced Like Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(nft.id)
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 shadow-lg ${
                      likedNFTs.includes(nft.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-red-500'
                    }`}
                  >
                    <Heart size={16} fill={likedNFTs.includes(nft.id) ? 'currentColor' : 'none'} />
                  </motion.button>

                  {/* Traits Display */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {nft.traits.map((trait, traitIndex) => (
                        <span
                          key={traitIndex}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced NFT Info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
                    <span className="text-axie-400 font-bold text-lg">{nft.price}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center space-x-2">
                      <Eye size={14} />
                      <span>{nft.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart size={14} />
                      <span>{nft.likes.toLocaleString()}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-secondary flex items-center justify-center space-x-2 glow"
                  >
                    <span>Buy Now</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 glow"
          >
            Load More NFTs
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
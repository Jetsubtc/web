'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Wallet, Shield, Zap } from 'lucide-react'

interface ConnectWalletProps {
  isOpen: boolean
  onClose: () => void
}

const walletOptions = [
  {
    name: 'MetaMask',
    description: 'Most popular Web3 wallet',
    icon: '🦊',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'WalletConnect',
    description: 'Connect any wallet',
    icon: '🔗',
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Coinbase Wallet',
    description: 'Secure and easy to use',
    icon: '🪙',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Trust Wallet',
    description: 'Mobile-first wallet',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-600'
  }
]

export default function ConnectWallet({ isOpen, onClose }: ConnectWalletProps) {
  const handleWalletConnect = (walletName: string) => {
    // Here you would implement actual wallet connection logic
    console.log(`Connecting to ${walletName}...`)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 max-w-md w-full border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-axie-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Connect Your Wallet
              </h2>
              <p className="text-white/60">
                Choose your preferred wallet to start collecting Axie Cord NFTs
              </p>
            </div>

            {/* Wallet Options */}
            <div className="space-y-3 mb-6">
              {walletOptions.map((wallet, index) => (
                <motion.button
                  key={wallet.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWalletConnect(wallet.name)}
                  className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${wallet.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {wallet.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-semibold">{wallet.name}</h3>
                    <p className="text-white/60 text-sm">{wallet.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-white/60">
                <Shield size={16} className="text-green-400" />
                <span>Secure and encrypted</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/60">
                <Zap size={16} className="text-axie-400" />
                <span>Instant connection</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-white/40 text-xs">
                By connecting your wallet, you agree to our{' '}
                <a href="#" className="text-axie-400 hover:text-axie-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-axie-400 hover:text-axie-300">
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
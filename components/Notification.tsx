'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react'
import { useEffect } from 'react'

interface NotificationProps {
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const notificationConfig = {
  success: {
    icon: CheckCircle,
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    textColor: 'text-green-400'
  },
  error: {
    icon: XCircle,
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    textColor: 'text-red-400'
  },
  info: {
    icon: Info,
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-400'
  },
  warning: {
    icon: AlertTriangle,
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    textColor: 'text-yellow-400'
  }
}

export default function Notification({ 
  type, 
  title, 
  message, 
  isVisible, 
  onClose, 
  duration = 5000 
}: NotificationProps) {
  const config = notificationConfig[type]
  const IconComponent = config.icon

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-4 right-4 z-50 max-w-sm w-full"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-2xl">
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 w-8 h-8 ${config.color} rounded-full flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white">
                  {title}
                </h4>
                <p className="text-sm text-white/80 mt-1">
                  {message}
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="flex-shrink-0 w-6 h-6 text-white/60 hover:text-white transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
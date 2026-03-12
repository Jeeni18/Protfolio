import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingContact({ onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-7 right-7 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="font-mono text-[11px] text-cyan-400 tracking-wider whitespace-nowrap bg-[#0f172a]/90 border border-cyan-500/20 px-3 py-1.5 rounded-full"
          >
            Contact
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(34,211,238,0.05))',
          border: '1px solid rgba(34,211,238,0.4)',
          boxShadow: '0 0 25px rgba(34,211,238,0.25)',
        }}
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping" />
        <MessageCircle size={20} className="text-cyan-400" />
      </motion.button>
    </div>
  )
}

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, ExternalLink } from 'lucide-react'

export default function CertModal({ cert, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg rounded-2xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d1b2e, #0f172a)' }}
        >
          {/* Accent bar */}
          <div
            className="h-0.5 w-full"
            style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X size={14} />
          </button>

          {/* Image area */}
          <div className="relative h-56 bg-slate-900 flex items-center justify-center">
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl font-display font-black text-white"
                style={{ background: `linear-gradient(135deg, ${cert.color}33, ${cert.color}11)`, border: `1px solid ${cert.color}33` }}
              >
                {cert.initials}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-7">
            <div className="flex items-center gap-2 mb-1">
              <Award size={14} style={{ color: cert.color }} />
              <p
                className="font-mono text-[10px] tracking-widest uppercase"
                style={{ color: cert.color + 'bb' }}
              >
                {cert.org} · {cert.year}
              </p>
            </div>
            <h2 className="font-display font-bold text-xl text-slate-100 mt-1 mb-3">
              {cert.title}
            </h2>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              {cert.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionWrapper({ children, id, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`section-padding max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-14">
      {label && (
        <p className="font-mono text-xs text-cyan-500 tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-slate-400 text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero({ onContactOpen }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-cyan-500/5" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/[0.07]" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/10" />
      </div>

      {/* Glow core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Greeting tag */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-500 tracking-[0.25em] uppercase">
            Available for Opportunities
          </span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.div variants={item}>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-2">
            <span className="text-slate-200">Hi, I am </span>
          </h1>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            <span className="text-gradient">Jeeni.</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div variants={item} className="mb-8 h-10 flex items-center justify-center">
          <span className="font-mono text-lg md:text-xl text-cyan-400/80">
            <TypeAnimation
              sequence={[
                'Computer Engineering Student', 2500,
                'AI Enthusiast', 2000,
                'Hackathon Builder', 2000,
                'Tech Explorer', 2000,
              ]}
              wrapper="span"
              speed={55}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </span>
          <span className="ml-0.5 w-0.5 h-6 bg-cyan-400 animate-pulse inline-block" />
        </motion.div>

        {/* One-liner */}
        <motion.p
          variants={item}
          className="font-body text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I build technology-driven solutions focused on{' '}
          <span className="text-slate-300">impact</span>,{' '}
          <span className="text-slate-300">innovation</span>, and{' '}
          <span className="text-slate-300">real-world problems</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#projects')}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContactOpen}
            className="btn-secondary"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase group-hover:text-cyan-500 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-600 group-hover:text-cyan-500 transition-colors"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}

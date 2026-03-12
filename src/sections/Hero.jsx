import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from 'lucide-react'
import jeeniPhoto from '../assets/me/jeeni.jpg'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Sticky Mini Logo (appears on scroll) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-5 z-[60] flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Mini circular photo */}
            <div
              className="rounded-full p-[2px] flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #0891b2 40%, #22d3ee90)',
                boxShadow: '0 0 12px rgba(34,211,238,0.4)',
              }}
            >
              <div className="rounded-full p-[1.5px] bg-[#020817]">
                <img
                  src={jeeniPhoto}
                  alt="Jeeni"
                  className="w-8 h-8 rounded-full object-cover object-top"
                />
              </div>
            </div>

            {/* Name text */}
            <div style={{ lineHeight: 1.1 }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                background: 'linear-gradient(135deg, #f0f9ff, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Jeeni Shrestha
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem',
                color: '#22d3ee99',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8"
        >
          {/* ── TEXT — order-1 on mobile (shows first), order-1 on desktop (left side) ── */}
          <div className="order-1 md:order-1 flex-1 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Status pill */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#22d3ee',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="mb-5">
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 500,
                color: '#94a3b8',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                display: 'block',
              }}>
                Hi, I am
              </p>

              <h1 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                background: 'linear-gradient(135deg, #f0f9ff 30%, #67e8f9 70%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}>
                Jeeni
              </h1>

              <h1 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                marginTop: '4px',
                background: 'linear-gradient(135deg, #22d3ee 0%, #67e8f9 50%, #a5f3fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}>
                Shrestha.
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div variants={item} className="mb-6 h-8 flex items-center">
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem',
                color: 'rgba(34,211,238,0.8)',
              }}>
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
              <span className="ml-0.5 w-0.5 h-5 bg-cyan-400 animate-pulse inline-block" />
            </motion.div>

            {/* Divider line — desktop only */}
            <motion.div
              variants={item}
              className="w-16 h-px bg-gradient-to-r from-cyan-500 to-transparent mb-6 hidden md:block"
            />

            {/* One-liner */}
            <motion.p
              variants={item}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                color: '#94a3b8',
                maxWidth: '32rem',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              I build technology-driven solutions focused on{' '}
              <span style={{ color: '#e2e8f0' }}>impact</span>,{' '}
              <span style={{ color: '#e2e8f0' }}>innovation</span>, and{' '}
              <span style={{ color: '#e2e8f0' }}>real-world problems</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start">
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
          </div>

          {/* ── PHOTO — order-2 on mobile (shows after text), order-2 on desktop (right side) ── */}
          <motion.div
            variants={item}
            className="order-2 md:order-2 flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #0891b2, transparent, #22d3ee)',
                  padding: '2px',
                  borderRadius: '9999px',
                }}
              />

              {/* Glow rings */}
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-md"
                style={{ background: 'radial-gradient(circle, #22d3ee55, transparent 70%)' }}
              />
              <div
                className="absolute -inset-6 rounded-full opacity-15 blur-xl"
                style={{ background: 'radial-gradient(circle, #22d3ee44, transparent 70%)' }}
              />

              {/* Static glowing border */}
              <div
                className="relative rounded-full p-[3px]"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #0891b2 40%, #22d3ee90)',
                  boxShadow: '0 0 30px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.2), inset 0 0 20px rgba(34,211,238,0.1)',
                }}
              >
                {/* Inner dark ring gap */}
                <div className="rounded-full p-[3px] bg-[#020817]">
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      width: 'clamp(180px, 28vw, 320px)',
                      height: 'clamp(180px, 28vw, 320px)',
                    }}
                  >
                    <img
                      src={jeeniPhoto}
                      alt="Jeeni Shrestha"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cyan-400"
                style={{ boxShadow: '0 0 12px rgba(34,211,238,0.8)' }}
              />
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-500/60"
                style={{ boxShadow: '0 0 8px rgba(34,211,238,0.5)' }}
              />
            </div>
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
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.625rem',
            color: '#475569',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
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
    </>
  )
}

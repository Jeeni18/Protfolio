import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star, X, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'
import Hack4SafeFood from '../assets/achievements/Hack4SafeFood_certificate.jpg'
import Hultprize from '../assets/achievements/hultprize.png'
import IEEE from '../assets/achievements/Ecoflare.png'
import Deerhack from '../assets/achievements/DeerHack_certificate.jpg'
import Codeyatra from '../assets/achievements/Codeyatra.png'
import Shequal from '../assets/achievements/Shequal_certificate.jpg'
import Hackthecircle from '../assets/achievements/hackthecircle.png'

const achievements = [
  {
    icon: Trophy,
    title: 'Winner — Hack4SafeFood',
    project: 'Project: Aahar',
    description: 'Won the national-level hackathon with a food safety app - Aahar',
    year: '2025',
    image: Hack4SafeFood,
    accent: '#fbbf24',
    badge: '🥇 Winner',
    link: 'https://drive.google.com/file/d/11ZebDYPQxgVnsRm4kQnLj1H4X9bQC1GP/view?usp=sharing',
  },
  {
    icon: Trophy,
    title: 'Winner — Hack the Circle',
    project: 'Project: AR app',
    description: 'Won Hack the Circle with an AR app that brings history to life.',
    year: '2025',
    image: Hackthecircle,
    accent: '#fbbf24',
    badge: '🥇 Winner',
    link: 'https://drive.google.com/file/d/1WFoeC9w77ENXA6zz2ppfxMgq0bJSwh24/view?usp=sharing',
  },
  {
    icon: Trophy,
    title: 'Education Track Winner — DeerHack',
    project: 'Project: Histoury',
    description: 'Won Education Track with app Histoury',
    year: '2025',
    image: Deerhack,
    accent: '#fbbf24',
    badge: '🥇 Winner',
    link: 'https://drive.google.com/file/d/11T8k8LCvDc2KE2P-JZ38TpMEJFcDxDrw/view?usp=sharing',
  },
  {
    icon: Trophy,
    title: 'Winner — Hult On-Campus Competition',
    project: 'Project: NOOK',
    description: 'Won the campus-level Hult Prize competition with an innovative social impact business idea — NOOK.',
    year: '2024',
    image: Hultprize,
    accent: '#fbbf24',
    badge: '🥇 Winner',
    link: 'https://drive.google.com/file/d/1fLbW1nDikEGQ-18Xuqc5044vFe31RYoW/view?usp=sharing',
  },
  {
    icon: Star,
    title: 'Finalist — IEEE WIE Climate Tech Idea Pitch',
    project: 'Project: Ecoflare',
    description: 'Reached the finalist stage at the IEEE Women in Engineering Climate Technology Idea Pitch competition with Ecoflare.',
    year: '2024',
    image: IEEE,
    accent: '#22d3ee',
    badge: '🏅 Finalist',
    link: 'https://drive.google.com/file/d/1f9N-uWpvE1-q1bs3mzkV2hKIctsqh2G2/view?usp=sharing',
  },
  {
    icon: Star,
    title: "People's Choice Award — Winner",
    project: 'Project: Revolv',
    description: "Won People's Choice Award with project Revolv",
    year: '2024',
    image: Codeyatra,
    accent: '#22d3ee',
    badge: '🏅 Winner',
    link: 'https://drive.google.com/file/d/11ZfLULkGij1dKI3AXDKrcM39bD_l-9O4/view?usp=sharing',
  },
  {
    icon: Star,
    title: "Finalist — SheQual (Nepal's Largest Women's Hackathon)",
    project: 'Project: DiagHer',
    description: "Reached the finalist stage at SheQual — Nepal's largest all-female hackathon — with the DiagHer project.",
    image: Shequal,
    year: '2024',
    accent: '#22d3ee',
    badge: '🏅 Finalist',
    link: 'https://drive.google.com/file/d/11Uv7My8LcxcLhSACKUKTlPWzYBQe9Dzi/view?usp=sharing',
  },
]

// ── Certificate Modal ────────────────────────────────────────────────
function CertificateModal({ item, onClose }) {
  // Close on Escape key
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d1b2e, #0f172a)',
            border: `1px solid ${item.accent}30`,
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-0.5 w-full"
            style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
          >
            <X size={14} />
          </button>

          {/* Certificate image */}
          <div className="relative bg-slate-900 flex items-center justify-center p-4 min-h-[260px]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[400px] w-auto rounded-lg object-contain shadow-2xl"
            />
          </div>

          {/* Info + link */}
          <div className="p-6 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">{item.badge.split(' ')[0]}</span>
                <span
                  className="font-mono text-[9px] tracking-widest uppercase"
                  style={{ color: item.accent + 'bb' }}
                >
                  {item.year}
                </span>
              </div>
              <h3 className="font-display font-bold text-slate-100 text-base leading-snug mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-[11px] text-slate-500">{item.project}</p>
            </div>

            {/* Open certificate link */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 hover:scale-105"
              style={{
                background: item.accent + '18',
                border: `1px solid ${item.accent}40`,
                color: item.accent,
              }}
            >
              <ExternalLink size={13} />
              View Certificate
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Achievement Card ─────────────────────────────────────────────────
function AchievementCard({ item, index, onClick }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(item)}
      className="group relative glow-border card-bg rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Side accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: item.accent }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 50%, ${item.accent}08, transparent 55%)` }}
      />

      {/* Certificate thumbnail strip */}
      <div className="relative h-32 overflow-hidden bg-slate-900/60">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1b2e]" />

        {/* Badge pill */}
        <div
          className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-full"
          style={{ background: item.accent + '25', border: `1px solid ${item.accent}50`, color: item.accent }}
        >
          {item.badge}
        </div>

        {/* Year */}
        {item.year && (
          <span
            className="absolute top-3 left-4 font-mono text-[9px] tracking-widest uppercase"
            style={{ color: item.accent + 'cc' }}
          >
            {item.year}
          </span>
        )}

        {/* Click hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{ background: 'rgba(2,8,23,0.75)', border: `1px solid ${item.accent}40`, color: item.accent }}
          >
            Click to view certificate
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="relative z-10 p-5 pl-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.accent + '15', border: `1px solid ${item.accent}30` }}
            >
              <item.icon size={13} style={{ color: item.accent }} />
            </div>
            <h3 className="font-display font-semibold text-slate-200 text-sm leading-snug">
              {item.title}
            </h3>
          </div>
        </div>

        <p className="font-mono text-[10px] text-slate-500 mb-1.5 ml-10">{item.project}</p>
        <p className="font-body text-slate-400 text-[13px] leading-relaxed ml-10">
          {item.description}
        </p>

        {/* View link */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 mt-4 ml-10 font-mono text-[11px] transition-colors duration-200 hover:opacity-80"
          style={{ color: item.accent }}
        >
          <ExternalLink size={11} />
          Open on Google Drive
        </a>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────────────
export default function Achievements() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        label="04 — Recognition"
        title="Achievements"
        subtitle="Competitions won, stages reached, and milestones that shaped my journey."
      />

      <div className="grid md:grid-cols-3 gap-4">
        {achievements.map((item, i) => (
          <AchievementCard
            key={item.title}
            item={item}
            index={i}
            onClick={setSelectedItem}
          />
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedItem && (
        <CertificateModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </SectionWrapper>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star, Users, Award } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

const achievements = [
  {
    icon: Trophy,
    title: 'Winner — Hult On-Campus Competition',
    project: 'Project: NOOK',
    description: 'Won the campus-level Hult Prize competition with an innovative social impact business idea — NOOK.',
    year: '2024',
    accent: '#fbbf24',
    badge: '🥇 Winner',
  },
  {
    icon: Star,
    title: 'Finalist — IEEE WIE Climate Tech Idea Pitch',
    project: 'Project: Ecoflare',
    description: 'Reached the finalist stage at the IEEE Women in Engineering Climate Technology Idea Pitch competition with Ecoflare.',
    year: '2024',
    accent: '#22d3ee',
    badge: '🏅 Finalist',
  },
  {
    icon: Users,
    title: 'Campus Ambassador — LOCUS',
    project: 'IOE Pulchowk Campus',
    description: 'Served as Campus Ambassador for LOCUS, Nepal\'s largest student-run tech festival, promoting events and engaging the student community.',
    year: '2024',
    accent: '#818cf8',
    badge: '🎯 Ambassador',
  },
  {
    icon: Award,
    title: 'Data Science Certification',
    project: '70-Hour Course Completion',
    description: 'Completed a comprehensive 70-hour Data Science certification covering Python, Pandas, NumPy, data visualization, and machine learning fundamentals.',
    year: '2024',
    accent: '#34d399',
    badge: '📜 Certified',
  },
]

function AchievementCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative glow-border card-bg rounded-xl p-6 transition-all duration-300 overflow-hidden"
    >
      {/* Side accent */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
        style={{ background: item.accent }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 50%, ${item.accent}07, transparent 50%)` }}
      />

      <div className="relative z-10 pl-4">
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.accent + '15', border: `1px solid ${item.accent}30` }}
            >
              <item.icon size={15} style={{ color: item.accent }} />
            </div>
            <div>
              <span
                className="font-mono text-[9px] tracking-widest uppercase"
                style={{ color: item.accent + 'aa' }}
              >
                {item.year}
              </span>
              <h3 className="font-display font-semibold text-slate-200 text-sm mt-0.5 leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
          <span className="text-[11px] whitespace-nowrap flex-shrink-0">{item.badge}</span>
        </div>

        <p className="font-mono text-[10px] text-slate-500 mb-2 ml-11">{item.project}</p>
        <p className="font-body text-slate-400 text-[13px] leading-relaxed ml-11">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        label="04 — Recognition"
        title="Achievements"
        subtitle="Competitions won, stages reached, and milestones that shaped my journey."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((item, i) => (
          <AchievementCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

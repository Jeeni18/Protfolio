import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

const categories = [
  {
    name: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: '⚙️' },
      { name: 'Java', icon: '☕' },
    ]
  },
  {
    name: 'AI / Data',
    skills: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Scikit-learn', icon: '🤖' },
    ]
  },
  {
    name: 'Web',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
    ]
  },
]

function SkillPill({ skill, delay }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="group relative flex flex-col items-center gap-2 glow-border card-bg rounded-xl p-4 cursor-default transition-all duration-300"
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="font-mono text-[11px] text-slate-400 group-hover:text-cyan-300 transition-colors text-center leading-tight">
        {skill.name}
      </span>
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 20px rgba(34,211,238,0.06)' }}
      />
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <SectionWrapper id="techstack">
      <SectionTitle
        label="02 — Skills"
        title="Tech Stack"
        subtitle="Tools and technologies I work with to build things that matter."
      />

      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <div key={cat.name}>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] text-cyan-500/70 tracking-[0.2em] uppercase">
                {cat.name}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {cat.skills.map((skill, si) => (
                <SkillPill
                  key={skill.name}
                  skill={skill}
                  delay={ci * 0.08 + si * 0.06}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

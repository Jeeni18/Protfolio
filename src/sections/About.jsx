import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Brain, Trophy, Leaf, Code2 } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

const highlights = [
  {
    icon: GraduationCap,
    label: '4th Year',
    desc: 'Computer Engineering Student'
  },
  {
    icon: Brain,
    label: 'AI-Focused',
    desc: 'Deep interest in Artificial Intelligence'
  },
  {
    icon: Code2,
    label: '70-Hour',
    desc: 'Data Science Certification'
  },
  {
    icon: Trophy,
    label: 'Hackathon',
    desc: 'Experience in innovation competitions'
  },
  {
    icon: Leaf,
    label: 'Climate Tech',
    desc: 'Behavioral & sustainability solutions'
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <SectionWrapper id="about">
      <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <SectionTitle
            label="01 — About"
            title="About Me"
            subtitle="A curious engineer at the intersection of technology and real-world impact."
          />

          <div className="space-y-5 font-body text-slate-400 leading-relaxed text-[15px]">
            <p>
              I'm a <span className="text-slate-200 font-medium">fourth Year Computer Engineering Student</span> with a belief that technology can transform 
the world. With a focus on AI and Data Science, I have completed courses in Python, Machine Learning, and 
Data Science, applying these skills to solve real-world problems. I believe technology has the power to change 
the world, and I am driven by a desire to be part of that change.
            </p>
            <p>
              My journey spans <span className="text-slate-200 font-medium">hackathons, innovation competitions</span>,
              and hands-on project development from carbon trading platforms to behavioral wellness apps.
              
            </p>
            <p>
              I’m always eager to learn, build, and collaborate on ideas that push the boundaries of innovation.
            </p>
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 glow-border card-bg rounded-lg p-5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-cyan-500 tracking-widest uppercase mb-1">Education</p>
                <p className="font-display font-semibold text-slate-200 text-sm">Bachelor of Computer Engineering</p>
                <p className="text-slate-500  text-xs mt-0.5">Khwopa College of Engineering</p>
                <p className="text-slate-500 text-xs mt-0.5">Currently Enrolled · Expected 2026</p>
              </div>
            </div>
          </motion.div>
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 glow-border card-bg rounded-lg p-5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-cyan-500 tracking-widest uppercase mb-1">Education</p>
                <p className="font-display font-semibold text-slate-200 text-sm">High School </p>
                <p className="text-slate-500 text-xs mt-0.5">St.Xavier's college - 2021</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Highlight grid */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -3 }}
              className={`glow-border card-bg rounded-lg p-5 transition-all duration-300 cursor-default ${
                i === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-3">
                <h.icon size={17} className="text-cyan-400" />
              </div>
              <p className="font-display font-bold text-slate-200 text-sm">{h.label}</p>
              <p className="font-body text-slate-500 text-xs mt-0.5 leading-snug">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

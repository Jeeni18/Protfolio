import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

const projects = [
  {
    number: '01',
    name: 'FER',
    tagline: 'Facial Expression Recognition System',
    description:
      'This project implements a Facial Expression Recognition (FER) System using deep learning to classify human emotions from facial images.',
    stack: ['Python', 'React', 'ML', 'Data Analysis'],
    github: 'https://github.com/Jeeni18/Facial-Expression-Recognition-System-FER',
    accent: '#22d3ee',
    featured: true,
  },
  {
    number: '02',
    name: 'DiagHer',
    tagline: 'Decision Support System for Gender-Aware Healthcare',
    description:
      'AI-powered decision support system providing gender-aware healthcare insights, improving diagnosis, medication safety, and outcomes for female patients.',
    stack: ['Python', 'React', 'ML', 'Data Analysis'],
    github: 'https://github.com/Jeeni18/DiagHer-AI',
    accent: '#22d3ee',
    featured: true,
  },
  {
    number: '03',
    name: 'Chronova',
    tagline: 'Immersive tourism app',
    description:
      'An immersive tourism app that redefines how travelers explore Nepal. It brings together Augmented Reality, real-time personalization, and cultural storytelling to offer users a new way to experience old stories.',
    stack: ['React Native', 'Python', 'ML'],
    github: 'https://github.com/Jeeni18/Chronova',
    accent: '#818cf8',
  },
  {
    number: '04',
    name: 'Revolv',
    tagline: 'AI-powered platform',
    description:
      'AI-powered platform designed to help small businesses scale by providing smart tools, automation, and personalized recommendations for seamless digital transformation. The platform leverages AI to analyze business data and provide actionable insights, making operations more efficient and data-driven.',
    stack: ['React Native', 'Python', 'ML'],
    github: 'https://github.com/Jeeni18/Revolv',
    accent: '#34d399',
  },
  {
    number: '05',
    name: 'Lumen',
    tagline: 'Anti-Doom Scrolling App',
    description:
      'A behavioral tech app that detects mindless scrolling patterns and nudges users toward healthier digital habits and improved digital well-being.',
    stack: ['React Native', 'Python', 'Behavior ML'],
    github: 'https://github.com/jeenishrestha',
    accent: '#818cf8',
  },
 
]

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative glow-border card-bg rounded-xl p-7 transition-all duration-400 overflow-hidden"
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-6 font-display font-extrabold text-5xl opacity-[0.04] select-none pointer-events-none"
        style={{ color: project.accent }}
      >
        {project.number}
      </span>

      {/* Top bar accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      {/* Glow fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(circle at 30% 50%, ${project.accent}08, transparent 60%)` }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p
              className="font-mono text-[10px] tracking-widest uppercase mb-1.5 transition-colors duration-300"
              style={{ color: project.accent + 'aa' }}
            >
              {project.tagline}
            </p>
            <h3 className="font-display font-bold text-xl text-slate-100">
              {project.name}
            </h3>
          </div>
          {project.featured && (
            <span className="text-[9px] font-mono px-2 py-1 rounded border border-cyan-500/30 text-cyan-500 bg-cyan-500/5 tracking-widest uppercase">
              Featured
            </span>
          )}
        </div>

        <p className="font-body text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-200 group/link"
        >
          <Github size={13} />
          <span>View on GitHub</span>
          <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="03 — Work"
        title="Projects"
        subtitle="Things I've built — from hackathon prototypes to data science explorations."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

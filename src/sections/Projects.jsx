import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

const projects = [
  {
    number: '01',
    name: 'Ecoflare',
    tagline: 'Carbon Reduction Platform',
    description:
      'A carbon trading and agricultural sustainability platform designed to reduce carbon footprints through verified offset markets and smart farming insights.',
    stack: ['Python', 'React', 'ML', 'Data Analysis'],
    github: 'https://github.com/jeenishrestha',
    accent: '#22d3ee',
    featured: true,
  },
  {
    number: '02',
    name: 'Lumen',
    tagline: 'Anti-Doom Scrolling App',
    description:
      'A behavioral tech app that detects mindless scrolling patterns and nudges users toward healthier digital habits and improved digital well-being.',
    stack: ['React Native', 'Python', 'Behavior ML'],
    github: 'https://github.com/jeenishrestha',
    accent: '#818cf8',
  },
  {
    number: '03',
    name: 'Student Data Management System',
    tagline: 'Structured Data Platform',
    description:
      'An efficient system for managing, querying, and displaying structured student records with a clean UI and robust backend architecture.',
    stack: ['Java', 'SQL', 'Data Structures'],
    github: 'https://github.com/jeenishrestha',
    accent: '#34d399',
  },
  {
    number: '04',
    name: 'ML Regression Projects',
    tagline: 'Data Science Analysis',
    description:
      'Applied regression analysis on the Wine Quality and Titanic datasets — feature engineering, model selection, and performance evaluation using scikit-learn.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/jeenishrestha',
    accent: '#fb923c',
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

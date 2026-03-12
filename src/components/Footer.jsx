import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Jeeni18' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeeni-shrestha-a041912b5/' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-[#020817]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg text-gradient mb-1">
              Jeeni Shrestha
            </p>
            <p className="font-mono text-[11px] text-slate-600 tracking-wide">
              Computer Engineering Student · AI Enthusiast
            </p>
          </div>

          {/* Center: Copyright */}
          <p className="font-mono text-[11px] text-slate-700 text-center">
            © {new Date().getFullYear()} Jeeni Shrestha. All rights reserved.
          </p>

          {/* Right: Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              >
                <social.icon size={15} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              whileHover={{ y: -2, scale: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

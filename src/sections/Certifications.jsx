import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ZoomIn } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper'

// Import certificate images here once added to src/assets/certificates/
import dataScienceCert from '../assets/certificates/data-science.jpg'
import MLCert from '../assets/certificates/ML-cert.png'
import ML from '../assets/certificates/AI_ML.jpg'
const certificates = [
  {
    id: 1,
    title: 'Data Science Certification',
    org: 'Khwopa College of Engineering',
    year: '2023',
    description: 'Comprehensive 70-hour course covering Python, data manipulation, machine learning, and model evaluation.',
    image: dataScienceCert,  // Uncomment after adding image
    // image: null, // placeholder
    color: '#22d3ee',
    initials: 'DS',
  },
  
  {
    id: 2,
    title: 'ANAIS',
    org: 'NAAMII',
    year: '2025',
    description: 'AI and its applications',
    image: MLCert,
    color: '#818cf8',
    initials: 'ML',
  },
  {
    id: 3,
    title: 'ML Fundamentals',
    org: 'COllabyte',
    year: '2024',
    description: 'Machine learning fundamentals.',
    image: ML,
    color: '#818cf8',
    initials: 'ML',
  },
]

function CertCard({ cert, onClick }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => onClick(cert)}
      className="group relative glow-border card-bg rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{ '--cert-color': cert.color }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/80">
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-display font-black text-white"
            style={{ background: `linear-gradient(135deg, ${cert.color}33, ${cert.color}11)`, border: `1px solid ${cert.color}33` }}
          >
            {cert.initials}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-mono tracking-wider"
            style={{ background: cert.color + '33', border: `1px solid ${cert.color}55` }}
          >
            <ZoomIn size={13} />
            <span>View Certificate</span>
          </div>
        </div>

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <p
          className="font-mono text-[9px] tracking-widest uppercase mb-1.5"
          style={{ color: cert.color + 'aa' }}
        >
          {cert.org} · {cert.year}
        </p>
        <h3 className="font-display font-semibold text-slate-200 text-sm leading-snug mb-2">
          {cert.title}
        </h3>
        <p className="font-body text-slate-500 text-[12px] leading-relaxed">
          {cert.description}
        </p>
      </div>

      {/* Award badge */}
      <div
        className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: cert.color + '20', border: `1px solid ${cert.color}40` }}
      >
        <Award size={13} style={{ color: cert.color }} />
      </div>
    </motion.div>
  )
}

export default function Certifications({ onCertClick }) {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        label="05 — Credentials"
        title="Certifications"
        subtitle="Verified learning milestones from courses and programs I've completed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert) => (
          <CertCard key={cert.id} cert={cert} onClick={onCertClick} />
        ))}
      </div>

      {/* <p className="mt-8 font-mono text-[11px] text-slate-600 text-center">
        To add certificates: place images in{' '}
        <span className="text-cyan-600">src/assets/certificates/</span> and update the data above.
      </p> */}
    </SectionWrapper>
  )
}

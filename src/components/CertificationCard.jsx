'use client'

import { motion } from 'framer-motion'

export function CertificationCard({ title, issuer, year, skills }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-xl p-6 shadow-lg shadow-emerald-900/20"
      animate={{
        boxShadow: ['0 4px 12px rgba(0,100,80,0.1)', '0 4px 20px rgba(0,100,80,0.2)'],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-emerald-100/60 text-sm mb-4">{issuer} - {year}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-emerald-700/40 text-emerald-100 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}


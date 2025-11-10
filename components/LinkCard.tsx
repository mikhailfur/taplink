'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface LinkCardProps {
  link: {
    id: number
    title: string
    url: string
    description: string
    icon: string
  }
}

export default function LinkCard({ link }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative manga-card p-8 cursor-pointer overflow-hidden"
        initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
        animate={{
          boxShadow: isHovered
            ? '0 0 40px rgba(255,255,255,0.3), 12px 12px 0px rgba(255,255,255,0.4), 8px 8px 0px rgba(255,255,255,0.2)'
            : '0 0 20px rgba(255,255,255,0.1), 4px 4px 0px rgba(255,255,255,0.2)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${link.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="0" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${link.id})`} />
          </svg>
        </div>

        <div className="absolute top-3 right-3 w-4 h-4 border-2 border-white opacity-30"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-2 border-white opacity-30"></div>
        
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity"
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full border-2 border-white rounded-full"></div>
        </motion.div>

        <div className="relative z-10 flex items-center gap-6">
          <motion.div
            className="w-16 h-16 border-4 border-black flex items-center justify-center bg-white"
            animate={{
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-3xl"
              animate={{
                rotate: isHovered ? [0, 15, -15, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {link.icon}
            </motion.span>
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="manga-text text-3xl md:text-4xl font-black text-black mb-2"
              animate={{
                letterSpacing: isHovered ? '0.15em' : '0.1em',
              }}
            >
              {link.title}
            </motion.h3>
            <p className="text-base text-gray-700 font-light tracking-wide uppercase text-xs">{link.description}</p>
          </div>

          <motion.div
            className="w-12 h-12 border-4 border-black flex items-center justify-center bg-black"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-2 bg-black"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  )
}


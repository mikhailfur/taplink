'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] manga-pattern">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="manga-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="80" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1.5" fill="rgba(255,255,255,0.15)" />
              <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)" />
              <circle cx="60" cy="60" r="1" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#manga-pattern)" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 w-40 h-40 border-4 border-white opacity-20 rotate-45 blur-[1px]"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-white opacity-15 rotate-12 blur-[1px]"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 border-4 border-white opacity-15 -rotate-45 blur-[1px]"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-white opacity-10 rotate-90"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      >
        <motion.div
          className="inline-block mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="manga-border px-10 py-5 inline-block">
            <span className="text-sm font-bold tracking-[0.3em] text-white">WELCOME</span>
          </div>
        </motion.div>

        <motion.h1
          className="manga-text text-8xl md:text-9xl lg:text-[12rem] font-black mb-12 text-white relative inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
                'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            TAP
          </motion.span>
          <motion.span
            className="inline-block ml-6"
            animate={{
              rotate: [0, 2, -2, 0],
              filter: [
                'drop-shadow(0 0 15px rgba(255,255,255,0.4))',
                'drop-shadow(0 0 30px rgba(255,255,255,0.6))',
                'drop-shadow(0 0 15px rgba(255,255,255,0.4))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            LINK
          </motion.span>
        </motion.h1>

        <motion.div
          className="w-40 h-1 bg-white mx-auto mb-12 relative"
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            animate={{
              boxShadow: [
                '0 0 10px rgba(255,255,255,0.5)',
                '0 0 20px rgba(255,255,255,0.8)',
                '0 0 10px rgba(255,255,255,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-16 font-light tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Your Links, One Beautiful Page
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full relative"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
          animate={{
            filter: [
              'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
              'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
              'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  )
}


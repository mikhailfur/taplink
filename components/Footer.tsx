'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="40" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-block border-2 border-white px-6 py-2 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-xs font-bold tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2024 TapLink
          </motion.p>
        </motion.div>
        <motion.p
          className="text-sm font-light tracking-wider opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Made with{' '}
          <motion.span
            className="inline-block"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.span>
          {' '}in manga style
        </motion.p>
      </div>
    </footer>
  )
}


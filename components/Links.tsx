'use client'

import { motion } from 'framer-motion'
import LinkCard from './LinkCard'

const links = [
  {
    id: 1,
    title: 'GitHub',
    url: 'https://github.com',
    description: 'Code repository',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Twitter',
    url: 'https://twitter.com',
    description: 'Follow me',
    icon: '🐦',
  },
  {
    id: 3,
    title: 'Portfolio',
    url: '#',
    description: 'My work',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Blog',
    url: '#',
    description: 'Read my thoughts',
    icon: '📝',
  },
  {
    id: 5,
    title: 'Contact',
    url: '#',
    description: 'Get in touch',
    icon: '✉️',
  },
]

export default function Links() {
  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-black opacity-10"></div>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block manga-border bg-white px-6 py-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Explore</span>
          </motion.div>
          <motion.h2
            className="manga-text text-6xl md:text-7xl lg:text-8xl font-black text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            LINKS
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-black mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="space-y-6">
          {links.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LinkCard link={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


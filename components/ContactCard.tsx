'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface Link {
  icon: string
  key: string
  value: string
  href: string
  target?: string
}

const links: Link[] = [
  {
    icon: 'envelope',
    key: 'mail',
    value: '[me@mikhailfur.ru]',
    href: 'mailto:me@mikhailfur.ru',
  },
  {
    icon: 'telegram',
    key: 'telegram',
    value: '[DATA IS NOT FOUND]',
    href: 'https://t.me/dataisnotfound',
    target: '_blank',
  },
  {
    icon: 'discord',
    key: 'discord',
    value: '[mikhail_fur]',
    href: 'https://discord.com/users/1029691592845578270',
    target: '_blank',
  },
  {
    icon: 'vk',
    key: 'vk',
    value: '[mikhail_fur]',
    href: 'https://vk.com/mikhail_fur',
    target: '_blank',
  },
  {
    icon: 'twitch',
    key: 'twitch',
    value: '[mikhailfurry]',
    href: 'https://www.twitch.tv/mikhailfurry',
    target: '_blank',
  },
  {
    icon: 'steam',
    key: 'steam',
    value: '[mikhail_fur]',
    href: 'https://steamcommunity.com/id/mikhail_fur',
    target: '_blank',
  },
  {
    icon: 'paypal',
    key: 'paypal',
    value: '[MikhailFurry]',
    href: 'https://paypal.me/MikhailFurry',
    target: '_blank',
  },
  {
    icon: 'github',
    key: 'github',
    value: '[GitHub]',
    href: 'https://github.com/mikhailfur?tab=repositories',
    target: '_blank',
  },
]

export default function ContactCard() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="nier-card w-full max-w-md rounded-lg p-6 md:p-4 fade-in-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <div className="text-center mb-4 pt-4 md:pt-8">
        <motion.div
          className="mb-4 md:mb-6 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, type: 'spring' }}
        >
          <motion.img
            src="/media/avatar.gif"
            alt="Mikhail_Fur"
            className="avatar w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        <motion.h1
          className="text-xl md:text-2xl lg:text-3xl tracking-widest text-[var(--nier-beige)] px-2 font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ fontFamily: 'var(--font-righteous), var(--font-exo2), sans-serif' }}
        >
          {t.name}
        </motion.h1>
        <motion.p
          className="text-xs md:text-sm opacity-70 mt-1 text-[var(--nier-beige)] whitespace-pre-line px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {t.description}
        </motion.p>
      </div>

      <motion.div
        className="glitch-line"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 1.8 }}
      />

      <motion.div
        className="text-center my-4 md:my-6 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <p className="text-xs md:text-sm lg:text-base italic opacity-80 text-[var(--nier-beige)] leading-relaxed">
          {t.quote}
        </p>
      </motion.div>

      <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target={link.target}
            rel={link.target ? 'noopener noreferrer' : undefined}
            className="contact-link flex items-center justify-between p-2 md:p-3 rounded-md text-[var(--nier-beige)] group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center flex-1 min-w-0 mr-2">
              <i className={`fa-${['telegram', 'discord', 'vk', 'twitch', 'steam', 'paypal', 'github'].includes(link.icon) ? 'brands' : 'solid'} fa-${link.icon} w-4 md:w-6 text-center mr-1 md:mr-2 flex-shrink-0`}></i>
              <span className="truncate text-xs md:text-sm">{t.links[link.key as keyof typeof t.links]}</span>
            </span>
            <span className="text-xs md:text-sm flex-shrink-0 ml-2">{link.value}</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-6 md:mt-8 text-[10px] md:text-xs text-center opacity-40 tracking-widest text-[var(--nier-beige)] px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          {t.footer}
        </motion.p>
        <div className="w-full bg-gray-700/50 rounded-full h-0.5 md:h-1 mt-2 md:mt-3">
          <div className="loader-bar"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}


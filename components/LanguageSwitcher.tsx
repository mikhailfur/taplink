'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'ko', name: '한국어' },
  ]

  return (
    <div className="fixed md:absolute top-3 md:top-5 right-3 md:right-5 z-20 flex gap-1.5 md:gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2.5 md:px-3 py-1.5 md:py-1 text-xs md:text-sm tracking-widest transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px] font-medium ${
            language === lang.code
              ? 'text-[var(--nier-beige)] bg-[var(--nier-beige)]/20 border border-[var(--nier-beige)]/40'
              : 'text-[var(--nier-beige)]/60 active:text-[var(--nier-beige)] active:bg-[var(--nier-beige)]/10 border border-transparent'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {lang.name}
        </motion.button>
      ))}
    </div>
  )
}


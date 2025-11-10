'use client'

import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import VolumeControl from './VolumeControl'

export default function MusicPlayer() {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
      setShowPrompt(false)
    }
  }

  return (
    <>
      {showPrompt && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity duration-500 cursor-pointer"
          onClick={handlePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-center px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="text-xl md:text-2xl tracking-widest text-[var(--nier-beige)] font-bold"
              animate={{
                textShadow: [
                  '0 0 10px rgba(197, 184, 161, 0.5)',
                  '0 0 20px rgba(197, 184, 161, 0.8)',
                  '0 0 10px rgba(197, 184, 161, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {t.initiate}
            </motion.p>
            <motion.p
              className="opacity-70 mt-2 text-xs md:text-sm text-[var(--nier-beige)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5 }}
            >
              {t.clickToContinue}
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      <audio ref={audioRef} loop>
        <source src="/media/amusementpark.mp3" type="audio/mpeg" />
      </audio>

      <VolumeControl audioRef={audioRef} isPlaying={isPlaying} />
    </>
  )
}


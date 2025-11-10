'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VolumeControlProps {
  audioRef: React.RefObject<HTMLAudioElement>
  isPlaying: boolean
}

export default function VolumeControl({ audioRef, isPlaying }: VolumeControlProps) {
  const [volume, setVolume] = useState(0.5)
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted, audioRef])

  useEffect(() => {
    const savedVolume = localStorage.getItem('volume')
    if (savedVolume) {
      const vol = parseFloat(savedVolume)
      setVolume(vol)
      if (audioRef.current) {
        audioRef.current.volume = vol
      }
    }
  }, [audioRef])

  const handleVolumeChange = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume))
    setVolume(clampedVolume)
    setIsMuted(clampedVolume === 0)
    localStorage.setItem('volume', clampedVolume.toString())
  }

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false)
      if (volume === 0) {
        handleVolumeChange(0.5)
      }
    } else {
      setIsMuted(true)
    }
  }

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    handleVolumeChange(percentage)
  }

  const handleSliderDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return
    e.preventDefault()
    handleSliderClick(e)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const percentage = x / rect.width
    handleVolumeChange(percentage)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.volume-control-panel')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  if (!isPlaying) return null

  return (
    <div className="fixed md:absolute top-3 md:top-5 left-3 md:left-5 z-20 volume-control-panel">
      <motion.button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="cursor-pointer text-[var(--nier-beige)] opacity-60 hover:opacity-100 active:opacity-100 transition-opacity touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center relative"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isMuted || volume === 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="md:w-[22px] md:h-[22px]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L11.207 8.5l2.647 2.646a.5.5 0 0 1-.708.708L10.5 9.207l-2.646 2.647a.5.5 0 0 1-.708-.708L9.793 8.5 7.146 5.854a.5.5 0 1 1 .708-.708L10.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          </svg>
        ) : volume < 0.5 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="md:w-[22px] md:h-[22px]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="md:w-[22px] md:h-[22px]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.707.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89l.707.707z" />
            <path d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
            className="absolute top-12 left-0 bg-[var(--nier-card-bg)] backdrop-filter backdrop-blur-lg border border-[var(--nier-beige)]/30 p-4 rounded-lg shadow-lg min-w-[200px] z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="text-[var(--nier-beige)] opacity-70 hover:opacity-100 active:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted || volume === 0 ? (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L11.207 8.5l2.647 2.646a.5.5 0 0 1-.708.708L10.5 9.207l-2.646 2.647a.5.5 0 0 1-.708-.708L9.793 8.5 7.146 5.854a.5.5 0 1 1 .708-.708L10.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                  </svg>
                )}
              </motion.button>
              <span className="text-xs text-[var(--nier-beige)]/70 min-w-[40px] text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
            <div
              ref={sliderRef}
              onClick={handleSliderClick}
              onMouseMove={handleSliderDrag}
              onMouseDown={handleSliderDrag}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchMove}
              className="relative h-2 bg-[var(--nier-beige)]/20 rounded-full cursor-pointer group touch-manipulation"
            >
              <motion.div
                className="absolute h-full bg-[var(--nier-beige)] rounded-full shadow-sm"
                style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--nier-beige)] rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity shadow-lg border-2 border-[var(--nier-dark)]"
                style={{ left: `calc(${(isMuted ? 0 : volume) * 100}% - 8px)` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


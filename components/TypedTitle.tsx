'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TypedTitle() {
  const { language } = useLanguage()

  useEffect(() => {
    const titlePhrases = language === 'ko' 
      ? [
          '연결 초기화 중...',
          '사용자 데이터 액세스 중...',
          '사용자: MIKHAILFUR',
          '상태: 온라인',
          '// 인류에게 영광을',
        ]
      : [
          'Инициализация соединения...',
          'Доступ к данным пользователя...',
          'USER: MIKHAILFUR',
          'STATUS: ONLINE',
          '// Glory to Mankind',
        ]

    let currentPhraseIndex = 0
    let currentCharIndex = 0
    const typingDelay = 120
    const phraseEndDelay = 2000

    const animateTypedTitle = () => {
      if (currentCharIndex < titlePhrases[currentPhraseIndex].length) {
        document.title =
          titlePhrases[currentPhraseIndex].substring(0, currentCharIndex + 1) +
          '█'
        currentCharIndex++
        setTimeout(animateTypedTitle, typingDelay)
      } else {
        document.title = titlePhrases[currentPhraseIndex]
        setTimeout(() => {
          currentPhraseIndex++
          if (currentPhraseIndex >= titlePhrases.length) {
            currentPhraseIndex = 0
          }
          currentCharIndex = 0
          setTimeout(animateTypedTitle, typingDelay)
        }, phraseEndDelay)
      }
    }

    animateTypedTitle()
  }, [language])

  return null
}


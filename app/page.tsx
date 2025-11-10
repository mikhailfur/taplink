'use client'

import GlitchCanvas from '@/components/GlitchCanvas'
import TypedTitle from '@/components/TypedTitle'
import MusicPlayer from '@/components/MusicPlayer'
import ContactCard from '@/components/ContactCard'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-2 md:p-4 relative">
      <TypedTitle />
      <GlitchCanvas />
      <MusicPlayer />
      <LanguageSwitcher />
      <ContactCard />
    </main>
  )
}


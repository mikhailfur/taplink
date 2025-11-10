# MikhailFur TapLink

<div align="center">

**A beautiful Nier:Automata-inspired link page with glitch effects, animations, and multilingual support**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-purple?style=flat-square)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

</div>

---

## ✨ Features

- 🎨 **Nier:Automata-inspired Design** - Dark theme with beige accents, glitch effects, and scanlines
- 🎵 **Background Music Player** - Ambient music with volume control and mute functionality
- 🌐 **Multilingual Support** - English and Korean with seamless language switching
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid interactions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎭 **Glitch Effects** - Canvas-based visual effects with scanlines and distortion
- 🔤 **Anime-style Fonts** - Beautiful typography using Google Fonts (Exo 2, Righteous, Orbitron, M PLUS Rounded 1c)
- 💾 **Persistent Settings** - Language and volume preferences saved in localStorage
- 🐳 **Docker Ready** - Easy deployment with Docker and Docker Compose

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd taplink

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
bun build
bun start
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

### Using Docker

```bash
# Build the image
docker build -t taplink .

# Run the container
docker run -p 3000:3000 taplink
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🎨 Customization

### Adding/Editing Links

Edit `lib/translations.ts` to customize your links and text:

```typescript
export const translations = {
  en: {
    name: 'Your_Name',
    description: 'Your description here',
    links: {
      mail: 'SYSTEM.MAIL:',
      telegram: 'CONNECTION.TELEGRAM:',
      // Add more links...
    },
  },
  // ...
}
```

### Changing Media Files

Replace files in `public/media/`:
- `avatar.gif` - Your profile avatar
- `amusementpark.mp3` - Background music
- `yorha.png` - Background image (optional)

### Styling

- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Modify Google Fonts imports in `app/layout.tsx`
- **Animations**: Adjust Framer Motion animations in component files

### Adding New Languages

1. Add translations to `lib/translations.ts`
2. Update the `Language` type in `lib/translations.ts`
3. Add language option to `components/LanguageSwitcher.tsx`

## 📁 Project Structure

```
taplink/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with fonts and providers
│   └── page.tsx             # Main page component
├── components/
│   ├── ContactCard.tsx      # Main contact card with links
│   ├── GlitchCanvas.tsx     # Canvas-based glitch effects
│   ├── LanguageSwitcher.tsx # Language selection component
│   ├── MusicPlayer.tsx      # Background music player
│   ├── TypedTitle.tsx       # Animated browser title
│   └── VolumeControl.tsx    # Volume slider and mute button
├── contexts/
│   └── LanguageContext.tsx  # Language state management
├── lib/
│   └── translations.ts      # Translation strings
├── public/
│   └── media/               # Static assets (images, audio)
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Google Fonts (Exo 2, Righteous, Orbitron, M PLUS Rounded 1c, Noto Sans KR)
- **Icons**: [Font Awesome](https://fontawesome.com/)

## 🎯 Key Components

### GlitchCanvas
Canvas-based visual effects that create a Nier:Automata-style glitch and scanline effect.

### MusicPlayer
Background music player with user interaction prompt and integration with VolumeControl.

### VolumeControl
Advanced volume control with:
- Slider for precise volume adjustment
- Mute/unmute toggle
- Persistent settings (localStorage)
- Smooth animations

### ContactCard
Main content card displaying:
- Profile information
- Social media links
- Animated avatar
- Quote section

### LanguageSwitcher
Seamless language switching between English and Korean with persistent preferences.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

No environment variables required for basic usage.

### Next.js Config

The project uses Next.js standalone output mode for optimized Docker builds. See `next.config.js` for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Nier:Automata's UI design
- Fonts provided by [Google Fonts](https://fonts.google.com/)
- Icons by [Font Awesome](https://fontawesome.com/)

---

<div align="center">

**Built with ❤️ using Next.js and TypeScript**

*Glory to Mankind //*

</div>

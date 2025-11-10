export type Language = 'en' | 'ko'

export const translations = {
  en: {
    welcome: 'WELCOME',
    name: 'Mikhail_Fur',
    description: 'WebUI Designer, Front/Back Dev.\nJust a regular guy.',
    quote: '"Everything that lives is designed to end. We are perpetually trapped... in a never-ending spiral of life and death."',
    initiate: '[ INITIATE ]',
    clickToContinue: 'Click anywhere to continue',
    links: {
      mail: 'SYSTEM.MAIL:',
      telegram: 'CONNECTION.TELEGRAM:',
      discord: 'CONNECTION.DISCORD:',
      vk: 'CONNECTION.VK:',
      twitch: 'MEDIAFOLDER.TWITCH:',
      steam: 'GAMINGFOLDER.STEAM:',
      paypal: 'FINANCE.PAYPAL:',
      github: 'DATA.PORTFOLIO:',
    },
    footer: '// GLORY TO MANKIND //',
  },
  ko: {
    welcome: '환영합니다',
    name: 'Mikhail_Fur',
    description: '웹UI 디자이너, 프론트/백엔드 개발자.\n평범한 사람입니다.',
    quote: '"살아있는 모든 것은 끝나도록 설계되어 있습니다. 우리는 영원히 갇혀 있습니다... 생명과 죽음의 끝없는 나선 속에."',
    initiate: '[ 시작 ]',
    clickToContinue: '아무 곳이나 클릭하여 계속하세요',
    links: {
      mail: '시스템.Mail:',
      telegram: '연결.Telegram:',
      discord: '연결.Discord:',
      vk: '연결.VK:',
      twitch: '미디어폴더.Twitch:',
      steam: '게임폴더.Steam:',
      paypal: '금융.PayPal:',
      github: '데이터.GitHub:',
    },
    footer: '// 인류에게 영광을 //',
  },
}

export const getTranslations = (lang: Language) => translations[lang]


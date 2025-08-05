// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}', // si tu utilises le dossier "app" de Next.js 13+
  ],
  theme: {
    extend: {
      colors: {
        ivoire: '#F4C430',
        lagoon: '#0077B6',
        palm: '#2F5233',
        muted: '#5F6368',
        shill:'#d0644c'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

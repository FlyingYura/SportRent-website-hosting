import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/FlyingYura/SportRent-website-hosting', // ← важливо: назва репозиторію

  include: ['firebase/app', 'firebase/auth', 'react-firebase-hooks/auth']
})

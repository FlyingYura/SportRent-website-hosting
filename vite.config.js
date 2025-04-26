import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', 

  include: ['firebase/app', 'firebase/auth', 'react-firebase-hooks/auth']
})

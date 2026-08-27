import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub Pages project path this deploys to
  // (https://perizat0396.github.io/vku.edu.kz/) — react-router's basename
  // needs a real absolute prefix, not a relative one. If the site ever
  // moves to its own domain at the root, change this to '/' and update
  // the matching path in public/404.html and index.html.
  base: '/vku.edu.kz/',
})

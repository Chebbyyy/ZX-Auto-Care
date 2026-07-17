import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Custom UI system (replaces Bootstrap CSS) + Lucide icon metrics + legacy design styles
import './styles/zx-ui.css'
import './styles/zx-icons.css'
import '../../style.css'
import './styles/typography.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

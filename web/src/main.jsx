import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/ze-ui.css'
import './styles/ze-icons.css'
import './styles/ze-legacy.css'
import './styles/ze-system.css'
import './styles/typography.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

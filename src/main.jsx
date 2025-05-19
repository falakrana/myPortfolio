import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css' // Import Poppins font styles
import './carousel.css' // Import carousel styles
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

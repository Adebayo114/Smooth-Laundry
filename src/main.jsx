import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "@fontsource/poppins"; // Defaults to 400 (regular)
import "@fontsource/poppins/700.css"; // If you need to specify the weight
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

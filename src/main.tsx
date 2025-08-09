import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/sass/main.scss"

createRoot(document.getElementById('root')!).render(
    <App />
)

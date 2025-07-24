import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/sass/main.scss"
import "./assets/sass/common/media.scss"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/main.scss'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<StrictMode></StrictMode>)

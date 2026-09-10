import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const notes = [
  {
    id: 1,
    content: 'Note 1',
    important: true
  },
  {
    id: 2,
    content: 'Note 2',
    important: false
  },
  {
    id: 3,
    content: 'Note 3',
    important: true
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App notes={notes} />
  </StrictMode>,
)

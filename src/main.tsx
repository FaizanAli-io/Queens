import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PageWrapper } from './components/PageWrapper'

import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageWrapper />
  </StrictMode>,
)

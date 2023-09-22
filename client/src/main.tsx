import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import { MantineProvider } from '@mantine/core'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>{router}</MantineProvider>
  </React.StrictMode>,
)

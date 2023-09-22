import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import { MantineProvider } from '@mantine/core'
import { AuthProvider } from './providers/authProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider>
        {router}
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>,
)

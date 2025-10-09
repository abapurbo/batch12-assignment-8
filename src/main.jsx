  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import { RouterProvider } from 'react-router'
  import router from './Routes/router'
  import AuthContext from './context/AuthContext'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </StrictMode>,
  )

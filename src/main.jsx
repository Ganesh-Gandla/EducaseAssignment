import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageProvider from './context/PageProvider.jsx'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'


const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageProvider>
      <RouterProvider router={AppRoutes} />
    </PageProvider>
  </StrictMode>,
)

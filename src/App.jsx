import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,       // ✅ Header is main layout
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

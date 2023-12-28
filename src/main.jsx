import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Support from './Support/Support.jsx'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='support' element={<Support />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)

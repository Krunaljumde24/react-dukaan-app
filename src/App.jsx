import { useState } from 'react'
import './App.css'
import Login from './Login'
import Welcome from './Welcome'

import UserContextProvider from './context/UserContextProvider'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <UserContextProvider>
        <Login />
        <Welcome />
      </UserContextProvider> */}
    </>
  )
}

export default App

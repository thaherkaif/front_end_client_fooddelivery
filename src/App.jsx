import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './suby/pages/LandingPage'
import ProductMenu from './suby/components/ProductMenu'
import SignIn from './suby/components/forms/SignIn'
import Register from './suby/components/forms/Register'

import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'


import Home from './pages/Home'
import Login from './pages/Login'
import Peca from './pages/Peca'

export default function MyRoutes() {
  
  return (
    // Make routes available to all components
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path="/peca/:id" element={<Peca />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
// ============================================================
//  App.jsx — The Root Component
//
//  This file sets up the ROUTER.
//  Think of it like a traffic controller:
//    - "/" goes to Home page
//    - "/about" goes to About page
//    - "/contact" goes to Contact page
//
//  BrowserRouter  → enables URL-based navigation
//  Routes         → the container that holds all routes
//  Route          → one path + one component pair
// ============================================================

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './features/Home/Homepage'
import Aboutpage from './features/About/Aboutpage'
import Contact from './features/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Homepage />} />
        <Route path="/about"   element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// App.jsx
// This file sets up routing (which URL shows which page)
// Navbar is NOT here — each page adds it on its own if needed

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage  from './features/Home/Homepage'
import Aboutpage from './features/About/Aboutpage'
import Contact   from './features/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Homepage />}  />
        <Route path="/about"   element={<Aboutpage />} />
        <Route path="/contact" element={<Contact />}   />
      </Routes>
    </BrowserRouter>
  )
}

export default App

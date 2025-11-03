import React from 'react'
import Signup from './Singup'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Dashboard from './Dashboard'
import Contact from './Contact'
import Login from './Login'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      {/* <Signup /> */}
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
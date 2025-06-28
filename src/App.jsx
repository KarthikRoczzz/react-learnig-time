import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <>
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <div>
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>
        {console.log(123)}
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Navigate to={'/about'} />}></Route>
        </Routes>
      </div>
    </>
  )
}

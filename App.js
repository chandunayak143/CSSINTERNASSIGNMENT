import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "0px 25px" }}>
        <Hero />
      </div>
    </div>
  )
}

export default App







import React, { useState } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Explore from './explore/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <Navbar />
      <Explore />
    </div>
  )
}

export default App

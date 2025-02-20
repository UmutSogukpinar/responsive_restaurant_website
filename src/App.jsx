import React, { useState } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Explore from './explore/Explore'
import Order from './order/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <Navbar />
      <Explore />
      <Order />
    </div>
  )
}

export default App

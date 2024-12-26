import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Card from './components/Card'

function App() {
  return (
    <div className=' relativ w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
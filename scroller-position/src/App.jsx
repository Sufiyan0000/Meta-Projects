import { useState } from 'react'
import './App.css'
import ScrollerPosition from './Components/ScrollerPosition'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollerPosition />
    </>
  )
}

export default App

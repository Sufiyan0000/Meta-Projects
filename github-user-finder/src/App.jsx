import { useState } from 'react'
import './App.css'
import GitProfileFinder from './Components/GitProfileFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GitProfileFinder />
    </>
  )
}

export default App

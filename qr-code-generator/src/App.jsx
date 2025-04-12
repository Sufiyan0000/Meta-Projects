import { useState } from 'react'
import './App.css'
import QrCodeGenerator from './Components/QrCodeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QrCodeGenerator />
    </>
  )
}

export default App

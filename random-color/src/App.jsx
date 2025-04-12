import { useState } from 'react'
import './App.css'
import RandomColorGenerator from './RandomColor'
import LoadMoreData from './Components/LoadMoreData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
         {/* <RandomColorGenerator /> */}

         <LoadMoreData />
    </div>
  )
}

export default App

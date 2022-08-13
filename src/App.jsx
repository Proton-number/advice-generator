import { useState } from 'react'
import './App.css'
import Advice from './components/Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Advice />
    </div>
  )
}

export default App

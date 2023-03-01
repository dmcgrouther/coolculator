import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [number, setNumber] = useState<string>("0");

  return (
    <div className="App">
      <h1>Coolculator</h1> 
      {number}
    </div>
  )
}

export default App

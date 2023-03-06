import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Decimal} from 'decimal.js';

function App() {

  const [number, setNumber] = useState<string>("0");
  // let x : Decimal = new Decimal(0.1)
  // let y : Decimal = new Decimal(0.2);
  // console.log(x.add(y).toString())

  return (
    <div className="App">
      <h1>Coolculator</h1> 
      {number}
    </div>
  )
}

export default App

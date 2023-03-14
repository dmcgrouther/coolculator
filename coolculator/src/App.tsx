import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Decimal} from 'decimal.js';
import { NumberButton } from './components/NumberButton';

function App() {

  const handleNumberClick = (digit: string):void => {
    alert(`You clicked ${digit}!`)
  }
  //   /*

  //   If there is an active operation, we update num2, else, update num1

  //   */

  // }

  // const handleBinaryClick = (key: BinaryOp): void => { // does NOT do calculation, but sets the activeOp

  // }

  // const handleUnaryClick = (key: UnaryOp): void => { // does calculation

  // }

  // const handleEqualsClick = (): void => { // calculates binary operations

  // }

  // const handleDecimalClick = (): void => { }

  const [displayNumber, setDisplayNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("");
  // let x : Decimal = new Decimal(0.1)
  // let y : Decimal = new Decimal(0.2);
  // console.log(x.add(y).toString())

  return (
    <div className="App">
      <h1>Coolculator</h1> 
      <h2>{displayNumber}</h2>
      <div className="numpad">
        <NumberButton buttonLabel={"1"} handleNumberClick={(e) => handleNumberClick("1")} />
        <NumberButton buttonLabel={"2"} handleNumberClick={(e) => handleNumberClick("2")} />
        <NumberButton buttonLabel={"3"} handleNumberClick={(e) => handleNumberClick("3")} />
        <NumberButton buttonLabel={"4"} handleNumberClick={(e) => handleNumberClick("4")} />
        <NumberButton buttonLabel={"5"} handleNumberClick={(e) => handleNumberClick("5")} />
        <NumberButton buttonLabel={"6"} handleNumberClick={(e) => handleNumberClick("6")} />
        <NumberButton buttonLabel={"7"} handleNumberClick={(e) => handleNumberClick("7")} />
        <NumberButton buttonLabel={"8"} handleNumberClick={(e) => handleNumberClick("8")} />
        <NumberButton buttonLabel={"9"} handleNumberClick={(e) => handleNumberClick("9")} />
        <NumberButton buttonLabel={"0"} handleNumberClick={(e) => handleNumberClick("0")} />
      </div>

    </div>
  )
}

export default App

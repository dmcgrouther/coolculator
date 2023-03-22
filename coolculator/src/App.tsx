import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Decimal} from 'decimal.js';
import { NumberButton } from './components/NumberButton';
import { CalcButton } from './components/CalcButton';
import { OperationButton } from './components/OperationButton'

type BinaryOp = "+" | "-" | "*" | "/" | "";

function App() {

  const doCalculation = ():string => {
    if(activeOperation === "") {
      return "";
    }
    let x : Decimal = new Decimal(firstNumber);
    let y : Decimal = new Decimal(displayNumber);
    let answer: Decimal;
    switch(activeOperation) {
      case "+":
        answer = x.add(y);
        break;
      case "-":
        answer = x.minus(y);
        break;
      case "*":
        answer = x.times(y);
        break;
      case "/":
        answer = x.div(y);
        break;
    }
    return answer.toString();
  // console.log(x.add(y).toString())
  }

  const handleNumberClick = (digit: string):void => {
    // alert(`You clicked ${digit}!`)
    if(displayNumber === '0'){
      if(digit !== '0'){
        setDisplayNumber(digit)
      }
    } else {
      setDisplayNumber(displayNumber + digit)
    }
  }
  //   /*

  //   If there is an active operation, we update num2, else, update num1

  //   */

  // }

  // const handleBinaryClick = (key: BinaryOp): void => { // does NOT do calculation, but sets the activeOp

  // }

  const handleEqualsClick = (): void => { // calculates binary operations
    setSecondNumber(displayNumber);
    let answer:string = doCalculation();
    setActiveOperation("");
    setDisplayNumber(answer);
    setOnFirstNumber(true);

  }

  const handleDecimalClick = (): void => {
    if(!displayNumber.includes(".")) {
      setDisplayNumber(displayNumber + ".")
    }

  }
  
  const handleSignClick = (): void => {
    if(displayNumber[0] === "-") {
      setDisplayNumber(displayNumber.slice(1));
    } else {
      setDisplayNumber("-" + displayNumber);
    }

  }

  const handleOperationClick = (operation: BinaryOp): void => {
    setActiveOperation(operation)
    setFirstNumber(displayNumber)
    setDisplayNumber("0")
    setOnFirstNumber(false)
  }

  const handleBackSpaceClick = (): void => {
    if(displayNumber.length > 1) {
      setDisplayNumber(displayNumber.slice(0, -1));
    } else {
      setDisplayNumber("0");
    }
  }

  const [displayNumber, setDisplayNumber] = useState<string>("0");
  const [onFirstNumber, setOnFirstNumber] = useState<boolean>(true); // isn't this just !activeOperation ?
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [activeOperation, setActiveOperation] = useState<BinaryOp>("");

  return (
    <div className="App">
      <h1>Coolculator</h1> 
      <h2>{displayNumber}</h2>
      <div className="numpad">
        <NumberButton buttonLabel={"1"} handleNumberClick={(e) => handleNumberClick("1")} />
        <NumberButton buttonLabel={"2"} handleNumberClick={(e) => handleNumberClick("2")} />
        <NumberButton buttonLabel={"3"} handleNumberClick={(e) => handleNumberClick("3")} />
        <OperationButton isOperationActive={activeOperation.length !== 0} buttonLabel={"+"} handleOperationClick={(e) => handleOperationClick("+")} />
        <NumberButton buttonLabel={"4"} handleNumberClick={(e) => handleNumberClick("4")} />
        <NumberButton buttonLabel={"5"} handleNumberClick={(e) => handleNumberClick("5")} />
        <NumberButton buttonLabel={"6"} handleNumberClick={(e) => handleNumberClick("6")} />
        <OperationButton isOperationActive={activeOperation.length !== 0} buttonLabel={"-"} handleOperationClick={(e) => handleOperationClick("-")} />
        <NumberButton buttonLabel={"7"} handleNumberClick={(e) => handleNumberClick("7")} />
        <NumberButton buttonLabel={"8"} handleNumberClick={(e) => handleNumberClick("8")} />
        <NumberButton buttonLabel={"9"} handleNumberClick={(e) => handleNumberClick("9")} />
        <OperationButton isOperationActive={activeOperation.length !== 0} buttonLabel={"\u00D7"} handleOperationClick={(e) => handleOperationClick("*") }/>
        <NumberButton buttonLabel={"0"} handleNumberClick={(e) => handleNumberClick("0")} />
        <CalcButton buttonLabel={"."} handleCalcClick={handleDecimalClick} />
        <CalcButton buttonLabel={"+/-"} handleCalcClick={handleSignClick} />
        <OperationButton isOperationActive={activeOperation.length !== 0} buttonLabel={"\u00F7"} handleOperationClick={(e) => handleOperationClick("/")} />
        <CalcButton buttonLabel={"\u232B"} handleCalcClick={handleBackSpaceClick} />
        <CalcButton buttonLabel={"Reset"} handleCalcClick={() => window.location.reload()} />
        <CalcButton buttonLabel={"="} handleCalcClick={handleEqualsClick} />
      </div>

    </div>
  )
}

export default App

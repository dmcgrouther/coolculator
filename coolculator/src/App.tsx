import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Decimal} from 'decimal.js';
import { NumberButton } from './components/NumberButton';
import { CalcButton } from './components/CalcButton';
import { OperationButton } from './components/OperationButton'

type BinaryOp = "+" | "-" | "*" | "/" | "";

enum ActionType {
  NUMBER,
  EQUALS,
  DECIMAL,
  SIGN,
  OPERATION,
  BACKSPACE,
  SQUAREROOT
}

interface AppState {
  displayNumber: string,
  onFirstNumber: boolean,
  firstNumber: string,
  activeOperation: BinaryOp,
  virginState: boolean
}

const initialState : AppState = {
  displayNumber: "0",
  onFirstNumber: true,
  firstNumber: "0",
  activeOperation: "",
  virginState: true
}

type Action =
| {type: ActionType.NUMBER, digit: string}
| {type: ActionType.EQUALS }
| {type: ActionType.DECIMAL }
| {type: ActionType.SIGN }
| {type: ActionType.OPERATION, operation: BinaryOp}
| {type: ActionType.BACKSPACE }
| {type: ActionType.SQUAREROOT }


function calcReducer(state: AppState, action: Action):AppState {

  const doCalculation = ():string => {
    if(state.activeOperation === "") {
      return "";
    }
    let x : Decimal = new Decimal(state.firstNumber);
    let y : Decimal = new Decimal(state.displayNumber);
    let answer: Decimal;
    switch(state.activeOperation) {
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
        if(y.toString() === "0") {
          alert("You can't divide by zero!!!");
          window.location.reload();
          return "";
        } else {
          answer = x.div(y);
        }

        break;
    }
    return answer.toString();

  }

  switch(action.type) {
    case ActionType.NUMBER:
      const digit = action.digit;
      if(state.virginState) {
        if(digit !== '0'){
          return {...state, displayNumber: digit, virginState: false}
        }
        return {...state, displayNumber: digit }
      } else {
        return {...state, displayNumber: state.displayNumber + digit }
      }
    case ActionType.EQUALS:
      if(!state.onFirstNumber) {
        let answer:string = doCalculation();
        return {...state, activeOperation: "", displayNumber: answer, onFirstNumber: true, virginState: true }
      }
      break;
    case ActionType.DECIMAL:
      if(state.virginState) {
        return {...state, displayNumber: "0.", virginState: false }
      }
      if(!state.displayNumber.includes(".")) {
        return {...state, displayNumber: state.displayNumber + "." };
      }
      break;
    case ActionType.SIGN:
      if(state.displayNumber[0] === "-") {
        return {...state, displayNumber: state.displayNumber.slice(1) };
      } else {
        return {...state, displayNumber: "-" + state.displayNumber };
      }
    case ActionType.OPERATION:
      return {...state, activeOperation: action.operation, firstNumber: state.displayNumber, onFirstNumber: false, virginState: true };
    case ActionType.BACKSPACE:
      if(state.virginState) {
        return {...state, displayNumber: "0"}
      }
      if(state.displayNumber.length > 1) {
        return {...state, displayNumber: state.displayNumber.slice(0, -1)};
      } else {
        return {...state, displayNumber: "0" };
      }
    case ActionType.SQUAREROOT:
      let x : Decimal = new Decimal(state.displayNumber).sqrt();
      return {...state, displayNumber: x.toString(), virginState: true}
    default:
      return state;
  }

  return state;

}

function App() {

  const [state, dispatch] = useReducer(calcReducer, initialState);

  const handleNumberClick = (digit: string):void => {
    dispatch({
      type: ActionType.NUMBER,
      digit
    })
  }

  const handleEqualsClick = (): void => { // calculates binary operations
    dispatch({type: ActionType.EQUALS});
  }

  const handleDecimalClick = (): void => {
    dispatch({type: ActionType.DECIMAL})

  }
  
  const handleSignClick = (): void => {
    dispatch({type: ActionType.SIGN})

  }

  const handleOperationClick = (operation: BinaryOp): void => {
    dispatch({type: ActionType.OPERATION, operation})
  }

  const handleBackSpaceClick = (): void => {
    dispatch({type: ActionType.BACKSPACE});
  }

  const handleSquareRoot = (): void => {
    dispatch({type: ActionType.SQUAREROOT})
  }
  return (
    <div className="App">
      <div className="main-frame">
        <h1 className="cool-title">Coolculator</h1> 
        <h2 className="display-window">{state.displayNumber}</h2>
        <div className="numpad">
          <NumberButton buttonLabel={"1"} handleNumberClick={(e) => handleNumberClick("1")} />
          <NumberButton buttonLabel={"2"} handleNumberClick={(e) => handleNumberClick("2")} />
          <NumberButton buttonLabel={"3"} handleNumberClick={(e) => handleNumberClick("3")} />
          <OperationButton isOperationActive={state.activeOperation.length !== 0} buttonLabel={"+"} handleOperationClick={(e) => handleOperationClick("+")} />
          <NumberButton buttonLabel={"4"} handleNumberClick={(e) => handleNumberClick("4")} />
          <NumberButton buttonLabel={"5"} handleNumberClick={(e) => handleNumberClick("5")} />
          <NumberButton buttonLabel={"6"} handleNumberClick={(e) => handleNumberClick("6")} />
          <OperationButton isOperationActive={state.activeOperation.length !== 0} buttonLabel={"-"} handleOperationClick={(e) => handleOperationClick("-")} />
          <NumberButton buttonLabel={"7"} handleNumberClick={(e) => handleNumberClick("7")} />
          <NumberButton buttonLabel={"8"} handleNumberClick={(e) => handleNumberClick("8")} />
          <NumberButton buttonLabel={"9"} handleNumberClick={(e) => handleNumberClick("9")} />
          <OperationButton isOperationActive={state.activeOperation.length !== 0} buttonLabel={"\u00D7"} handleOperationClick={(e) => handleOperationClick("*") }/>
          <NumberButton buttonLabel={"0"} handleNumberClick={(e) => handleNumberClick("0")} />
          <CalcButton buttonLabel={"."} handleCalcClick={handleDecimalClick} />
          <CalcButton buttonLabel={"+/-"} handleCalcClick={handleSignClick} />
          <OperationButton isOperationActive={state.activeOperation.length !== 0} buttonLabel={"\u00F7"} handleOperationClick={(e) => handleOperationClick("/")} />
          <CalcButton buttonLabel={"\u232B"} handleCalcClick={handleBackSpaceClick} />
          <CalcButton buttonLabel={"Reset"} handleCalcClick={() => window.location.reload()} />
          <CalcButton buttonLabel={"="} handleCalcClick={handleEqualsClick} />
          <CalcButton buttonLabel={"sqrt"} handleCalcClick={handleSquareRoot} />
        </div>

      </div>
      
    </div>
  )
}

export default App

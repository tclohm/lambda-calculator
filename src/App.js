import React, { useState } from "react";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers";
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators";
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials";
import { Display } from "./components/DisplayComponents/Display";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  
  const [output, setOutput] = useState(0);

  const [numberInput, setNumberInput] = useState('');

  const [operatorInput, setOperatorInput] = useState(undefined);

  const changeOutput = (number, previousNumber="0") => {
    // if(previousNumber == "0" || number != "0") {
    //   setOutput(number);
    // } else {
    //   setOutput(previousNumber+number);
    // }
    setOutput(number+previousNumber)
  }

  const mutate = (number, previousNumber, operator) => {
    if (operator === "x") {
      multiply(number, previousNumber)
    }
    if (operator === "/") {
      divide(number, previousNumber)
    }
    if (operator === "+") {
      add(number, previousNumber)
    }
    if (operator === "-") {
      subtract(number, previousNumber)
    }
  }

  const multiply = (number, previousNumber) => {
    const result = previousNumber * number
    setOutput(result);
  }

  const divide = (number, previousNumber) => {
    const result = previousNumber / number
    setOutput(result);
  }

  const add = (number, previousNumber) => {
    const result = previousNumber + number
    setOutput(result);
  }

  const subtract = (number, previousNumber) => {
    const result = previousNumber - number
    setOutput(result);
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display output={output}/>
        <section className="button-container">
        <div className="left-side">
          <Specials special={setOperatorInput} />
          <Numbers output={setOutput} numberInput={setNumberInput} previousInput={numberInput} numberFunction={changeOutput}/>
        </div>
        <div className="right-side">
          <Operators operation={setOperatorInput} operationFunction={mutate}/>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;

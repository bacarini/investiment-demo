import logo from './assets/investment-calculator-logo.png';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10
  });

  function handleOnChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue
      };
    })
  }

  const isValidInput = userInput.duration >= 1;

  return (
    <>
     <header id="header">
        <img src={logo} alt="logo"/>
        <h1>Investiment Calculator</h1>
      </header>
      <UserInput userInput={userInput} onChangeUserInput={handleOnChange}/>
      {!isValidInput && <p className='center'>Please enter a valid input</p>}
      {isValidInput && <Results userInput={userInput}/>}
    </>
  )
}

export default App

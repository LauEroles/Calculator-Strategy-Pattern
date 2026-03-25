import React, { useState } from 'react';

// Define the buttons for the calculator
const buttons=[
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
];

//Define the main App component
function App() {
  
  //create a state variable to hold the current display value
  const [display, setDisplay] = useState('');

  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  //function to handle button clicks
  //concatenate the button value to the display string
  const handleButtonClick=(value:string)=>{
    //if it is a number or a dot, concatenate it to the display
    if(!isNaN(Number(value)) || value === '.'){
      if(waitingForSecondNumber){
        setDisplay(value); //replace the display with the new number value
        setWaitingForSecondNumber(false);
      }else{
        setDisplay(display ==='0' ? value : display + value); //concatenate the new number value to the display
      }
    }

    //if it is an operation
    else if(['+', '-', '*', '/'].includes(value)){
      setFirstNumber(display); //save the current display value as the first number
      setOperation(value); //save the operation
      setWaitingForSecondNumber(true); //set the flag to wait for the second number
    }

    //if it is the equal sign, perform the calculation
    else if(value === '='){
      if(firstNumber && operation){
        const num1 = parseFloat(firstNumber); //get the first number from the firstNumber state variable
        const num2 = parseFloat(display); //get the second number from the display
        
        fetch('http://localhost:4000/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ num1, num2, operation })
        })
        .then(response => response.json())
        .then(data => {
          setDisplay(String(data.result)); //update the display with the result from the backend
          setFirstNumber(null); //reset the first number
          setOperation(null); //reset the operation
          setWaitingForSecondNumber(false); //reset the flag
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }

    }
    //if it is the clear button, reset everything
    else if(value === 'C'){
      setDisplay(''); //clear the display
      setFirstNumber(null); //reset the first number
      setOperation(null); //reset the operation
      setWaitingForSecondNumber(false); //reset the flag
    }

  };




  //render the calculator interface
  return (
    <div style={{width:'200px', margin:'0 auto', textAlign:'center'}}>
      <h1>Calculator</h1>
      <div style={{border:'1px solid black', padding:'10px', marginBottom:'10px'}}>
        {display}
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'5px'}}>
        {buttons.map((button)=>(
          <button key={button} onClick={()=>handleButtonClick(button)}>{button}</button>
        ))}
      </div>
    </div>
  );

}
export default App;

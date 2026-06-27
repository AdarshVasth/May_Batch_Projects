import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [previous, setPrevious] = useState("");

  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+','-','*','/','='];

  const handleClick = (e) => {
    if (e.target.value === "=") {
      try {
        setResult(eval(input));
        setPrevious(input);
        setInput("");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + e.target.value);
    }
  }
  return (
    <div>
      <h1>Calculator</h1>
      {
        input !=="" && <div className='textbox'><h1 >{input}</h1></div>
      }

      {
        result !== "" && <div className='textbox'><h1>{input} = {result}</h1></div>
      }
      {numberList.map((number, index) => {
        if(index%3 === 0) {
          return <>
          <br key={index} />
          <button key={index} value={number} onClick={handleClick} className='button'>{number}</button>
          </>
        }
        return <button key={index} value={number} onClick={handleClick} className='button'>{number}</button>
      })}

      
      
      

    </div>
  )
}

export default App

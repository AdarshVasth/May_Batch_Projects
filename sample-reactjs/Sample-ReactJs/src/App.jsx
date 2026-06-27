import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Vite + React</h1>
      <h1>
        <h2>Hello Everyone!</h2>
        <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="gif" />
      </h1>

      <h1>Count: {count}</h1>

      <button onClick={handleClick}>Increment</button>
    </div>
    
  )
}

export default App

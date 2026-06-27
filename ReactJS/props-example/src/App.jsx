import { useState } from 'react'
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);

  function handleDisplay() {
    alert(count);
  }
  return (
    <>
      <Card count={count} setCount={setCount} displayCount={handleDisplay}/>
    </>
  )
}

export default App

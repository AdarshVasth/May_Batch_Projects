import { useEffect, useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Error from './Error.jsx';
import './App.css';

function App() {
  //useEffect - 
  const [loginPassword, setLoginPassword] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogginClicked, setIsLoginClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("loginPassword is updated - " + loginPassword);
    if (loginPassword.length > 5) {
      setIsDataLoaded(true);
    }
  }, [loginPassword]);

  function login() {
    setIsLoginClicked(true);
    if(loginPassword === "password123") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will be printed every 1 second - " + new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  //Two parts - 1. Callback function, 2. Dependency array
  //Callback function - It is a function that will be executed when the component is mounted or updated.
  //Dependency array - It is an array that contains the variables that will trigger the callback function when they are updated. If the dependency array is empty, the callback function will be executed only once when the component is mounted.

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>Login Page</h1>
      <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      {!isDataLoaded && <p>Atleast 6 characters required...</p>}

      {isLogginClicked && (isLoggedIn ? <Dashboard /> : <Error />)}

      <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {users.map(user => (
            <User user={user} key={user.id}/>
          ))}
        </div>
      )}
    </>
  )
}

export default App

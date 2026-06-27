import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function User({ user }) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          Email: {user.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

export default User;
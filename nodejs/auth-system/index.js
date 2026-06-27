const express = require('express');
const jwt = require('jsonwebtoken');
const logger = require('./middleware/middleware-logger');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

const SECRET_KEY = 'your_secret_key';
const users = [
    {id: 1, username: 'pawan', password: 'password123'},
    {id: 2, username: 'kajal', password: 'password456'},
    {id: 3, username: 'sachin', password: 'password789'}
]

const products = [
    {id: 1, name: 'Laptop', price: 30000},
    {id: 2, name: 'Mobile', price: 20000}
]

app.post('/login', logger, (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, SECRET_KEY, { expiresIn: '1h' });
        res.json({token});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});

app.get('/profile', auth, (req, res) => {
    const id = req.user.id
    const user = users.find(u => u.id == id);
    res.json({id: user.id, username: user.username});
});

app.get('/products', auth, (req, res) => {
    res.json(products);
});

app.post('/product', auth, (req, res) => {
    const {name, price} = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});


app.delete('/product/:id', auth, (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.status(200).json({message: 'Product deleted successfully'});
    } else {
        res.status(404).json({message: 'Product not found'});
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the authentication system!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
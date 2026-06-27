const express = require('express');

const app = express();
const users = [
        { id: 1, name: 'jOHN Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ];

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello, World! ExpessJS');
});

app.get('/about', (req, res) => {
    res.send('This is the about page of our ExpressJS application.');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page of our ExpressJS application.');
});

app.get('/users', (req, res) => {
    
    res.json(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.json(users.find(user => user.id === parseInt(req.params.id)) || {});
});

app.get('/user', (req, res) => {
    console.log(req.query);

    res.json(users.find(user => {
        return user.id === parseInt(req.query.id) && user.name.includes(req.query.name);
    }) || {});
});
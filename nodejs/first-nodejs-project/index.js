const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            message: 'List of students', 
            students: ['Alice', 'Bob', 'Charlie'] 
        }));
    }
    else if(req.url === '/staff') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            message: 'List of staff', 
            staff: ['Mr. Smith', 'Ms. Johnson', 'Dr. Brown'] 
        }));
    }
    else{

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
    }

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is a GET request');
});

// Post request
app.post('/comments', (req, res) => {
    res.send('This is a POST request');
});

// Put request
app.put('/comments', (req, res) => {
    res.send('This is a PUT request');
});

// Delete request
app.delete('/comments', (req, res) => {
    res.send('This is a DELETE request');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Run the server
// node comments.js
// Open the browser and go to localhost:3000/comments
// You will see the message This is a GET request

// Open the browser and go to localhost:3000/comments
// You will see the message This is a POST request

// Open the browser and go to localhost:3000/comments
// You will see the message This is a PUT request

// Open the browser and go to localhost:3000/comments
// You will see the message This is a DELETE request

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is a GET request');
});

// Post request
app.post('/comments', (req, res) => {
    res.send('This is a POST request');
});

// Put request
app.put('/comments', (req, res) => {
    res.send('This is a PUT request');
});

// Delete request
app.delete('/comments', (req, res) => {
    res.send('This is a DELETE request');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Run the server
// node comments.js
// Open the browser and go to localhost:3000/comments
// You will see the message This is a GET request

// Open the browser and go to localhost:3000/comments
// You will see the message This is a POST request

// Open the browser and go to localhost:3000/comments
// You will see the message This is a PUT request
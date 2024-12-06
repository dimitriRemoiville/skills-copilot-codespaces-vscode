// Create web server
const express = require('express');
const app = express();

// Create a path for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Create a path for the /comments URL
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Create a path for the /comments/new URL
app.get('/comments/new', (req, res) => {
  res.send('Welcome to the new comments page!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
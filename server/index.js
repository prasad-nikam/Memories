import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app=express();
// Import the Express.js library

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define a route for "/about"
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
require('./db'); // this connects to MongoDB

const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(express.json());

// POST a movie
app.post('/api/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Add test endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is connected!' });
});

// Connect to MongoDB
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

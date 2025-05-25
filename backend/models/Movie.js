// backend/models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: Number
});

module.exports = mongoose.model('Movie', movieSchema);
// backend/db.js
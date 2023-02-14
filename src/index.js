const express = require('express');
const path = require('path');
const movies = require('./data/movies.json');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join('public')));

app.get('/api/movies', (req, res) => {
  res.status(200).json(movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    age: movie.age,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
    rating: movie.rating
  })));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});
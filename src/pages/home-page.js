import React from 'react';
import { movies } from '../data';
import MovieCard from '../components/MovieCard';

const HomePage = () => (
  <div>
    <h2>Danh sách phim</h2>
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default HomePage;

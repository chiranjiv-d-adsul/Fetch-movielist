// src/components/FavoritesList.js

import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoritesList = () => {
  const favorites = useSelector(state => state.movies.favorites);

  const sortedFavorites = [...favorites].sort((a, b) => b.rating - a.rating);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedFavorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoritesList;

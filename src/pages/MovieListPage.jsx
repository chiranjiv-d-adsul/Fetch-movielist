import React from 'react';
import MovieList from '../components/MovieList';
import FavoritePage from './FavoritesPage';

const MovieListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <a href="/favorites" className="text-blue-500  text-[18px]">View Favorites</a>
      <MovieList />
    </div>


  );
};

export default MovieListPage;

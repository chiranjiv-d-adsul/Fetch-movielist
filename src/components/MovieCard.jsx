// src/components/MovieCard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.movies.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  return (


    <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="max-w-sm rounded overflow-hidden shadow-lg my-2 p-4">
      <img className="w-full" src={movie.image} alt={movie.movie} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        {/* <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-base hover:underline">{movie.imdb_url}</a> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.rating}</span>
        <span
          className="cursor-pointer inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleFavorite(movie));
          }}
          >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </span>
      </div>
    </a>

  );
};

export default MovieCard;

import React from 'react';
import FavoritesList from '../components/FavoritesList';

const FavoritesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;

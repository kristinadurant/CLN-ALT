import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
  return (
    <>
      {(favorites?.length > 0 && (
        <ul>
          {favorites?.map((favorite) => (
            <li key={favorite._id} className="list">
              <Link to={`/products/${favorite.product}`} className="listImage">
                <img src={favorite.image} alt={favorite.product} />
              </Link>
              <p>{favorite.product}</p>
            </li>
          ))}
        </ul>
      )) || (
        <div className="noResults">
          <p>No favorites yet.</p>
          <p>
            <Link to="/categories">Search for your favorites.</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;

import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
  console.log(favorites);
  return (
    <>
      {(favorites?.length > 0 && (
        <ul>
          {favorites?.map((favorite) => (
            <li key={favorite?._id} className="list">
              <Link
                to={`/products/${favorite?.product?._id}`}
                className="listImage"
              >
                <img
                  src={favorite?.product?.image}
                  alt={favorite?.product?.title}
                />
              </Link>
              <p>{favorite?.product?.title}</p>
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

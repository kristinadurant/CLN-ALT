import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Favorites = ({ favorites, fetchProfile }) => {
  const handleRemoveBookmark = async (e) => {
    try {
      await axios.delete(`/api/favorites/${e.target.value}`, {
        withCredentials: true
      });

      fetchProfile();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {(favorites?.length > 0 && (
        <ul>
          {favorites?.map((favorite) => (
            <li key={favorite?._id} className="list productsList">
              <div className="listWrapper">
                <Link
                  to={`/products/${favorite?.product?._id}`}
                  className="listImage"
                >
                  <img
                    className="productImage"
                    src={favorite?.product?.image}
                    alt={favorite?.product?.title}
                  />
                </Link>
              </div>
              <p className="favoritesProduct">{favorite?.product?.title}</p>
              <button
                className="button"
                value={favorite?._id}
                onClick={handleRemoveBookmark}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )) || (
        <div className="noResults">
          <p>No favorites yet.</p>
          <p>
            <Link to="/products">Search for your favorites.</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;

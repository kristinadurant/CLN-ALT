import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Favorites = ({ favorites }) => {
  const handleRemoveBookmark = async (e) => {
    try {
      await axios.delete(`/api/favorites/${e.target.value}`, {
        withCredentials: true
      });
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
              <div className="leftWrapper">
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
              </div>
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

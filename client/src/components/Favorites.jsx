import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Favorites = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/reviews/?user=${userId}`, { withCredentials: true })
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <>
      {(favorites?.length > 0 && (
        <ul>
          {favorites?.map((favorite) => (
            <li key={favorite._id} className="list">
              <Link to={`/products/${favorite.product}`} className="listImage">
                <img src={favorite.productImage} />
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

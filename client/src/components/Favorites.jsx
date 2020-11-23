import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Favorites = ({ userId }) => {
  const { currentUser } = useContext(AppContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites([{ user: 2 }]);
    //  axios
    //   .get(`/api/reviews/?user=${userId}`,
    //     { withCredentials: true }
    //   )
    //   .then((response) => {
    //     console.log(response);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

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
        <div>
          No favorites yet.{' '}
          <Link to="/categories">Search for products to review.</Link>
        </div>
      )}
    </>
  );
};

export default Favorites;

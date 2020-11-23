import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReviewsProfilePage = ({ userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/reviews/?user=${userId}`, { withCredentials: true })
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <>
      {(reviews?.length > 0 && (
        <ul>
          {reviews?.map((review) => (
            <li key={review._id} className="list">
              <Link className="listImage" to={`/products/${review.product}`}>
                <img src={review.productImage} />
              </Link>
              <div>
                <p className="stars">
                  <img src={require('../images/stars.png')} />
                  {review.rate}
                </p>
                <p>{review.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )) || (
        <div className="noResults">
          <p>No reviews yet. </p>
          <p>
            <Link to="/categories">Search for products to review.</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default ReviewsProfilePage;

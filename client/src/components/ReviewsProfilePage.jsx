import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsProfilePage = ({ reviews }) => {
  return (
    <>
      {(reviews?.length > 0 && (
        <ul>
          {reviews?.map((review) => (
            <li key={review._id} className="list">
              <Link className="listImage" to={`/products/${review.product}`}>
                <img src={review.image} alt={review.product} />
              </Link>
              <div>
                <p className="stars">
                  <img src={require('../images/stars.png')} alt="reviews" />
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

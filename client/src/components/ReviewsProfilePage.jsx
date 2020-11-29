import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const ReviewsProfilePage = ({ reviews }) => {
  return (
    <>
      {(reviews?.length > 0 && (
        <ul>
          {reviews?.map((review) => (
            <li key={review?._id} className="list">
              <div className="listWrapper">
                <Link
                  className="listImage"
                  to={`/products/${review?.product?._id}`}
                >
                  <img
                    className="productImage"
                    src={review?.product?.image}
                    alt={review?.product?.title}
                  />
                </Link>
              </div>
              <div>
                <p className="stars">
                  <Stars rate={review.rate} />
                  {review?.rate}
                </p>
                <p>{review?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )) || (
        <div className="noResults">
          <p>No reviews yet. </p>
          <p>
            <Link to="/products">Search for products to review.</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default ReviewsProfilePage;

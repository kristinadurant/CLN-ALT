import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const ReviewsProfilePage = ({ userId }) => {
  const { currentUser } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([{ _id: '2', rate: 2, description: 'this is a great product' }]);
    //  axios
    //   .get(`/api/reviews/?user=${userId?.toString()}`,
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
        <div>
          No reviews yet.{' '}
          <Link to="/categories">Search for products to review.</Link>
        </div>
      )}
    </>
  );
};

export default ReviewsProfilePage;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/reviews/?product=${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="reviewsHeader">
        <div className="stars">
          <img src={require('../images/stars.png')} />
          {reviews.length} Reviews
        </div>
        <button className="button"> + Review</button>
      </div>
      <ul>
        {reviews?.map((review) => (
          <li key={review._id} className="list">
            <div className="listImage">
              <img src={require('../images/placeholderUser.png')} />
              <p>{review.user}</p>
            </div>
            <div>
              <p>
                <img src={require('../images/stars.png')} />
                {review.rate}
              </p>
              <p>{review.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

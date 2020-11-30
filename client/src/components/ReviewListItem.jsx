import React from 'react';
import Stars from './Stars';

const ReviewListItem = ({ review }) => {
  return (
    <li className="list">
      <div className="listWrapper">
        <div className="listImage">
          <img
            src={
              review.user?.avatar || require('../images/placeholderUser.png')
            }
            alt="user"
          />
        </div>
        <p>{review.user?.name || 'User'}</p>
      </div>
      <div>
        <p className="stars">
          <Stars rate={review.rate} />
          {review.rate}
        </p>
        <p>{review.description}</p>
      </div>
    </li>
  );
};

export default ReviewListItem;

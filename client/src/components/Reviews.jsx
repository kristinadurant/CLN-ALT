import React from 'react';

const Reviews = ({ reviews }) => {
  const total = reviews.length;

  return (
    <>
      <div className="reviewsHeader">
        <div className="stars">
          <img src={require('../images/stars.png')} alt="reviews" />
          {total === 1 ? `${total} Review` : `${total} Reviews`}
        </div>
        <button className="button"> + Review</button>
      </div>
      <ul>
        {reviews?.map((review) => (
          <li key={review._id} className="list">
            <div className="listImage">
              <img
                src={review.avatar || require('../images/placeholderUser.png')}
                alt="user"
              />
              <p>{review.user.name}</p>
            </div>
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
    </>
  );
};

export default Reviews;

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import ReviewListItem from './ReviewListItem';
import Stars from './Stars';

const Reviews = ({ reviews, productId }) => {
  const { user, currentUser, setPopSignUp } = useContext(AppContext);
  const [addReview, setAddReview] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    if (e.target.name === 'rate') {
      setFormData({ ...formData, rate: Number(e.target.value) });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddReview = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios.post(
        '/api/reviews/',
        { ...formData, user: currentUser._id, product: productId },
        { withCredentials: true }
      );
      setFormData({});
      setAddReview(!addReview);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenReview = (e) => {
    if (!currentUser) {
      setPopSignUp('login');
    } else {
      setAddReview(!addReview);
    }
  };

  const total = reviews.length;

  const avgReviews = (reviews) => {
    let sum = 0;
    reviews.map((rate) => (sum = sum + rate.rate));
    return sum / reviews.length;
  };
  const avg = avgReviews(reviews);

  return (
    <>
      <li className="reviewsHeader list">
        <div className="stars" title={avg}>
          <Stars rate={Math.round(avg)} />
          {total === 1 ? `${total} Review` : `${total} Reviews`}
        </div>
        <button className="button" onClick={handleOpenReview}>
          {addReview ? 'Cancel' : '+ Review'}
        </button>
      </li>
      <ul>
        {addReview && (
          <li className="list">
            <div className="listWrapper">
              <div className="listImage">
                <img
                  src={
                    currentUser?.avatar ||
                    require('../images/placeholderUser.png')
                  }
                  alt="user"
                />
              </div>
              <p>{currentUser?.name}</p>
            </div>
            <form className="reviewInput" onSubmit={handleAddReview}>
              <p>
                <input
                  onChange={handleChange}
                  name="rate"
                  type="number"
                  min="1"
                  max="5"
                />
                <input
                  onChange={handleChange}
                  name="description"
                  type="textarea"
                  placeholder="Add your review..."
                />
              </p>
              <button className="button bgBlack" type="submit">
                + Add
              </button>
            </form>
          </li>
        )}
        {reviews?.map((review) => (
          <ReviewListItem key={review._id} review={review} />
        ))}
      </ul>
    </>
  );
};

export default Reviews;

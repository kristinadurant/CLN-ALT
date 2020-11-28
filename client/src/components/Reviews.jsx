import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const Reviews = ({ reviews, productId }) => {
  const total = reviews.length;
  const { user, currentUser, setPopSignUp } = useContext(AppContext);
  const [addReview, setAddReview] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    if (e.target.name === 'rate') {
      setFormData({ ...formData, rate: Number(e.target.value) });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, user: currentUser._id, product: productId });
  };

  const handleAddReview = async (e) => {
    const form = e.target;
    e.prefentDefault();
    try {
      await axios.post('/api/reviews/', formData, { withCredentials: true });
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

  return (
    <>
      <li className="reviewsHeader list">
        <div className="stars">
          <img src={require('../images/stars.png')} alt="reviews" />
          {total === 1 ? `${total} Review` : `${total} Reviews`}
        </div>
        <button className="button" onClick={handleOpenReview}>
          {addReview ? 'Cancel' : '+ Review'}
        </button>
      </li>
      <ul>
        {addReview && (
          <li className="list">
            <div className="listImage">
              <img
                src={user?.avatar || require('../images/placeholderUser.png')}
                alt="user"
              />
              <p>{user?.name}</p>
            </div>
            <form onSubmit={handleAddReview}>
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
              />
              <button className="button bgBlack" type="submit">
                + Add
              </button>
            </form>
          </li>
        )}
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

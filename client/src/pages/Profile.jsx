import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReviewsProfilePage from '../components/ReviewsProfilePage';
import Favorites from '../components/Favorites';

const Profile = () => {
  const { currentUser, setPopSignUp } = useContext(AppContext);
  const [tab2, setTab2] = useState(true);
  console.log(currentUser);

  return (
    <div id="profile" className="inner">
      <div className="userContainer columns2">
        <img
          src={currentUser?.image || require(`../images/placeholderUser.png`)}
        />
        <div>
          <p>{currentUser?.name}</p>
          <p>{currentUser?.email}</p>
          <a className="block" onClick={(e) => setPopSignUp('resetPassword')}>
            Change Password
          </a>
        </div>
      </div>
      <div className="tabs">
        <button
          className={tab2 && 'active'}
          onClick={(e) => {
            setTab2(true);
          }}
        >
          Favorites
        </button>
        <button
          className={!tab2 && 'active'}
          onClick={(e) => {
            setTab2(false);
          }}
        >
          Reviews
        </button>
      </div>
      <div className="favorites" style={{ display: !tab2 && 'none' }}>
        <Favorites favorites={currentUser?.favorites} />
      </div>
      <div className="reviews" style={{ display: tab2 && 'none' }}>
        <ReviewsProfilePage reviews={currentUser?.reviews} />
      </div>
    </div>
  );
};

export default Profile;

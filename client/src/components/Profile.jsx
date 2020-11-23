import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { currentUser } = useContext(AppContext);
  const [tab1, setTab1] = useState(true);

  return (
    <div className="inner">
      <img
        src={currentUser?.image || require(`../images/placeholderUser.png`)}
      />
      <div>
        {currentUser?.name}
        {currentUser?.email}
      </div>
      <div className="tabs">
        <button
          className={tab1 && 'active'}
          onClick={(e) => {
            setTab1(true);
          }}
        >
          Favorites
        </button>
        <button
          className={!tab1 && 'active'}
          onClick={(e) => {
            setTab1(false);
          }}
        >
          Reviews
        </button>
      </div>
    </div>
  );
};

export default Profile;
